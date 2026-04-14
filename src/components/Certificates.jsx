import { useState, useEffect } from 'react'
import '../styles/Certificates.css'

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
  {
    id: 1,
    src: 'https://img2.pixhost.to/images/6703/708086984_image.jpg',
    alt: 'Sertifikat Webinar Nasional HIMATEK Muhammad Fikri',
    name: 'Webinar Nasional HIMATEK',
    date: 'Kamis, 26 Februari 2026',
    issuer: 'HIMATEK',
    description: 'kegiatan webinar nasional "Design Masterclass: Tips & Trik Desain yang Jarang Diketahui" yang diadakan oleh Himpunan Mahasiswa Teknologi Unversitas Slamet Riyadi pada tanggal 26 Februari 2026'
  },
  {
    id: 2,
    src: 'https://img2.pixhost.to/images/7163/714795221_file_1776136653778.jpg',
    alt: 'Sertifikat Webinar Nasional urgensi Ushul Fiqih Di zaman sekarang CV. Metro Press indonesia',
    name: 'Webinar Nasional Metro Press',
    date: 'Senin, 13 April 2026',
    issuer: 'CV. METRO PRESS INDONESIA',
    description: 'Webinar Nasional Urgensi Ushul Fiqih di zaman sekarang'
  },
  {
    id: 3,
    src: 'https://img2.pixhost.to/images/6703/708086870_image.jpg',
    alt: 'Sertifikat Muhammad Fikri Webinar Idwebstalks Bikin Website Profesional Langsung dari cPanel',
    name: 'Webinar Idwebstalks',
    date: 'Jumat, 27 Februari 2026',
    issuer: 'IDWebhost',
    description: 'SitePad Unlocked: Bikin Website Profesional Langsung dari cPanel'
  },
  {
    id: 4,
    src: 'https://njy.my.id/files/4oh.jpg',
    alt: 'Sertifikat Muhammad Fikri Webinar IDWebhost Stop Desain Ngasal, Yuk! Bongkar Standar Interface Website',
    name: 'Webinar Idwebstalks',
    date: 'Kamis, 2 April 2026',
    issuer: 'IDWebhost',
    description: 'Stop Desain Ngasal, Yuk! Bongkar Standar Interface Website'
  },
]

  const openModal = (cert) => {
    setSelectedCert(cert)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedCert(null)
    document.body.style.overflow = 'auto'
  }

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
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="certificate-item"
            onClick={() => openModal(cert)}
          >
            <img
              src={cert.src}
              alt={cert.alt}
              className="certificate-img"
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
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ pointerEvents: 'none' }}>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <div className="modal-header">
              <img
                src={selectedCert.src}
                alt={selectedCert.alt}
                className="modal-thumbnail"
              />
              <div className="modal-header-info">
                <h3 className="modal-title">{selectedCert.name}</h3>
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
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
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
