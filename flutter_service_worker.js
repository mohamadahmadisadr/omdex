'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-16x16.png": "6aad7976174b36167bd9a3cdd033ccf2",
"version.json": "483f023318a683f565f0f51577bc9861",
"index.html": "f56825151a40c8ee60dfec220e5eac37",
"/": "f56825151a40c8ee60dfec220e5eac37",
"main.dart.js": "5b37ca6b38801b682fe1a08d9543b5c3",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "6aad7976174b36167bd9a3cdd033ccf2",
"icons/favicon.ico": "dd5c472c11d9065d3628f73b81754c5b",
"icons/android-chrome-192x192.png": "b3d2bd4aad806ad5365ae065021dbd6a",
"icons/apple-touch-icon.png": "ebe232db7ab3b8e78364e39e5e997f0b",
"icons/android-chrome-512x512.png": "b0c0bd8c605246d06817ee5ee9fadcef",
"icons/favicon-32x32.png": "de232902362c9dbdceab50990676843a",
"manifest.json": "1a9408574fbcb66b0ed9ef7eb200e00c",
"assets/AssetManifest.json": "3f8f7573b7b7c3c0cab5e36b5dfe4ff4",
"assets/NOTICES": "7d7e2be4f273064e7719d84d478ed869",
"assets/FontManifest.json": "ef815fd522bcb26a4240523f9a95894f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "3c99729914521e7f0e2bd39a83ed3947",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "df9254d10dff82cd899788f111ab32c4",
"assets/fonts/MyIcons.ttf": "90072f172278965821c6ddeaca3fd15f",
"assets/fonts/IRANSans.ttf": "97b4acac12b7e325c650aa1fd14e92a2",
"assets/fonts/NewIcon.ttf": "7a5e9a045739816f553e5a499c73e81a",
"assets/fonts/IRANSans(FaNum).ttf": "034ca0f6f1a42508cb52287bd63bd48c",
"assets/fonts/MaterialIcons-Regular.otf": "f16d3f5235f704992506c5effd5e9fc5",
"assets/assets/images/test.gif": "7a7de002b9599f3d68468fd9c9b568be",
"assets/assets/images/tick.png": "8f0ee661c3b6586611840940e4da6f42",
"assets/assets/images/tick.jpg": "b35d71a849c7d1e9f437a4e1a788abdb",
"assets/assets/images/n.png": "10f54700b1dc8fca101f3da2620b1f72",
"assets/assets/images/map.jpg": "d670f40eb8f6f776cbf9fd3c6ee4ecf1",
"assets/assets/images/logo.png": "e5a112e491cf75d3473f7260633a5c55",
"assets/assets/images/video.png": "37d9328fbcfb09a0e830922a1011a80b",
"assets/assets/images/a.png": "1e1b8bfe25c85248ec6fb17dbd42a03b",
"assets/assets/images/s.png": "b9c01c9eff3b4154e7a78d83b113cb4c",
"assets/assets/images/Image.jpg": "295570de6567cf0f3e766bc782309157",
"assets/assets/icons/Path.svg": "7c873726995b52e3829784a713932c26",
"assets/assets/icons/user.svg": "56e146557ceddb361dcc53f368bfe492",
"assets/assets/icons/logout.svg": "4c4770680c2c4e6ea7d26f7489fd7097",
"assets/assets/icons/sss.svg": "636570f513a17ab7db5ea9d2a42d7b5e",
"assets/assets/icons/store.png": "9c15147b376bedc8aa7738576a455933",
"assets/assets/icons/shopping-bag.png": "3a4d9e3b6ffdd0eaad78c03762fb156a",
"assets/assets/icons/address.svg": "0ffa7673db7d51d2fdacd22b11995b5e",
"assets/assets/icons/ab.svg": "1f35b38943b4fb7ecbc77811a81fefd2",
"assets/assets/icons/shopping-bag.svg": "85ee8c714151fd217bf2941ce223247f",
"assets/assets/icons/package.svg": "8b7cce4ee168c4774f9a29eaa8a8aa4b",
"assets/assets/icons/law.svg": "e96737d8dd78198aaa1c4acf82ad1a7a",
"assets/assets/icons/bell2.svg": "72de46b59c0165f90b0d6ecc711fca0d",
"assets/assets/icons/store.svg": "7fd213d956e0664b1856a5c904f77f58",
"assets/assets/icons/envelope.svg": "fc75c46eba012999841051314eee08b3",
"assets/assets/icons/pin.svg": "471c6af41b3097f4665c6de7272e38d2",
"assets/assets/icons/home.png": "5140d76aca3697acae99925e9db812ee",
"assets/assets/icons/user.png": "b7eb38447a173a72dc86fa8c74856e90",
"assets/assets/icons/bell.svg": "2fd6140946304a2d1c36adda04d301eb",
"assets/assets/icons/add.svg": "99290358ad55b52b1b38cb00ba101053",
"assets/assets/icons/video-files.svg": "1180e4c90b35ec4d8c2e7cdb4e8ee967",
"assets/assets/icons/add-to-basket.svg": "5c40d04ec55e367fd02b9a94871bd0a7",
"assets/assets/icons/favorite.svg": "64a3420eb37ebf4071b4d80f85641aaa",
"assets/assets/icons/e.svg": "0a1bc91b85608010ec61ff04b33cb22b",
"assets/assets/icons/back.svg": "b20c70c2e2a6476c26a96bc410d21454",
"assets/assets/icons/box.svg": "64905869c3981d93527ea254501f8bc0",
"assets/assets/icons/play-button.svg": "72cee9b779dcdd837f2c62d0c5151d96",
"assets/assets/icons/phone-call.svg": "4b6eef8c4cc1cef115e95cb14c8ff49e",
"assets/assets/icons/credit-card-payment.svg": "5372c7b161fe3ec521dc5207eb3bb232",
"assets/assets/icons/home1.svg": "43bf5395f60c7b5807367730e983ace1",
"assets/assets/icons/pencil.svg": "f0a1f4640f619c2d80127f5eb7cc119b",
"assets/assets/icons/videof.svg": "1180e4c90b35ec4d8c2e7cdb4e8ee967",
"assets/assets/icons/add-to-cart.svg": "8fd8cf4255301d868c710481f5a3696c",
"assets/assets/icons/share.svg": "266aaa0f4ed0a632db640bbaea070c1f",
"assets/assets/icons/marketing.svg": "eba2f3f4686194ac37e54010e7f77466",
"assets/assets/icons/comment.svg": "94bf531bd645f2927f838ef0e494d71a",
"assets/assets/icons/calendar.svg": "0a1bc91b85608010ec61ff04b33cb22b",
"assets/assets/icons/phone-call.png": "0ce4d640097555ee190afc156f993da6",
"assets/assets/icons/bookmark.svg": "70647411a96bfce063358b1912cdc1f4",
"assets/assets/icons/home%2520.svg": "903fde4c70c93a1bd15911c2a4b95ce1",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
