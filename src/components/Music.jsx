import '../styles/Music.css'

function Music() {
  return (
    <section id="music" className="section music">
      <h2 className="section-title">Spotify</h2>
      <div className="spotify-card">
        <iframe
          src="https://open.spotify.com/embed/playlist/1UeW9ClutFrzvBAXhJw2Nv?si=d44VGpEfS1ig_qrsnbk_7A&pi=D1_654NNSSKrw"
          title="Muhammad Fikri Spotify Music Playlist"
          frameBorder="0"
          allow="encrypted-media"
          loading="lazy"
          style={{ borderRadius: '12px' }}
        ></iframe>
      </div>
    </section>
  )
}

export default Music
