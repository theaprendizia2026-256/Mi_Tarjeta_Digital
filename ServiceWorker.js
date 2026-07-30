const CACHE_NAME = 'atipico-hostel-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
  './images/logo.png',
  './images/QR.png',
  './images/mapa.jpg',
  './images/foto 1.jpeg',
  './images/foto 2.jpeg',
  './images/foto 3.jpg',
  './images/foto 4.jpg',
  './images/foto 5.jpg'
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
