# Dashboard Talent

MVP portal dengan satu alur: login → satu report Power BI.

## Menjalankan lokal

1. Salin `.env.example` menjadi `.env.local`.
2. Isi seluruh environment variable dengan nilai development yang aman.
3. Jalankan `npm install` lalu `npm run dev`.

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

Atur root directory project ke `dashboard`, lalu tambahkan seluruh variable dari `.env.example` di Vercel Project Settings → Environment Variables. Jangan gunakan `Publish to web` untuk report.

