import "server-only";

type PortalUser = {
  username: string;
  passwordHash: string;
};

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required server configuration: ${name}`);
  return value;
}

export function getPortalUsers(): PortalUser[] {
  const raw = required("PORTAL_USERS_CONFIG");
  let users: unknown;

  try {
    users = JSON.parse(raw);
  } catch {
    throw new Error("PORTAL_USERS_CONFIG must contain valid JSON.");
  }

  if (!Array.isArray(users) || users.length === 0) {
    throw new Error("PORTAL_USERS_CONFIG must contain at least one user.");
  }

  const valid = users.every(
    (user): user is PortalUser =>
      typeof user === "object" && user !== null &&
      typeof (user as PortalUser).username === "string" &&
      (user as PortalUser).username.length > 0 &&
      typeof (user as PortalUser).passwordHash === "string" &&
      (user as PortalUser).passwordHash.startsWith("$2"),
  );

  if (!valid) throw new Error("Each portal user needs a username and bcrypt passwordHash.");
  return users;
}

export const powerBiConfig = () => ({
  tenantId: required("ENTRA_TENANT_ID"),
  clientId: required("ENTRA_CLIENT_ID"),
  clientSecret: required("ENTRA_CLIENT_SECRET"),
  workspaceId: required("POWERBI_WORKSPACE_ID"),
  reportId: required("POWERBI_REPORT_ID"),
});

export const sessionSecret = () => {
  const secret = required("SESSION_SECRET");
  if (secret.length < 32) throw new Error("SESSION_SECRET must be at least 32 characters.");
  return secret;
};

