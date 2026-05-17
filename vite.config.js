import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as settings from './src/constants/settings.js'

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      const seoTags = `
    <title>${settings.siteTitle}</title>
    <meta name="title" content="${settings.siteTitle}" data-rh="true" />
    <meta name="description" content="${settings.siteDescription}" data-rh="true" />
    <meta name="author" content="${settings.author.fullName}" data-rh="true" />
    <meta name="keywords" content="${settings.siteKeywords}" data-rh="true" />
    <meta property="og:title" content="${settings.siteTitle}" data-rh="true" />
    <meta property="og:description" content="${settings.siteDescription}" data-rh="true" />
    <meta property="og:image" content="${settings.siteImage}" data-rh="true" />
    <meta property="og:image:alt" content="${settings.siteName}" data-rh="true" />
    <meta property="og:site_name" content="${settings.siteName}" data-rh="true" />
    <meta property="profile:first_name" content="${settings.author.firstName}" data-rh="true" />
    <meta property="profile:last_name" content="${settings.author.lastName}" data-rh="true" />
    <meta property="profile:username" content="${settings.author.username}" data-rh="true" />
    <meta property="twitter:title" content="${settings.siteTitle}" data-rh="true" />
    <meta property="twitter:description" content="${settings.siteDescription}" data-rh="true" />
    <meta property="twitter:image" content="${settings.siteImage}" data-rh="true" />
    <meta property="twitter:creator" content="${settings.social.twitter}" data-rh="true" />
    <meta property="twitter:site" content="${settings.social.twitter}" data-rh="true" />
    <meta property="twitter:image:alt" content="${settings.siteName}" data-rh="true" />
    <meta name="application-name" content="${settings.siteName}" data-rh="true" />
    <meta name="apple-mobile-web-app-title" content="${settings.siteName}" data-rh="true" />
`
      return html.replace('</head>', seoTags + '</head>')
    }
  }
}

export default defineConfig({
  plugins: [react(), htmlPlugin()],
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().split('T')[0]),
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react/') || id.includes('react-helmet-async')) {
              return 'vendor'
            }
          }
        },
      },
    },
  },
})