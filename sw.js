self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("dare-app").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./dare-app.js",
        "./roll-sound.mp3",
        "./settings-click.mp3"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
