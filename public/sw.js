if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,n,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/71ab6229e24bba22a6f2e3f724186a0431389bc8.7d45d26191a123ed1d61.js",revision:"47b8346020d6133d4de5f2794798dbec"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.649956facc94f6bd80dc.js",revision:"ae131f024621ca5717e19e5798dbcbed"},{url:"/_next/static/chunks/framework.0af185ce84f114f60bdc.js",revision:"3307a0e03685c6c8c2162b0f54ef78b9"},{url:"/_next/static/chunks/main-d5ad508ed11d5d175ca2.js",revision:"e8bd3f435b0fda40f970ed1af2c1fad1"},{url:"/_next/static/chunks/pages/404-33725cbc2ac2edf897db.js",revision:"c7e7d1f7814b92e070384079dcd1372e"},{url:"/_next/static/chunks/pages/_app-72f10f15bce12aadda88.js",revision:"a980d5064794227e3f209b796beff50e"},{url:"/_next/static/chunks/pages/_error-f005390a75d36d9e384d.js",revision:"386803c0dd101da330606592c350752c"},{url:"/_next/static/chunks/pages/blog-0132cfc80f6997a89783.js",revision:"142e19d41bd1d0439fa626ae3d8f11e8"},{url:"/_next/static/chunks/pages/docs-eff12cdeabf0c6448faa.js",revision:"c0f4fbc46fa9e77bd263bac0ddfc448e"},{url:"/_next/static/chunks/pages/index-726da1f9ed9da539bad0.js",revision:"25707b18f30ffc33e9e07e4592d86f62"},{url:"/_next/static/chunks/pages/kontakt-689b509d7714660c9a10.js",revision:"8643a76676b999e98ed78a1fad85573e"},{url:"/_next/static/chunks/pages/oferta-3edac6d2939749f20589.js",revision:"b170bbd4d023dd8131605a1517158d05"},{url:"/_next/static/chunks/pages/privacy-policy-a56702a6524cea1100d1.js",revision:"3a72dcee018fb1c02432d216fb2e8470"},{url:"/_next/static/chunks/polyfills-a4510369d9bbb73c2546.js",revision:"1619829d558e35dd5f2f5ae3f3813ff1"},{url:"/_next/static/chunks/styles.49121817307bab813288.js",revision:"7078af136b7dd512acf2fe9af60b374b"},{url:"/_next/static/chunks/webpack-7aef8f5a8ab574c502f5.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/styles.ee3c78f1.chunk.css",revision:"e29c9574aa5c9918e0de31090f39d067"},{url:"/_next/static/mkj4t0qQ2e1DF25AcUQyb/_buildManifest.js",revision:"8fc0d40d3f8ad5416947bbc450ca5b18"},{url:"/_next/static/mkj4t0qQ2e1DF25AcUQyb/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/favicon.ico",revision:"559367b7c2c640ad228c91a833a8feed"},{url:"/icons/android-chrome-192x192.png",revision:"de0f4ff7cf6fc7f153a3256a7250f48e"},{url:"/icons/android-chrome-512x512.png",revision:"60d0c1ba1e317c2149cabe450dd7bf08"},{url:"/icons/apple-touch-icon.png",revision:"4d1daaf36304ac2305ec290994494b13"},{url:"/icons/favicon-16x16.png",revision:"5176a90a4df54456d06a44196b532762"},{url:"/icons/favicon-32x32.png",revision:"0e1c387882975343bf9534da3fc1d4dd"},{url:"/icons/favicon.ico",revision:"47d7b35a47566ebf5fffd5f2e34d0e24"},{url:"/images/Experienced-Polish-builder-in-London-2048x1365.jpg",revision:"f755a8b98d3b9deb18d13a2a29266467"},{url:"/images/Good-Team-of-London-Builders.jpg",revision:"bbc7f2a2c15d10d8c6f7f8dee1f5dfbe"},{url:"/images/London-Builder-House.jpg",revision:"96f626261c7228fc1f360718cd16125f"},{url:"/images/Trusted-Builder-in-London.jpg",revision:"3346a71ae5a171a3a9ab8d97fc1c47cb"},{url:"/images/professional-builder-working-and-having-a-phone.jpg",revision:"ec60028b6343b5db41e53474df65ce50"},{url:"/images/professional-house-renovation.jpg",revision:"eaa1c41ae10637ffecb13d674b773e52"},{url:"/manifest.json",revision:"646fd31a44acd6c199e181dfcd54bd79"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
