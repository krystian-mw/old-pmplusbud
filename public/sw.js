if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,n,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ESzG7lalNi0n_3Y8N-xdX/_buildManifest.js",revision:"349e4241b184623d542fa8332cbc924e"},{url:"/_next/static/ESzG7lalNi0n_3Y8N-xdX/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/1bfc9850.b2881b4b1406ffd8841e.js",revision:"9e89a3f1a1ab282c22db5d3fcc788a87"},{url:"/_next/static/chunks/71ab6229e24bba22a6f2e3f724186a0431389bc8.7d45d26191a123ed1d61.js",revision:"47b8346020d6133d4de5f2794798dbec"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.649956facc94f6bd80dc.js",revision:"ae131f024621ca5717e19e5798dbcbed"},{url:"/_next/static/chunks/framework.0af185ce84f114f60bdc.js",revision:"3307a0e03685c6c8c2162b0f54ef78b9"},{url:"/_next/static/chunks/main-64a78f71c47d84237c67.js",revision:"73ce6f4a65f432e8832c4191fab91797"},{url:"/_next/static/chunks/pages/404-33486b65f9a308bef56d.js",revision:"e0260a0f6884bfa436908e202dcc2d43"},{url:"/_next/static/chunks/pages/_app-abe619334d4f23f99911.js",revision:"b812855228bbc76fc802f4806c005039"},{url:"/_next/static/chunks/pages/_error-37a93f6b4667b653c8b4.js",revision:"07b4620aebd8fab6d3b6b85e36d9ac9f"},{url:"/_next/static/chunks/pages/blog-7cfec084ec82abd53b20.js",revision:"8d193eef0e003ef8c698601a317ad209"},{url:"/_next/static/chunks/pages/index-007b0992a7a7d13b1cfc.js",revision:"0d2df459d7192e4752239df11222cfde"},{url:"/_next/static/chunks/pages/kontakt-5f90f2cc0f73666267a1.js",revision:"548d52390cb82b7ff85262dd3a73b801"},{url:"/_next/static/chunks/pages/oferta-5764aee95cba1dc8caa7.js",revision:"9fdc37d2e02d098db3baf6aab5c288a7"},{url:"/_next/static/chunks/pages/oferta/ogrodzenia-c9af8e220c79770fb4db.js",revision:"485fb060eb7e3aa150605a0bda2f4981"},{url:"/_next/static/chunks/pages/oferta/remonty-51aa5d4aa5785da7a3aa.js",revision:"df042b5e61980a3bf92180e6255d07f9"},{url:"/_next/static/chunks/pages/oferta/wykonczenia-6d3b0c3c4cf2e6fdfed0.js",revision:"cdb8579a39b302abae2c38db1dff312f"},{url:"/_next/static/chunks/pages/oferta/wznoszenia-budynkow-2de81790d009f74f1375.js",revision:"b43ec8edc8977d83d9329cec91cd60ba"},{url:"/_next/static/chunks/pages/polityka-prywatnosci-6ab581f9da84389ff3da.js",revision:"e24bf8195661df7f58ceafbf4832aa85"},{url:"/_next/static/chunks/polyfills-0f7f0f508d490b5a473d.js",revision:"8f44e0698587becb11ef6f9d6d6e6677"},{url:"/_next/static/chunks/styles.4300459775b6305118bb.js",revision:"7078af136b7dd512acf2fe9af60b374b"},{url:"/_next/static/chunks/webpack-7aef8f5a8ab574c502f5.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/styles.5a3d0c28.chunk.css",revision:"e7fa73f376a88d6f1b2adcfecd25e70a"},{url:"/images/Experienced-Polish-builder-in-London-2048x1365.jpg",revision:"f755a8b98d3b9deb18d13a2a29266467"},{url:"/images/Good-Team-of-London-Builders.jpg",revision:"bbc7f2a2c15d10d8c6f7f8dee1f5dfbe"},{url:"/images/London-Builder-House.jpg",revision:"96f626261c7228fc1f360718cd16125f"},{url:"/images/Trusted-Builder-in-London.jpg",revision:"3346a71ae5a171a3a9ab8d97fc1c47cb"},{url:"/images/professional-builder-working-and-having-a-phone.jpg",revision:"ec60028b6343b5db41e53474df65ce50"},{url:"/images/professional-house-renovation.jpg",revision:"eaa1c41ae10637ffecb13d674b773e52"},{url:"/manifest.json",revision:"8da6435997b070cbde79fce1c21cfbe8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
