import "server-only";

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required server configuration: ${name}`);
  return value;
}

function requiredCsv(name: string): string[] {
  const values = required(name).split(",").map((value) => value.trim()).filter(Boolean);
  if (!values.length) throw new Error(`${name} must contain at least one value.`);
  return values;
}

export const entraConfig = () => ({
  tenantId: required("ENTRA_TENANT_ID"),
  clientId: required("ENTRA_CLIENT_ID"),
  clientSecret: required("ENTRA_CLIENT_SECRET"),
  redirectUri: required("ENTRA_REDIRECT_URI"),
  allowedGroupIds: requiredCsv("ENTRA_ALLOWED_GROUP_IDS"),
});

export const powerBiConfig = () => {
  const { tenantId, clientId, clientSecret } = entraConfig();
  return {
    tenantId,
    clientId,
    clientSecret,
    workspaceId: required("POWERBI_WORKSPACE_ID"),
    reportId: required("POWERBI_REPORT_ID"),
  };
};

export const sessionSecret = () => {
  const secret = required("SESSION_SECRET");
  if (secret.length < 32) throw new Error("SESSION_SECRET must be at least 32 characters.");
  return secret;
};

