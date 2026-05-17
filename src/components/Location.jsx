import '../styles/Location.css'

function Location() {
  return (
    <section id="location" className="section location">
      <h2 className="section-title">Location</h2>
      <div className="location-container">
        
        <div className="location-left">
          <img 
            src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Jakarta Cityscape" 
            className="location-photo"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="location-right">
          <div className="location-card">
            <img 
              src="/logo/banten logo.svg" 
              alt="Banten Logo" 
              className="location-logo" 
              width="50"
              height="50"
            />
            <div className="location-info">
              <h3 className="location-city">Serang</h3>
              <p className="location-status">Lahir</p>
            </div>
          </div>

          <div className="location-card">
            <img 
              src="/logo/logo jakarta.svg" 
              alt="Jakarta Logo" 
              className="location-logo"
              width="50"
              height="50"
            />
            <div className="location-info">
              <h3 className="location-city">DKI Jakarta</h3>
              <p className="location-status">Tinggal sekarang</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Location
