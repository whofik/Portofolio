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
    "knowsAbout": ["JavaScript", "Python", "React", "Vite", "Web Development", "Frontend Development", "IT", "Programming", "GitHub", "Open Source", "CSS", "HTML"],
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
          "text": `${author.fullName} adalah seorang ${author.jobTitle} Indonesia yang tertarik di bidang IT dan Web Development.`
        }
      },
      {
        "@type": "Question",
        "name": `Bagaimana cara menghubungi ${author.fullName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${author.fullName} bisa dihubungi melalui Instagram, Telegram, atau WhatsApp Channel.`
        }
      }
    ]
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
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
      <link rel="alternate" hrefLang="en" href={siteurl} />
      <link rel="alternate" hrefLang="x-default" href={siteurl} />

      <meta name="topic" content="Portfolio, Web Development, Programming" />
      <meta name="summary" content={sitedescription} />
      <meta name="category" content="Portfolio, Personal Website, Web Developer" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
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
