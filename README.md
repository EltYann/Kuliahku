# KuliahKu
Semua urusan kuliah, satu tempat. PWA tanpa akun, tanpa login, tanpa server. Data disimpan di perangkat (IndexedDB).

## Struktur
- `index.html`, `manifest.webmanifest`, `sw.js` — kerangka PWA dan dukungan offline
- `css/style.css` — tema terang/gelap, tampilan mobile-first
- `js/db.js` — IndexedDB, ekspor/impor/reset
- `js/ui.js` — fungsi bantu tampilan
- `js/settings.js` — preferensi + halaman Pengaturan
- `js/courses.js` — Mata Kuliah (CRUD)
- `js/app.js` — navigasi dan Beranda

## Menjalankan
Aktifkan GitHub Pages: Settings → Pages → Deploy from a branch → `main` / `(root)`.
Buka `https://eltyann.github.io/Kuliahku/` di Chrome Android, lalu menu ⋮ → "Instal aplikasi".
Setelah mengubah berkas, naikkan `CACHE` di `sw.js` (v1 → v2).
