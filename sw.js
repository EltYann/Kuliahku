// Service Worker: menyimpan berkas aplikasi agar bisa dibuka tanpa internet.
// Setiap kali kamu mengubah berkas aplikasi, naikkan nomor CACHE (v1 -> v2) agar HP memuat versi baru.
const CACHE = 'kuliahku-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './css/style.css',
  './js/app.js', './js/db.js', './js/ui.js', './js/settings.js', './js/courses.js',
  './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true })
    .then(hit => hit || fetch(e.request).catch(() => caches.match('./index.html'))));
});
