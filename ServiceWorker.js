const CACHE_NAME = 'atipico-hostel-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
  './images/logo.png',
  './images/QR.png',
  './images/mapa.jpg',
  './images/foto 1.png',
  './images/foto 2.png',
  './images/foto 3.png',
  './images/foto 4.png',
  './images/foto 5.png'
];

// Instalar Service Worker y guardar recursos en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

// Servir desde caché si falla la red
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
