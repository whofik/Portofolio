import { useState } from 'react'
import '../styles/Music.css'
import { author } from '../constants/settings'

function Music() {
  const [loaded, setLoaded] = useState(false)
  return (
    <section id="music" className="section music">
      <h2 className="section-title">Spotify</h2>
      <div className="spotify-card">
        {!loaded ? (
          <button
            type="button"
            className="spotify-facade"
            onClick={() => setLoaded(true)}
            aria-label="Load Spotify playlist"
          >
            <div className="spotify-facade-art">
              <svg viewBox="0 0 24 24" width="48" height="48" fill="#1DB954" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34c-.24.39-.75.51-1.14.27-3.11-1.9-7.03-2.33-11.65-1.28-.44.1-.88-.18-.98-.62-.1-.44.18-.88.62-.98 5.2-1.18 9.6-.67 13.16 1.51.39.24.51.75.27 1.14zm1.47-3.27c-.3.49-.94.64-1.43.35-3.56-2.19-8.99-2.82-13.2-1.54-.54.16-1.11-.14-1.27-.68-.16-.54.14-1.11.68-1.27 4.84-1.47 10.92-.76 15.04 1.82.49.3.64.94.35 1.43l-.17-.11zm.13-3.41c-4.27-2.54-11.33-2.77-15.41-1.52-.64.2-1.33-.16-1.53-.8-.2-.64.16-1.33.8-1.53 4.71-1.44 12.47-1.17 17.38 1.79.59.35.78 1.11.43 1.7-.35.59-1.11.78-1.7.43l.03-.07z"/></svg>
            </div>
            <span className="spotify-facade-title">{author.fullName} Playlist</span>
            <span className="spotify-facade-cta">Tap to play</span>
          </button>
        ) : (
          <iframe
            src="https://open.spotify.com/embed/playlist/1UeW9ClutFrzvBAXhJw2Nv?si=d44VGpEfS1ig_qrsnbk_7A&pi=D1_654NNSSKrw"
            title={`${author.fullName} Spotify Music Playlist`}
            frameBorder="0"
            allow="encrypted-media; clipboard-write; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: '12px' }}
          ></iframe>
        )}
      </div>
    </section>
  )
}

export default Music
