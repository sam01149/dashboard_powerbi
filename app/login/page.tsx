import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  if (await getSession()) redirect("/dashboard");
  const { error } = await searchParams;

  return (
    <main className="login-shell">
      <section className="login-card" aria-labelledby="login-title">
        <p className="eyebrow">Portal Talent</p>
        <h1 id="login-title">Masuk ke dashboard</h1>
        <p className="intro">Gunakan akun Microsoft Entra perusahaan yang telah diberi akses.</p>
        {error ? <p className="form-error" role="alert">{error}</p> : null}
        <a className="login-button" href="/api/auth/login">Masuk dengan Microsoft Entra</a>
      </section>
    </main>
  );
}

