import { useState, useEffect, useMemo } from 'react'
import '../styles/Projects.css'

const username = 'whofik'

function generateContributionData() {
  const weeks = 52
  const daysPerWeek = 7
  const data = []
  const now = new Date()
  const startDate = new Date(now.getFullYear(), 0, 1)

  for (let w = 0; w < weeks; w++) {
    const week = []
    for (let d = 0; d < daysPerWeek; d++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + (w * 7) + d)
      const isFuture = date > now
      const level = isFuture ? -1 : Math.floor(Math.random() * 4)
      week.push({ date, level })
    }
    data.push(week)
  }
  return data
}

function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState(null)
  const [stats, setStats] = useState({ totalRepos: 0, totalStars: 0, totalForks: 0 })
  
  const contributionData = useMemo(() => generateContributionData(), [])

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((user) => setUserData(user))
      .catch(() => setUserData(null))

    fetch(`https://api.github.com/users/${username}/repos?per_page=1000&sort=updated`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo) => !repo.fork)
        const sorted = filtered.sort((a, b) => (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count))
        const top3 = sorted.slice(0, 3)
        setRepos(top3)
        setStats({
          totalRepos: filtered.length,
          totalStars: filtered.reduce((sum, repo) => sum + repo.stargazers_count, 0),
          totalForks: filtered.reduce((sum, repo) => sum + repo.forks_count, 0)
        })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Projects</h2>

      {loading ? (
        <div className="projects-loading">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <div className="projects-header">
            <div className="profile-info">
              {userData && (
                <img
                  src={userData.avatar_url}
                  alt={userData.login}
                  className="avatar"
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <div className="profile-details">
                <h3 className="profile-name">{userData?.name || userData?.login || username}</h3>
                <p className="profile-bio">{userData?.bio || 'GitHub Developer'}</p>
              </div>
            </div>
            <div className="contribution-graph">
              <div className="graph-container">
                <div className="graph-grid">
                  {contributionData.map((week, wi) => (
                    <div key={wi} className="graph-week">
                      {week.map((day, di) => (
                        <div
                          key={di}
                          className={`graph-day level-${day.level}`}
                          title={`${day.date.toLocaleDateString()}`}
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="graph-legend">
                  <span className="legend-label">Less</span>
                  <div className="legend-blocks">
                    <span className="legend-day level-0"></span>
                    <span className="legend-day level-1"></span>
                    <span className="legend-day level-2"></span>
                    <span className="legend-day level-3"></span>
                    <span className="legend-day level-4"></span>
                  </div>
                  <span className="legend-label">More</span>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-stats">
            <div className="stat-card">
              <span className="stat-number">{stats.totalRepos}</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{stats.totalStars}</span>
              <span className="stat-label">Stars</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{stats.totalForks}</span>
              <span className="stat-label">Forks</span>
            </div>
          </div>

          <div className="projects-grid">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="project-header">
                  <svg className="project-icon" viewBox="0 0 16 16" width="18" height="18" fill="currentColor">
                    <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9z"/>
                  </svg>
                  <span className="project-name">{repo.name}</span>
                </div>
                {repo.description && (
                  <p className="project-desc">{repo.description}</p>
                )}
                <div className="project-meta">
                  {repo.language && (
                    <span className="project-lang">
                      <span className="lang-dot"></span>
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="project-star">
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                      </svg>
                      {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="project-fork">
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
                        <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0-4.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm7.5 9.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0-4.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM8.5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM10 11.5a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zM8.5 11.5a.75.75 0 01.75-.75h2a.75.75 0 010 1.5h-2a.75.75 0 01-.75-.75zM7.25 12.25a.75.75 0 01-.75.75H4.5a.75.75 0 010-1.5h2a.75.75 0 01.75.75zM8.5 7.75a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75zM7.25 10.75a.75.75 0 01-.75.75H4.5a.75.75 0 010-1.5h2a.75.75 0 01.75.75zM8.5 5.75a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75zM7.25 8.75a.75.75 0 01-.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01.75.75zM7.5 4.75a.75.75 0 01-.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01.75.75z"/>
                      </svg>
                      {repo.forks_count}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default Projects
