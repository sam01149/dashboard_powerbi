"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const ReportEmbed = dynamic(
  () => import("./report-embed").then((module) => module.ReportEmbed),
  { ssr: false, loading: () => <p className="report-loading" aria-live="polite">Menyiapkan dashboard…</p> },
);

type EmbedConfiguration = {
  reportId: string;
  embedUrl: string;
  token: string;
};

export function DashboardClient({ username }: { username: string }) {
  const router = useRouter();
  const [configuration, setConfiguration] = useState<EmbedConfiguration | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    fetch("/api/powerbi/embed", { cache: "no-store" })
      .then(async (response) => {
        const data = (await response.json()) as EmbedConfiguration & { message?: string };
        if (!response.ok) throw new Error(data.message ?? "Dashboard belum dapat dimuat.");
        return data;
      })
      .then((data) => { if (active) setConfiguration(data); })
      .catch((reason: unknown) => { if (active) setError(reason instanceof Error ? reason.message : "Dashboard belum dapat dimuat."); });
    return () => { active = false; };
  }, []);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/login");
    router.refresh();
  }

  return (
    <main className="dashboard-shell">
      <header className="dashboard-header">
        <div>
          <h1>Dashboard Talent</h1>
          <p>Masuk sebagai {username}</p>
        </div>
        <div className="header-actions">
          <button className="logout-button" type="button" onClick={logout}>Keluar</button>
        </div>
      </header>
      <section className="report-area" aria-label="Dashboard Power BI">
        <div className="report-frame">
          {error ? <p className="report-error" role="alert">{error}</p> : null}
          {!configuration && !error ? <p className="report-loading" aria-live="polite">Memuat dashboard…</p> : null}
          {configuration ? <ReportEmbed configuration={configuration} /> : null}
        </div>
      </section>
    </main>
  );
}

