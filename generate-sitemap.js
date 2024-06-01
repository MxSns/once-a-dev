const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// Fonction pour générer le sitemap
async function generateSitemap() {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    // Ajoutez d'autres pages ici si nécessaire
  ];

  const sitemapStream = new SitemapStream({ hostname: 'https://www.onceuponadev.com' }); // Remplacez par l'URL de votre site

  const writeStream = fs.createWriteStream(path.resolve('./public/sitemap.xml'));

  sitemapStream.pipe(writeStream);

  links.forEach(link => sitemapStream.write(link));
  sitemapStream.end();

  writeStream.on('finish', () => {
    console.log('Sitemap generated successfully!');
  });

  writeStream.on('error', (err) => {
    console.error('Error writing sitemap:', err);
  });
}

generateSitemap().catch(console.error);