import { Helmet } from 'react-helmet-async'

function SEO({ title, description, image, url }) {
  const siteTitle = title || 'Muhammad Fikri - Portfolio | Pelajar Sekolah & Web Developer'
  const siteDescription = description || 'Muhammad Fikri Portfolio - Pelajar Sekolah Indonesia yang tertarik di bidang IT dan Web Development. Portfolio resmi Muhammad Fikri dengan skills JavaScript, Python, React.'
  const siteImage = image || 'https://img2.pixhost.to/images/6703/708085391_image.jpg'
  const siteUrl = url || 'https://muhammadfikri.web.id'

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content="Muhammad Fikri, Muhammad Fikri Portfolio, Muhammad Fikri Pelajar, Muhammad Fikri Pelajar Sekolah, Muhammad Fikri Web Developer, Portfolio Muhammad Fikri, Fikri Portfolio, Web Developer Indonesia, Pelajar IT, Programmer Pemula, JavaScript, Python, React, Frontend Developer, Siswa IT Indonesia, Belajar Coding, Portfolio Pelajar" />
      <meta name="author" content="Muhammad Fikri" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={siteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content="Muhammad Fikri Portfolio" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />
      <meta property="twitter:creator" content="@fmds_whps" />

      <meta name="geo.region" content="ID" />
      <meta name="geo.placename" content="Indonesia" />
      <meta name="theme-color" content="#0066ff" />
    </Helmet>
  )
}

export default SEO
