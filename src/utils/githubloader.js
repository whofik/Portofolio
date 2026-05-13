const githubcachekey = 'YahahaHayuuuuu'
const githubcacheage = 1000 * 60 * 15

export function getcontributionlevel(date, now) {
  if (date > now) {
    return -1
  }
  const daykey = Math.floor(date.getTime() / 86400000)
  const value = (daykey * 37 + date.getMonth() * 17 + date.getDate() * 13) % 100
  if (value < 45) return 0
  if (value < 70) return 1
  if (value < 85) return 2
  if (value < 95) return 3
  return 4
}

export function buildrepodata(repolist) {
  const filtered = repolist.filter((repo) => !repo.fork)
  const sorted = filtered
    .slice()
    .sort((a, b) => (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count))
  return {
    repos: sorted.slice(0, 3),
    stats: {
      totalrepos: filtered.length,
      totalstars: filtered.reduce((sum, repo) => sum + repo.stargazers_count, 0),
      totalforks: filtered.reduce((sum, repo) => sum + repo.forks_count, 0),
    },
  }
}

export function readgithubcache() {
  try {
    const rawcache = localStorage.getItem(githubcachekey)
    if (!rawcache) return null
    const parsedcache = JSON.parse(rawcache)
    if (!parsedcache || !parsedcache.time || !Array.isArray(parsedcache.repos) || !parsedcache.user) return null
    const isfresh = Date.now() - parsedcache.time < githubcacheage
    return { isfresh, repos: parsedcache.repos, user: parsedcache.user }
  } catch { return null }
}

export function writegithubcache(user, repos) {
  try {
    localStorage.setItem(githubcachekey, JSON.stringify({ time: Date.now(), user, repos }))
  } catch { return }
}

export function generatecontributiondata() {
  const weeks = 52
  const daysperweek = 7
  const data = []
  const now = new Date()
  const startdate = new Date(now.getFullYear(), 0, 1)
  for (let w = 0; w < weeks; w++) {
    const week = []
    for (let d = 0; d < daysperweek; d++) {
      const date = new Date(startdate)
      date.setDate(startdate.getDate() + (w * 7) + d)
      const level = getcontributionlevel(date, now)
      week.push({ date, level })
    }
    data.push(week)
  }
  return data
}
