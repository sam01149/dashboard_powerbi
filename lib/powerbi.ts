import "server-only";

import { powerBiConfig } from "@/lib/config";

type EntraTokenResponse = { access_token?: string };
type ReportResponse = { id?: string; embedUrl?: string };
type EmbedTokenResponse = { token?: string; expiration?: string };

async function powerBiRequest(url: string, token: string, init?: RequestInit) {
  const response = await fetch(url, {
    ...init,
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
  if (!response.ok) throw new Error(`Power BI request failed with status ${response.status}.`);
  return response;
}

async function getServiceToken() {
  const { tenantId, clientId, clientSecret } = powerBiConfig();
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "client_credentials",
    scope: "https://analysis.windows.net/powerbi/api/.default",
  });
  const response = await fetch(`https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/oauth2/v2.0/token`, {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!response.ok) throw new Error(`Microsoft Entra token request failed with status ${response.status}.`);
  const data = (await response.json()) as EntraTokenResponse;
  if (!data.access_token) throw new Error("Microsoft Entra did not return an access token.");
  return data.access_token;
}

export async function getEmbedConfiguration() {
  const { workspaceId, reportId } = powerBiConfig();
  const serviceToken = await getServiceToken();
  const reportUrl = `https://api.powerbi.com/v1.0/myorg/groups/${encodeURIComponent(workspaceId)}/reports/${encodeURIComponent(reportId)}`;
  const reportResponse = await powerBiRequest(reportUrl, serviceToken);
  const report = (await reportResponse.json()) as ReportResponse;

  const tokenResponse = await powerBiRequest(`${reportUrl}/GenerateToken`, serviceToken, {
    method: "POST",
    body: JSON.stringify({ accessLevel: "View" }),
  });
  const embedToken = (await tokenResponse.json()) as EmbedTokenResponse;

  if (!report.id || !report.embedUrl || !embedToken.token || !embedToken.expiration) {
    throw new Error("Power BI returned an incomplete embed configuration.");
  }

  return { reportId: report.id, embedUrl: report.embedUrl, token: embedToken.token, expiresAt: embedToken.expiration };
}

