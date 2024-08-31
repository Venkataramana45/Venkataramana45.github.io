'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "2b6e5244e34e4bbd405f43112d234f57",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "82b6a62b32298809b4bb2673e38005f9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0a2617e232ad4381269873f8def5839e",
".git/logs/refs/heads/main": "9ede9c1a4f1cac561fe5b47509f0170e",
".git/logs/refs/remotes/origin/main": "ecdbef5b37be9bc1437fad20892cbd4a",
".git/objects/07/833a5ae305c7f9c92bf58b8f2fa07400115707": "ae823e6ad91cf26cb3e3e9ee55c0ae96",
".git/objects/0c/9816a20dd7acb3a981bf2ecdec86400ae1e6fc": "7ebac3b92ae7b28fa2dc60463dc2217e",
".git/objects/0e/d1c8aa589940a1a04de44947c1363127c5bb13": "c7022eca04f7b8f5b419cc0416d7c3e3",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/a2001eb8d4c74323efacaeeb3f25a7ee8993d3": "77d729a27bf53807c73bfb06b94fb958",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/d030f05f294b30f2e8324bf10bcdc6e6174b13": "f6fd0dbda9238947cf9b0eed7f165cfd",
".git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
".git/objects/32/f17734a0436a0d9496f47c6431d65364d8abad": "a0eaaabea135e16842da8456956330b3",
".git/objects/36/78eadd92b0ee2372c870018ca4bee543a42399": "b8d57d00545738ab1eb35a0e8c3fbbd6",
".git/objects/43/ff9f0a06591aa078b5b669d935be1a3b235320": "9d2edc03644e3db9a333a098ac7f6b63",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e9347e297d41d0bfafcf59ca6abf7caefe6f0f": "71ebb278f3f760d607c8ff67a31f17f8",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/68e73949eee95d5abe077ad3b3017823e717fc": "441b5225d46189a8e54b442164c0f567",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/1ca1cea1e36d8a06072b6a92cd8b01188f8f82": "3bc497070e44cfeae0e865bdccf2c993",
".git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
".git/objects/69/b708dff377084f2aacfec8cbe172e439f5334b": "02c27afd7acda6e328c25cb84797e80d",
".git/objects/6c/5ac70e4878a9cecf03633a5edb0af97ff09ccd": "1c0d37dc643419a7fa9de2bbb1bf67cf",
".git/objects/6c/5f28c7ffd8b02ecca086e780049533651e6f9e": "a7f8184d6dd021504e38ea498ec99be8",
".git/objects/6d/bfc235d5da3624a648368b4f32736dc8c4b509": "644b517be1f94d1d7f22d4a9c8c3a685",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
".git/objects/7b/d42fca12b0dc038581cd5d79647da23b790d29": "c20402d97abe2535cc6da8eab069c51c",
".git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
".git/objects/81/11e1ae4066db7d8412834fa115b92f02408f02": "f1a42e7c543e3773fa1061b9add5bbf9",
".git/objects/84/e4ca9a1e1954d5e876344dd5a0adc0ec2de7e6": "bef8b95230ee518bed9130cff0c48128",
".git/objects/88/baebd02920629ca7b8923b0d4be782fb715c29": "9a20a2f43cde6557609d5a29a395768d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/7cd70a548d9e9ccf9a71fb535076e5053e0631": "0f262a6af90157d44c5f7c48500fc695",
".git/objects/8f/391abcd048ada93b3ecc7e814214619732400d": "650062edaf2c68abe42d5f8eb0742020",
".git/objects/91/e9edeb607a2b1e02c0dd2219c3e3ae754cba5e": "def867c9aa9cbe48b2c08808265fae11",
".git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/4846941e91b963222fb92bac189caa5581ef6a": "0556ae08293073c919df86d59985bfcf",
".git/objects/99/095d7e814657b25a5ef503fee7494aca453282": "e1b83147bfc26fa9c80d59ef3f050374",
".git/objects/a3/7cc4d75bed7328a3a0a6438f3891ef04f0be2d": "240a00b42a694bf24766c5cf71f33e39",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/aa07e04227871a79e315b4229e0cf6af70bdb0": "22deed69590d0198e9a9ba90f1d6d400",
".git/objects/b9/9f8bbe101b9ad2aececc8f6f11317f91e2fb13": "ae65b4d20255569a33d72312e9ee0cc7",
".git/objects/c3/8c5ccf418a25862654eab8d88253458ecad400": "1741a572092b2992bc1f7db0bab36d7e",
".git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/25ae1160d5157959970940f405c3cae96b2122": "eeb44a5ce5aa846c25ca5073857d0b45",
".git/objects/cd/fbb8f18c790d943c4b014e48fead973e0d2fb7": "4f590c11a5573044b8f27eec23516c60",
".git/objects/d0/99b781a7ffb3b6cbe8bb4fe44eae9fc5674105": "2b8c7325192b20b128894305964dcbc7",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/fa5871e721de8fb145dd0b23a0388e391446be": "7515a95be814688837885f26513a37c4",
".git/objects/d5/cb568ed9c3f8ac6b85055818351c43fdf93ef4": "46f0319eec6f0f1286f9ded7303fb9b1",
".git/objects/dd/c645b9db5cd74054adcc3f9fa8a1d61b213943": "e45340ef0e42b99bb8fecfdc1f87b920",
".git/objects/df/7422abcc056a53b6f3c56691fc7a7ea35b2097": "5ad4e881ad25056d3c0d0a9c50b19be4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/7c83218fa0df2fd03a52849107c72768089566": "8477e0a3840fc9c2ebe88b1f7a77e325",
".git/objects/f7/2d331ae2d26987cd48bf5a6452dda5ebc66204": "53dd099c04487d9a5efb01003f8a7f0b",
".git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/7205e3accf7d136bf285fb925e85129187c45a": "8212f214c1bf059d2b050941fc998ab2",
".git/refs/heads/main": "04f8f20b5bd12a229cb019a75413ed33",
".git/refs/remotes/origin/main": "04f8f20b5bd12a229cb019a75413ed33",
"apple-touch-icon.png": "c15f1f1403e97fb960ffe39abb33cad3",
"assets/AssetManifest.bin": "aa1758fd068f18351f2ea9daa2a0543e",
"assets/AssetManifest.bin.json": "c6ec554a74778f362a7819fc23f72dd3",
"assets/AssetManifest.json": "416894f384cebc0f9ad4826bb039439c",
"assets/assets/ai.png": "8ec6f2261808e036abc75640b9049019",
"assets/assets/bg.png": "6ca66ad23c1397dffc970c1433f901b7",
"assets/assets/earth.png": "81cf3f7b037a87c668bd55d9a7c1dec8",
"assets/assets/f.png": "f18b946d454bbf2611720dbdff1453e3",
"assets/assets/flash.png": "d91649000631e213fe81091c44f62562",
"assets/assets/img.png": "3663cae6eb2282cab8fc8b5640ed5749",
"assets/assets/Incal.png": "f8571e44eaa45522d5f06ea6b6c4355b",
"assets/assets/logo.png": "18d20e866a9d54b2a4350dedf62b089e",
"assets/assets/music.png": "2bbb0b8899e2a86378fb03667ce647aa",
"assets/assets/notes.png": "351d9f3b0373fbb5c101a3bf288b6c9c",
"assets/assets/Resume.pdf": "b188e0294cd25505f1ec4cee41e7e7c4",
"assets/assets/translator.png": "fb48087a6d9073484b6af51d874026b6",
"assets/assets/v.mp4": "f5ef19e016d1a5f4d601eec794f04e22",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "432ee9f835a79402a5671b33caa702b1",
"assets/NOTICES": "35c89b36d4bd22dedd39e4fa1b0e9a2a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "528a2be2be57f07fcec4edf93a1a463e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "04d4af38dd8713e5d1a48bf4fa9b0ab4",
"icons/apple-touch-icon.png": "c15f1f1403e97fb960ffe39abb33cad3",
"icons/Icon-192.png": "43b13441c5ed0aa4a471687b152e6c04",
"icons/Icon-512.png": "29c0d2db0c2397f8f300b7a327633567",
"icons/Icon-maskable-192.png": "d12816bb0c614db69b4ae2b87b60067b",
"icons/Icon-maskable-512.png": "51fd6b5e27bbe1b34c3dc12d753fecc1",
"index.html": "a7d6a7cd82e5b1ca736662310764e6e9",
"/": "a7d6a7cd82e5b1ca736662310764e6e9",
"main.dart.js": "b8b15c96c9f76a3e5da79b739d927c9c",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
