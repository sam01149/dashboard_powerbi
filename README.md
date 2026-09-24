# Dashboard Talent

MVP portal dengan satu alur: login Microsoft Entra → satu report Power BI. Portal hanya menangani autentikasi pengguna dan penerbitan token embed; penyimpanan, sinkronisasi SharePoint, dan pemrosesan data tetap menjadi layanan repository/Power BI terpisah.

## Menjalankan lokal

1. Buat `.env.local` lokal (tidak pernah di-commit) dan isi seluruh environment variable yang diperlukan.
2. Jalankan `npm install` lalu `npm run dev`.

## Konfigurasi Microsoft Entra

Gunakan app registration Microsoft Entra yang sama atau terpisah untuk portal dan Power BI service principal. Tambahkan redirect URI web persis seperti `https://DOMAIN_PORTAL/api/auth/callback`, lalu tambahkan claim **Groups** pada ID token. Buat grup Entra khusus pengguna dashboard dan masukkan object ID grup tersebut ke `ENTRA_ALLOWED_GROUP_IDS`.

Portal menolak akses bila ID token tidak memuat sedikitnya satu group ID yang diizinkan. Ini memastikan aplikasi tetap hanya dapat dipakai pengguna internal yang berwenang.

## Deployment Vercel

Repository ini sudah memakai project root. Di Vercel, import repository lalu tambahkan variable berikut di **Project Settings → Environment Variables**: `SESSION_SECRET`, `ENTRA_TENANT_ID`, `ENTRA_CLIENT_ID`, `ENTRA_CLIENT_SECRET`, `ENTRA_REDIRECT_URI`, `ENTRA_ALLOWED_GROUP_IDS`, `POWERBI_WORKSPACE_ID`, dan `POWERBI_REPORT_ID`.

`ENTRA_ALLOWED_GROUP_IDS` adalah daftar comma-separated object ID grup Entra. Pada app registration, service principal juga perlu menjadi member/admin workspace Power BI dan tenant harus mengizinkan service principal memakai Power BI REST API. Jangan gunakan `Publish to web`; embedding ini menggunakan token View yang diterbitkan server.

Jangan memasukkan file `.env*` ke GitHub. Jangan gunakan `Publish to web` untuk report.

