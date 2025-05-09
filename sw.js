const CACHE_NAME = 'planeta-digital-v1';
const LOCAL_ASSETS = [
  '/',
  '/index.html',
  '/cart.html',
  '/contact.html',
  '/css/style.css',
  '/js/main.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(LOCAL_ASSETS))
      .catch(err => console.error('Error en install:', err))
  );
});

self.addEventListener('fetch', (e) => {
  // Excluir recursos externos de OneSignal
  if (e.request.url.startsWith('https://cdn.onesignal.com')) {
    return fetch(e.request); // No usar cache para OneSignal
  }

  e.respondWith(
    caches.match(e.request)
      .then(response => {
        // Devolver recurso cacheado o hacer fetch
        return response || fetch(e.request).catch(() => {
          // Fallback para páginas si está offline
          if (e.request.mode === 'navigate') {
            return caches.match('/offline.html');
          }
        });
      })
  );
});