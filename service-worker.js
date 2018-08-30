/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "075bb429d3885395522610f00a31cdd0"
  },
  {
    "url": "api/apollo-mutation.html",
    "revision": "fa1cd757ef0ec5a4c9c18bc7d091c15d"
  },
  {
    "url": "api/apollo-provider.html",
    "revision": "2930eefedd80de9b83037b9ed8a00eec"
  },
  {
    "url": "api/apollo-query.html",
    "revision": "64334d749b294589f30dcfea2b25218b"
  },
  {
    "url": "api/apollo-subscribe-to-more.html",
    "revision": "740e441d9d5fb608f5826962b202b73d"
  },
  {
    "url": "api/dollar-apollo.html",
    "revision": "48dda4b193c32711915b8192e63d2f0d"
  },
  {
    "url": "api/index.html",
    "revision": "8b4e551238c5d3a8795590ec82b98bda"
  },
  {
    "url": "api/smart-query.html",
    "revision": "f3f0e01fcf0630f26dceae008d7683a8"
  },
  {
    "url": "api/smart-subscription.html",
    "revision": "2097282788d020914c5ca8a11fd0100e"
  },
  {
    "url": "api/ssr.html",
    "revision": "04e05232beb84e021ee7cfc5317fa2de"
  },
  {
    "url": "assets/css/0.styles.3a297cc6.css",
    "revision": "fa7104b8f590343c9407b8f75493831f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.03ff0980.js",
    "revision": "96c45c915022f2bea2bac0a1d455e067"
  },
  {
    "url": "assets/js/11.0353c2b9.js",
    "revision": "cbb86ff07058b27ac6cbca6bf12ae7c2"
  },
  {
    "url": "assets/js/12.8e14926b.js",
    "revision": "b85581348676a295612b75fda26a3953"
  },
  {
    "url": "assets/js/13.da1d5e12.js",
    "revision": "5cf0f3a937aa2a8d117295f99732a86b"
  },
  {
    "url": "assets/js/14.153aac6c.js",
    "revision": "f428533016c6fc39e0c06a513e375b16"
  },
  {
    "url": "assets/js/15.df8666cc.js",
    "revision": "70b0e1e35396e23641b6808e9cc1e103"
  },
  {
    "url": "assets/js/16.afffdf36.js",
    "revision": "08601ca4b579d9afe5ba716ed6e550ad"
  },
  {
    "url": "assets/js/17.5e00f27e.js",
    "revision": "75f6d73a67a95c9f583487c0070a80b8"
  },
  {
    "url": "assets/js/18.b8caf146.js",
    "revision": "2dfe62db6d8e212971b2c12611c5a3ea"
  },
  {
    "url": "assets/js/19.83dd09b9.js",
    "revision": "90252ec67d1931653e5ad249dcef1a07"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.714db979.js",
    "revision": "da4ff04450820b03e1f3e7cb701e6b0d"
  },
  {
    "url": "assets/js/21.1e427787.js",
    "revision": "c9b95444ff2514049407352576b3ddfa"
  },
  {
    "url": "assets/js/22.e0ccf0e5.js",
    "revision": "7d87b2fb2853f833b02f89b9ba93b7d8"
  },
  {
    "url": "assets/js/23.4c20f01f.js",
    "revision": "790d305cff84b2499765c5ef3be147ba"
  },
  {
    "url": "assets/js/24.0c48e0bc.js",
    "revision": "13fa1eff2ccde45c0e1f4cfeaad96821"
  },
  {
    "url": "assets/js/25.40d93c4a.js",
    "revision": "788e114360e57cb5596f85a8170201f9"
  },
  {
    "url": "assets/js/26.44a3762d.js",
    "revision": "fe9390462e954f24572a9ba5e8868125"
  },
  {
    "url": "assets/js/27.15a31cfc.js",
    "revision": "d66537e904b866667833cb2a8a42864b"
  },
  {
    "url": "assets/js/28.af144dfa.js",
    "revision": "65cddb391b0604ec75ebe9d1e7883b3c"
  },
  {
    "url": "assets/js/29.b5ee846f.js",
    "revision": "13607f9b58908031d6305747f13193a6"
  },
  {
    "url": "assets/js/3.cc186159.js",
    "revision": "ab888f3cb9a34736cd5bb2aa21f88a85"
  },
  {
    "url": "assets/js/4.c2cf6d39.js",
    "revision": "a57b301685f7f695dd5a730862c2b899"
  },
  {
    "url": "assets/js/5.8b0991b7.js",
    "revision": "319eba40ac1948dada4a3c66530dbfa0"
  },
  {
    "url": "assets/js/6.b1d6c0df.js",
    "revision": "31d1979128f84ac0e53e1922f8071b22"
  },
  {
    "url": "assets/js/7.4b559de7.js",
    "revision": "73dc760ec65e5f648e971c8518dd785f"
  },
  {
    "url": "assets/js/8.3cbb15b1.js",
    "revision": "d183c5d0eb0327828c02089149e589fb"
  },
  {
    "url": "assets/js/9.05deadcb.js",
    "revision": "067a3951f9b874645319352c895a75ae"
  },
  {
    "url": "assets/js/app.b9977bde.js",
    "revision": "c613bef5388e428703c28464f23f6d7c"
  },
  {
    "url": "favicon.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "guide/apollo/index.html",
    "revision": "d7f1f6162e81cef46db4a8fe64fdc5cf"
  },
  {
    "url": "guide/apollo/mutations.html",
    "revision": "2442eea5b26059ccb8689edbc253b459"
  },
  {
    "url": "guide/apollo/pagination.html",
    "revision": "ce2b13ff07ec7cd9ffa00e93451bd139"
  },
  {
    "url": "guide/apollo/queries.html",
    "revision": "19cfbf04f21050461ce0e032669c494f"
  },
  {
    "url": "guide/apollo/subscriptions.html",
    "revision": "c5ed13fab23c4f8fae7cc5de4b428e0a"
  },
  {
    "url": "guide/components/index.html",
    "revision": "2c3565bf4319087eaafdeddaeb79b250"
  },
  {
    "url": "guide/components/mutation.html",
    "revision": "13006773ce3369481dee52be60148c1c"
  },
  {
    "url": "guide/components/query.html",
    "revision": "9adf0c074351672671f3907b2b658b25"
  },
  {
    "url": "guide/components/subscribe-to-more.html",
    "revision": "acc2d50fdcfe20b32e22e6ef9302889d"
  },
  {
    "url": "guide/index.html",
    "revision": "15479e7d45d9718cfdc4b7ba027fd29c"
  },
  {
    "url": "guide/installation.html",
    "revision": "5d4ba84999bdcf11b75ca5e3336c59b5"
  },
  {
    "url": "guide/local-state.html",
    "revision": "894a1916d3076dd8f835fcaaccbfe9b9"
  },
  {
    "url": "guide/multiple-clients.html",
    "revision": "28d08ce6702f82401b02bc15808ecf38"
  },
  {
    "url": "guide/ssr.html",
    "revision": "6545190969b6a87ff7f5fc138524f698"
  },
  {
    "url": "guide/testing.html",
    "revision": "00b6fd530bfff8c823dddc35b9aad612"
  },
  {
    "url": "index.html",
    "revision": "2a4d89fcd463e1ee31527886ddb7f780"
  },
  {
    "url": "logo.png",
    "revision": "030fd9b6e357807f1937dd0deb306ca7"
  },
  {
    "url": "migration/index.html",
    "revision": "ba999aaac4d9a886082c8ac1bbdc31f4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
