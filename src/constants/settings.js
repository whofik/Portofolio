/**
 * Centralized site settings.
 * Update values here to propagate across all components (SEO, schemas, etc.).
 */

export const siteUrl = 'https://muhammadfikri.web.id'
export const siteName = 'Muhammad Fikri Portfolio'
export const siteTitle = 'Muhammad Fikri - Portfolio | Pelajar Sekolah & Web Developer'
export const siteDescription = 'Muhammad Fikri Portfolio - Pelajar Sekolah Indonesia yang tertarik di bidang IT dan Web Development. Menampilkan skills JavaScript, Python, React, dan berbagai project open source di GitHub.'
export const siteImage = 'https://img2.pixhost.to/images/6703/708085391_image.jpg'
export const siteKeywords = 'Muhammad Fikri Portfolio, Muhammad Fikri Pelajar, Muhammad Fikri Pelajar Sekolah, Muhammad Fikri Web Developer, Portfolio Muhammad Fikri, Fikri Portfolio, Fikri Developer, Web Developer Indonesia, Pelajar IT, Programmer Pemula, JavaScript, Python, React, Frontend Developer, Siswa IT Indonesia, Belajar Coding, Portfolio Pelajar, GitHub Developer Indonesia, Muhammad Fikri GitHub, Muhammad Fikri Programmer'

export const author = {
  fullName: 'Muhammad Fikri',
  firstName: 'Muhammad',
  lastName: 'Fikri',
  username: 'whofik',
  jobTitle: 'Pelajar Sekolah',
}

export const social = {
  instagram: 'https://www.instagram.com/fmds_whps',
  telegram: 'https://FikXzXmodsTzy.t.me',
  github: 'https://github.com/whofik',
  whatsapp: 'https://whatsapp.com/channel/0029Vb6Jjyf8KMqtrGJZJy0y',
  twitter: '@fmds_whps',
}

export const githubUsername = 'whofik'

/**
 * Build date injected by Vite at build time.
 * Falls back to current date in development.
 * @type {string}
 */
export const buildDate = typeof __BUILD_DATE__ !== 'undefined' ? __BUILD_DATE__ : new Date().toISOString().split('T')[0]

export const skillData = [
  { name: 'JavaScript', percent: 30 },
  { name: 'Python', percent: 5 },
  { name: 'Scraping Website', percent: 56 },
  { name: 'Vibe Code', percent: 100 },
  { name: 'Yapping', percent: 100 },
  { name: 'Turu', percent: 80 },
]

export const certificateData = [
  {
    id: 1,
    src: '/sertifikat/Muhammad-Fikri-Himatek-Design-Masterclass-26-Februari-2026.jpg',
    alt: 'Sertifikat Webinar Nasional HIMATEK Muhammad Fikri',
    name: 'Webinar Nasional HIMATEK',
    date: 'Kamis, 26 Februari 2026',
    issuer: 'HIMATEK',
    description: 'kegiatan webinar nasional "Design Masterclass: Tips & Trik Desain yang Jarang Diketahui" yang diadakan oleh Himpunan Mahasiswa Teknologi Unversitas Slamet Riyadi pada tanggal 26 Februari 2026'
  },
  {
    id: 2,
    src: '/sertifikat/Muhammad-Fikri-Metro-Press-Generasi-Fragile-27-April-2026.jpg',
    alt: 'Sertifikat Webinar Nasional Generasi Fragile dalam Perspektif Pendidikan: Tantangan & Strategi Penguatan Resiliensi CV. Metro Press indonesia',
    name: 'Webinar Nasional Metro Press',
    date: 'Senin, 27 April 2026',
    issuer: 'CV. METRO PRESS INDONESIA',
    description: 'Generasi Fragile dalam Perspektif Pendidikan: Tantangan & Strategi Penguatan Resiliensi'
  },
  {
    id: 3,
    src: '/sertifikat/Muhammad-Fikri-Metro-Press-Urgensi-Ushul-Fiqih-13-April-2026.jpg',
    alt: 'Sertifikat Webinar Nasional urgensi Ushul Fiqih Di zaman sekarang CV. Metro Press indonesia',
    name: 'Webinar Nasional Metro Press',
    date: 'Senin, 13 April 2026',
    issuer: 'CV. METRO PRESS INDONESIA',
    description: 'Webinar Nasional Urgensi Ushul Fiqih di zaman sekarang'
  },
  {
    id: 4,
    src: '/sertifikat/Muhammad-Fikri-Idwebhost-Bikin-Website-Profesional-27-Februari-2026.jpg',
    alt: 'Sertifikat Muhammad Fikri Webinar Idwebstalks Bikin Website Profesional Langsung dari cPanel',
    name: 'Webinar Idwebstalks',
    date: 'Jumat, 27 Februari 2026',
    issuer: 'IDWebhost',
    description: 'SitePad Unlocked: Bikin Website Profesional Langsung dari cPanel'
  },
  {
    id: 5,
    src: '/sertifikat/Muhammad-Fikri-Idwebhost-Standar-Interface-Website-02-April-2026.jpg',
    alt: 'Sertifikat Muhammad Fikri Webinar IDWebhost Stop Desain Ngasal, Yuk! Bongkar Standar Interface Website',
    name: 'Webinar Idwebstalks',
    date: 'Kamis, 2 April 2026',
    issuer: 'IDWebhost',
    description: 'Stop Desain Ngasal, Yuk! Bongkar Standar Interface Website'
  },
  {
    id: 6,
    src: '/sertifikat/Muhammad-Fikri-Metro-Press-Potensi-Nutraceutical-04-Mei-2026.png',
    alt: 'Sertifikat Webinar Nasional Potensi Nutraceutical CV. Metro Press Indonesia',
    name: 'Webinar Nasional Metro Press',
    date: 'Senin, 04 Mei 2026',
    issuer: 'CV. METRO PRESS INDONESIA',
    description: 'Webinar Nasional: Potensi Nutraceutical Berbasis Tanaman Obat Indonesia dalam Manajemen Pencegahan Diabetes Melitus & Infark Miokard'
  },
  {
    id: 7,
    src: '/sertifikat/Muhammad-Fikri-Idwebhost-Ai-Ads-Formula-30-April-2026.jpg',
    alt: 'Certificate of Appreciation IDwebhost AI Ads Formula',
    name: 'Webinar Idwebtalks',
    date: 'Kamis, 30 April 2026',
    issuer: 'IDwebhost',
    description: 'AI Ads Formula: Optimasi Meta Ads Biar Lebih Profit'
  }
]
