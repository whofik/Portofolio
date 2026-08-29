import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { siteUrl, certificateData, author } from '../constants/settings'
import '../styles/Certificates.css'

function Certificates() {
  const [selectedcertificate, setselectedcertificate] = useState(null)

  const certificatesschema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/#certificates`,
    "name": `Certificates ${author.fullName}`,
    "description": `Daftar sertifikat penghargaan dan partisipasi ${author.fullName}`,
    "url": `${siteUrl}/#certificates`,
    "itemListElement": certificateData.map((cert, index) => ({
      "@type": "EducationalOccupationalCredential",
      "position": index + 1,
      "name": cert.name,
      "description": cert.description,
      "image": `${siteUrl}${cert.src}`,
      "credentialCategory": "Certificate",
      "recognizedBy": {
        "@type": "Organization",
        "name": cert.issuer
      }
    }))
  }

  const openmodal = (certificate) => {
    setselectedcertificate(certificate)
  }

  const closemodal = () => {
    setselectedcertificate(null)
  }

  useEffect(() => {
    document.body.style.overflow = selectedcertificate ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedcertificate])

  useEffect(() => {
    const handleesc = (event) => {
      if (event.key === 'Escape' && selectedcertificate) {
        closemodal()
      }
    }
    window.addEventListener('keydown', handleesc)
    return () => window.removeEventListener('keydown', handleesc)
  }, [selectedcertificate])

  return (
    <section id="certificates" className="section certificates">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(certificatesschema)}
        </script>
      </Helmet>
      <h2 className="section-title">Certificates</h2>
      <div className="certificates-grid">
        {certificateData.map((certificate) => (
          <div
            key={certificate.id}
            className="certificate-item"
            onClick={() => openmodal(certificate)}
            role="button"
            aria-label={`View certificate for ${certificate.name}`}
            tabIndex="0"
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                openmodal(certificate)
              }
            }}
          >
            <img
              src={certificate.src}
              alt={certificate.alt}
              className="certificate-img"
              width="320"
              height="200"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              sizes="(max-width: 768px) 100vw, 50vw"
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

      {selectedcertificate && (
        <div className="modal-overlay" onClick={closemodal} role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={closemodal} aria-label="Close modal">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ pointerEvents: 'none' }}>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <div className="modal-header">
              <img
                src={selectedcertificate.src}
                alt={selectedcertificate.alt}
                className="modal-thumbnail"
                width="520"
                height="280"
              />
              <div className="modal-header-info">
                <h3 className="modal-title" id="modal-title">{selectedcertificate.name}</h3>
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
                    <span className="meta-value">{selectedcertificate.date}</span>
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
                    <span className="meta-value">{selectedcertificate.issuer}</span>
                  </div>
                </div>
              </div>
              <div className="modal-description-wrapper">
                <p className="modal-description">{selectedcertificate.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificates
