import { Helmet } from 'react-helmet-async'
import {
  siteTitle,
  siteDescription,
  siteImage,
  siteUrl as defaultSiteUrl,
  siteKeywords,
  social,
  buildDate,
  author,
  siteName,
} from '../constants/settings'

function SEO({ title, description, image, url }) {
  const sitetitle = title || siteTitle
  const sitedescription = description || siteDescription
  const siteimage = image || siteImage
  const siteurl = url || defaultSiteUrl

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteurl}/#person`,
    "name": author.fullName,
    "givenName": author.firstName,
    "familyName": author.lastName,
    "alternateName": author.firstName,
    "url": siteurl,
    "image": siteimage,
    "sameAs": [
      social.instagram,
      social.telegram,
      social.github,
      social.whatsapp
    ],
    "jobTitle": author.jobTitle,
    "worksFor": {
      "@type": "Organization",
      "name": "Pelajar Indonesia"
    },
    "knowsAbout": ["JavaScript", "Python", "React", "Vite", "Web Development", "Frontend Development", "IT", "Programming", "GitHub", "Open Source", "CSS", "HTML", "Portfolio Pelajar", "Web Developer Jakarta", "Web Developer Serang", "Frontend Developer Indonesia", "React Vite"],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID",
      "addressRegion": "Indonesia"
    },
    "description": sitedescription,
    "alumniOf": {
      "@type": "Organization",
      "name": "Sekolah Indonesia"
    },
    "nationality": "Indonesian",
    "honorificPrefix": author.firstName,
    "honorificSuffix": author.lastName
  }

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteurl}/#profilepage`,
    "name": siteName,
    "description": sitedescription,
    "url": siteurl,
    "mainEntity": {
      "@id": `${siteurl}/#person`
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteurl
      }]
    },
    "dateCreated": "2024-01-01",
    "dateModified": buildDate
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteurl}/#website`,
    "name": siteName,
    "url": siteurl,
    "publisher": {
      "@id": `${siteurl}/#person`
    },
    "inLanguage": "id-ID",
    "description": sitedescription,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteurl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteurl}/#organization`,
    "name": siteName,
    "url": siteurl,
    "logo": `${siteurl}/favicon.jpg`,
    "sameAs": [social.github, social.instagram, social.telegram, social.whatsapp],
    "founder": { "@id": `${siteurl}/#person` },
    "member": { "@id": `${siteurl}/#person` }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteurl}/#breadcrumb`,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteurl },
      { "@type": "ListItem", "position": 2, "name": "Skills", "item": `${siteurl}/#skills` },
      { "@type": "ListItem", "position": 3, "name": "Certificates", "item": `${siteurl}/#certificates` },
      { "@type": "ListItem", "position": 4, "name": "Projects", "item": `${siteurl}/#projects` }
    ]
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteurl}/#article`,
    "headline": siteTitle,
    "description": sitedescription,
    "image": siteimage,
    "author": { "@id": `${siteurl}/#person` },
    "publisher": { "@id": `${siteurl}/#organization` },
    "mainEntityOfPage": { "@id": `${siteurl}/#profilepage` },
    "datePublished": "2024-01-01",
    "dateModified": buildDate,
    "inLanguage": "id-ID",
    "keywords": siteKeywords
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteurl}/#faq`,
    "name": `Frequently Asked Questions - ${author.fullName}`,
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Siapa ${author.fullName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${author.fullName} adalah seorang ${author.jobTitle} Indonesia yang tertarik di bidang IT dan Web Development. Portfolio ini menampilkan 6 skill terukur (JavaScript 68%, React 62%, Vite 60%), 8 sertifikat webinar nasional IDwebhost/Metro Press/HIMATEK 2026, dan 3 top project open-source GitHub (whofik) yang dipilih dari 100 repo berdasarkan stars+forks. Lokasi lahir Serang, tinggal DKI Jakarta.`
        }
      },
      {
        "@type": "Question",
        "name": `Apa skill utama ${author.fullName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Skill utama 2026: JavaScript 68% (React hooks, lazy/Suspense), React 62%, Vite 60% (build, sharp optimizer), CSS/Responsive 58% (vanilla CSS, mobile-first, CLS <0.1), Git/GitHub 55% (API caching 15 menit key YahahaHayuuuuu), Python 35% (scraping). Diukur via progress bar teruji, bukan klaim generik. Fokus frontend minimal-solid, tanpa framework CSS tambahan.`
        }
      },
      {
        "@type": "Question",
        "name": `Project GitHub apa yang ditampilkan?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Section Projects fetch live https://api.github.com/users/whofik/repos?per_page=100&sort=updated via fetchWithRetry dengan cache 15 menit. Filter fork=false, sort stars+forks descending, tampil top 3 + stats totalRepos/totalStars/totalForks. Juga ada contribution graph 52×7 hari dengan level deterministik. Data real-time, bukan dummy.`
        }
      },
      {
        "@type": "Question",
        "name": `Sertifikat apa saja yang dimiliki?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `8 sertifikat 2026: 3 IDwebhost (AI Ads Formula 30 April, Standar Interface 02 April, Bikin Website cPanel 27 Feb), 4 Metro Press (Humanizing Technology 11 Mei, Potensi Nutraceutical 04 Mei, Generasi Fragile 27 April, Ushul Fiqih 13 April), 1 HIMATEK Design Masterclass 26 Feb. Semua image di /sertifikat/ terindeks sitemap dengan image:image tag, dioptimasi sharp svgo 52% saving.`
        }
      },
      {
        "@type": "Question",
        "name": `Bagaimana cara menghubungi ${author.fullName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${author.fullName} bisa dihubungi via Telegram https://FikXzXmodsTzy.t.me, Instagram https://www.instagram.com/fmds_whps, WhatsApp Channel https://whatsapp.com/channel/0029Vb6Jjyf8KMqtrGJZJy0y, dan GitHub https://github.com/whofik. Semua link di section Contact dengan rel=noopener, aria-label, dan schema ContactPage.`
        }
      }
    ]
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(profilePageSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <title>{sitetitle}</title>
      <meta name="description" content={sitedescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="author" content={author.fullName} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={siteurl} />
      <link rel="alternate" hrefLang="id" href={siteurl} />
      <link rel="alternate" hrefLang="x-default" href={siteurl} />

      <meta name="date" content={buildDate} />

      <meta property="og:type" content="profile" />
      <meta property="og:url" content={siteurl} />
      <meta property="og:title" content={sitetitle} />
      <meta property="og:description" content={sitedescription} />
      <meta property="og:image" content={siteimage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={siteName} />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content={siteName} />
      <meta property="profile:first_name" content={author.firstName} />
      <meta property="profile:last_name" content={author.lastName} />
      <meta property="profile:username" content={author.username} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteurl} />
      <meta property="twitter:title" content={sitetitle} />
      <meta property="twitter:description" content={sitedescription} />
      <meta property="twitter:image" content={siteimage} />
      <meta property="twitter:image:alt" content={siteName} />
      <meta property="twitter:creator" content={social.twitter} />
      <meta property="twitter:site" content={social.twitter} />

      <meta name="geo.region" content="ID" />
      <meta name="geo.placename" content="Indonesia" />
      <meta name="geo.country" content="ID" />
      <meta name="ICBM" content="-6.2088, 106.8456" />
    </Helmet>
  )
}

export default SEO
