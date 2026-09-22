"use client";

import { models } from "powerbi-client";
import { PowerBIEmbed } from "powerbi-client-react";

type EmbedConfiguration = {
  reportId: string;
  embedUrl: string;
  token: string;
};

export function ReportEmbed({ configuration }: { configuration: EmbedConfiguration }) {
  return (
    <PowerBIEmbed
      cssClassName="report-container"
      embedConfig={{
        type: "report",
        id: configuration.reportId,
        embedUrl: configuration.embedUrl,
        accessToken: configuration.token,
        tokenType: models.TokenType.Embed,
        settings: {
          panes: { filters: { expanded: false, visible: false }, pageNavigation: { visible: true } },
          background: models.BackgroundType.Transparent,
        },
      }}
    />
  );
}

