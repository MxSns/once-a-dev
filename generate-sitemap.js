const fs = require('fs');
const path = require('path');
const sm = require('sitemap');

// Fonction pour générer le sitemap
function generateSitemap() {
  const sitemap = sm.createSitemap({
    hostname: 'https://www.onceuponadev.com',
    cacheTime: 600000, // 600 sec - cache purge period
    urls: [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      // ici on ajoutera les pages supplémentaires quand elles auront été faites
    ],
  });

  fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap.toString());
}

generateSitemap();