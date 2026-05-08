import { useState, useEffect } from 'react'
import '../styles/Certificates.css'

const dataSertifikat = [
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

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  const openModal = (cert) => {
    const urlSertifikat = '#certificates' + cert.src.replace(/\.(jpg|jpeg|png)$/i, '')
    window.history.pushState(null, '', urlSertifikat)
    setSelectedCert(cert)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    window.history.pushState(null, '', window.location.pathname + window.location.search + '#certificates')
    setSelectedCert(null)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    const cekHashUrl = () => {
      const hashSaatIni = window.location.hash
      if (hashSaatIni.startsWith('#certificates/')) {
        const pathSertifikat = hashSaatIni.replace('#certificates', '')
        const sertifikatDitemukan = dataSertifikat.find(c => c.src.replace(/\.(jpg|jpeg|png)$/i, '') === pathSertifikat)
        if (sertifikatDitemukan) {
          setSelectedCert(sertifikatDitemukan)
          document.body.style.overflow = 'hidden'
        }
      } else {
        setSelectedCert(null)
        document.body.style.overflow = 'auto'
      }
    }

    cekHashUrl()
    window.addEventListener('hashchange', cekHashUrl)
    return () => window.removeEventListener('hashchange', cekHashUrl)
  }, [])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && selectedCert) {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [selectedCert])

  return (
    <section id="certificates" className="section certificates">
      <h2 className="section-title">Certificates</h2>
      <div className="certificates-grid">
        {dataSertifikat.map((cert) => (
          <div
            key={cert.id}
            className="certificate-item"
            onClick={() => openModal(cert)}
            role="button"
            aria-label={`View certificate for ${cert.name}`}
            tabIndex="0"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openModal(cert)
              }
            }}
          >
            <img
              src={cert.src}
              alt={cert.alt}
              className="certificate-img"
              width="320"
              height="200"
              loading="lazy"
              decoding="async"
            />
            <div className="certificate-overlay">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              <span className="view-text">Lihat Detail</span>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ pointerEvents: 'none' }}>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <div className="modal-header">
              <img
                src={selectedCert.src}
                alt={selectedCert.alt}
                className="modal-thumbnail"
                width="520"
                height="280"
              />
              <div className="modal-header-info">
                <h3 className="modal-title" id="modal-title">{selectedCert.name}</h3>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-meta">
                <div className="meta-item">
                  <div className="meta-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                    </svg>
                  </div>
                  <div className="meta-content">
                    <span className="meta-label">Tanggal</span>
                    <span className="meta-value">{selectedCert.date}</span>
                  </div>
                </div>
                <div className="meta-item">
                  <div className="meta-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M12 7V3H1v18h20v-6c0-2.21-1.79-4-4-4h-1V7zM6 18H4V7h2v11zm9-5c1.1 0 2 .9 2 2v3H7v-5h8z"/>
                    </svg>
                  </div>
                  <div className="meta-content">
                    <span className="meta-label">Diterbitkan oleh</span>
                    <span className="meta-value">{selectedCert.issuer}</span>
                  </div>
                </div>
              </div>
              <div className="modal-description-wrapper">
                <p className="modal-description">{selectedCert.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificates
