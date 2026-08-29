import '../styles/Location.css'
import { locationData } from '../constants/settings'

function Location() {
  return (
    <section id="location" className="section location">
      <h2 className="section-title">Location</h2>
      <div className="location-container">

        <div className="location-left">
          <img
            src={locationData.photo.src}
            alt={locationData.photo.alt}
            className="location-photo"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            width="800"
            height="450"
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        </div>

        <div className="location-right">
          {locationData.places.map((place) => (
            <div key={place.city} className="location-card">
              <img
                src={place.logo}
                alt={place.logoAlt}
                className="location-logo"
                width="50"
                height="50"
              />
              <div className="location-info">
                <h3 className="location-city">{place.city}</h3>
                <p className="location-status">{place.status}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Location
