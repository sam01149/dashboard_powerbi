"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);

    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: form.get("username"), password: form.get("password") }),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        setError(data.message ?? "Login tidak berhasil. Coba lagi.");
        return;
      }
      router.replace("/dashboard");
      router.refresh();
    } catch {
      setError("Tidak dapat menghubungi layanan login. Periksa koneksi dan coba lagi.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="login-form" onSubmit={onSubmit} noValidate>
      <label className="field" htmlFor="username">
        Username
        <input id="username" name="username" autoComplete="username" required disabled={pending} />
      </label>
      <label className="field" htmlFor="password">
        Password
        <input id="password" name="password" type="password" autoComplete="current-password" required disabled={pending} />
      </label>
      {error ? <p className="form-error" role="alert">{error}</p> : null}
      <button type="submit" disabled={pending}>{pending ? "Memeriksa…" : "Masuk"}</button>
    </form>
  );
}

