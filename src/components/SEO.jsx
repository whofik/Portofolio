import { Helmet } from 'react-helmet-async'

function SEO({ title, description, image, url }) {
  const siteTitle = title || 'Muhammad Fikri - Portfolio | Pelajar Sekolah & Web Developer'
  const siteDescription = description || 'Muhammad Fikri Portfolio - Pelajar Sekolah Indonesia yang tertarik di bidang IT dan Web Development. Portfolio resmi Muhammad Fikri dengan skills JavaScript, Python, React, dan berbagai project open source di GitHub.'
  const siteImage = image || '/src/assets/avatar.jpg'
  const siteUrl = url || 'https://muhammadfikri.web.id'

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content="Muhammad Fikri, Muhammad Fikri Portfolio, Muhammad Fikri Pelajar, Muhammad Fikri Pelajar Sekolah, Muhammad Fikri Web Developer, Portfolio Muhammad Fikri, Fikri Portfolio, Fikri Developer, Web Developer Indonesia, Pelajar IT, Programmer Pemula, JavaScript, Python, React, Frontend Developer, Siswa IT Indonesia, Belajar Coding, Portfolio Pelajar, GitHub Developer Indonesia, Muhammad Fikri GitHub, Muhammad Fikri Programmer" />
      <meta name="author" content="Muhammad Fikri" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={siteUrl} />
      <link rel="alternate" hrefLang="id" href={siteUrl} />
      <link rel="alternate" hrefLang="en" href={siteUrl} />
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />

      <meta name="topic" content="Portfolio, Web Development, Programming" />
      <meta name="summary" content={siteDescription} />
      <meta name="category" content="Portfolio, Personal Website, Web Developer" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />

      <meta property="og:type" content="profile" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Muhammad Fikri Portfolio" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content="Muhammad Fikri Portfolio" />
      <meta property="profile:first_name" content="Muhammad" />
      <meta property="profile:last_name" content="Fikri" />
      <meta property="profile:username" content="whofik" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />
      <meta property="twitter:image:alt" content="Muhammad Fikri Portfolio" />
      <meta property="twitter:creator" content="@fmds_whps" />
      <meta property="twitter:site" content="@fmds_whps" />

      <meta name="geo.region" content="ID" />
      <meta name="geo.placename" content="Indonesia" />
      <meta name="geo.country" content="ID" />
      <meta name="ICBM" content="-6.2088, 106.8456" />
      <meta name="theme-color" content="#0066ff" />
    </Helmet>
  )
}

export default SEO
