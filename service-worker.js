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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "13e78d699a399aec58e190114da442e6"
  },
  {
    "url": "assets/css/0.styles.f1c83982.css",
    "revision": "61a7e525d029b0d75bce891556f7c438"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/1.964b326a.js",
    "revision": "ad5f327dd60704e7578e3347a6f8af40"
  },
  {
    "url": "assets/js/10.c1e594be.js",
    "revision": "73382b4498dbbd3ab2c5e678b0b496bb"
  },
  {
    "url": "assets/js/11.36fa7796.js",
    "revision": "26c0bd447b1f6a550b7963cec89550ff"
  },
  {
    "url": "assets/js/12.66358362.js",
    "revision": "1ec66b9b5b2c90b226f32954fb2b8081"
  },
  {
    "url": "assets/js/13.d45321e5.js",
    "revision": "ca0c5d30e06fc3728b8c1206386826ec"
  },
  {
    "url": "assets/js/14.71bcdd29.js",
    "revision": "f4ba6294b04f396ed34df02b469ece09"
  },
  {
    "url": "assets/js/15.717804d9.js",
    "revision": "6828574a33aae10a676d9abd0cc2f4b0"
  },
  {
    "url": "assets/js/16.d900c5f6.js",
    "revision": "bfd0866f6bf1e21a54e8a490c75b3771"
  },
  {
    "url": "assets/js/17.fc577ae6.js",
    "revision": "238512cf09bcf379ab811e2d5feb68c8"
  },
  {
    "url": "assets/js/18.655a8d14.js",
    "revision": "99a31481cdb2a541b7ebae5021f4ae42"
  },
  {
    "url": "assets/js/19.393a8e84.js",
    "revision": "8ef1d85518173b1fdf337611bc1ab4ed"
  },
  {
    "url": "assets/js/2.c4f8c0d3.js",
    "revision": "54746b6c37adcb22d788307fa6327f6d"
  },
  {
    "url": "assets/js/20.e7813aa6.js",
    "revision": "ddb9a9d13dedf3a906a3a37279d07d9a"
  },
  {
    "url": "assets/js/21.b47aad47.js",
    "revision": "904750bfeab9644905d5c26a714d22a1"
  },
  {
    "url": "assets/js/22.489399da.js",
    "revision": "5e61f37793d2942b78af6f01563abc47"
  },
  {
    "url": "assets/js/23.c70c77d3.js",
    "revision": "4d04d7d4f579aa9e15e9710a6b9e2f60"
  },
  {
    "url": "assets/js/24.105e062b.js",
    "revision": "1635e9f88da2a048aecef3e71e59361f"
  },
  {
    "url": "assets/js/25.7e75e276.js",
    "revision": "6890798ba18c0bd06505bc2a32ec6900"
  },
  {
    "url": "assets/js/26.79de9604.js",
    "revision": "bb611eff46bc1a8a93685f4a9bfc5334"
  },
  {
    "url": "assets/js/27.e72343d4.js",
    "revision": "61e09091cf9c6fa9be3b3dc0e733c1ae"
  },
  {
    "url": "assets/js/3.9c751d8b.js",
    "revision": "79292e96eea49412f5a308cae6cfe19c"
  },
  {
    "url": "assets/js/4.223dbfc0.js",
    "revision": "63115fd62573bd2a0af52c571beb72cf"
  },
  {
    "url": "assets/js/5.db72f58a.js",
    "revision": "6d78d9a47bfd28ca9cd5ddf90fa98169"
  },
  {
    "url": "assets/js/6.dbc83fee.js",
    "revision": "18c54a2392e37ce40825e5232339a00e"
  },
  {
    "url": "assets/js/7.80a5f9d1.js",
    "revision": "48467e7080fc8ac4fa6ef3500c638748"
  },
  {
    "url": "assets/js/8.a1ba1e66.js",
    "revision": "db1ac7302f8337c43cb944f1551109c3"
  },
  {
    "url": "assets/js/9.66acea1c.js",
    "revision": "ea03ee1c4e16d8ee08a8701fc7700e5a"
  },
  {
    "url": "assets/js/app.a5937180.js",
    "revision": "b5c8d726339546dc83f0aadddfa68a91"
  },
  {
    "url": "config/index.html",
    "revision": "4cfa4b55507ab4ce186371dcb86327a4"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "da1e53d4cc3cdf2aeb39ddaaafd61116"
  },
  {
    "url": "guide/assets.html",
    "revision": "b12fa65fd5c3b18f0d8bcb1e4096e0bf"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "143ed9868046c48dd3d22d4a1049a2b6"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "7aae932878ee4e2ed57df1bc2451df22"
  },
  {
    "url": "guide/deploy.html",
    "revision": "e4c4064a5d93bf2a6a2176451837f768"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "09cbaa7a18c26ed54f5d760043da52f0"
  },
  {
    "url": "guide/i18n.html",
    "revision": "d3d0daf7310e7b4b51dc797360c6ef7c"
  },
  {
    "url": "guide/index.html",
    "revision": "738c337902d0aba7afcef34a53086647"
  },
  {
    "url": "guide/markdown.html",
    "revision": "70135ca8cec60faab89c08fef236650e"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "97e9c65b2c0d37f6b2d528aea882caf8"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "f8974d7c6f49ab49269552b033a6b64e"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "b8b73729f497900b3e03d4dbc1baa826"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "04d63531aa9bfb142c4b6fc33dbc51d6"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "b4d8f5fd331251d91e5d6257defa45c5"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "4400548f242414fcb4e74a03e7b7d87c"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "a97c82a447902f1fdd1ca95031308eec"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "8498443cb65d9368897494135b4d9e9f"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "38ab9cd9de5585f2d3cd8cbb034d86a8"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "607400da13dbbad2904baa98cf046016"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "262269d37db0959c90c1d61e8c47123d"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "0c4705a2dc8ad0939a1c7b608d386804"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "05fc0791d9e599d9dfcdcfb986a4e153"
  },
  {
    "url": "zh/index.html",
    "revision": "6371d3dfe5c8c982a1f6f314f17de10a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
