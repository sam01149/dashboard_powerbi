# Dashboard Talent

MVP portal dengan satu alur: login → satu report Power BI.

## Menjalankan lokal

1. Buat `.env.local` lokal (tidak pernah di-commit) dan isi seluruh environment variable yang diperlukan.
2. Jalankan `npm install` lalu `npm run dev`.

## Konfigurasi login

`PORTAL_USERS_CONFIG` harus berupa JSON array. Password wajib hash bcrypt, bukan password asli.

```json
[
  {
    "username": "talent-01",
    "passwordHash": "$2b$12$..."
  }
]
```

Contoh membuat hash secara lokal setelah Node.js tersedia:

```powershell
node -e "const bcrypt=require('bcryptjs'); bcrypt.hash('GANTI_PASSWORD', 12).then(console.log)"
```

## Deployment Vercel

Repository ini sudah memakai project root. Di Vercel, import repository lalu tambahkan variable berikut di **Project Settings → Environment Variables**: `PORTAL_USERS_CONFIG`, `SESSION_SECRET`, `ENTRA_TENANT_ID`, `ENTRA_CLIENT_ID`, `ENTRA_CLIENT_SECRET`, `POWERBI_WORKSPACE_ID`, dan `POWERBI_REPORT_ID`.

Jangan memasukkan file `.env*` ke GitHub. Jangan gunakan `Publish to web` untuk report.

