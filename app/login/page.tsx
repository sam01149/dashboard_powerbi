import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { LoginForm } from "./login-form";

export default async function LoginPage() {
  if (await getSession()) redirect("/dashboard");

  return (
    <main className="login-shell">
      <section className="login-card" aria-labelledby="login-title">
        <p className="eyebrow">Portal Talent</p>
        <h1 id="login-title">Masuk ke dashboard</h1>
        <p className="intro">Gunakan username dan password yang telah diberikan kepada kamu.</p>
        <LoginForm />
      </section>
    </main>
  );
}

