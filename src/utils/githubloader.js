/**
 * GitHub data utilities for the Projects section.
 * Handles API caching in localStorage, contribution graph generation,
 * and repository data transformation.
 */

/** @type {string} localStorage key for GitHub API cache */
const githubcachekey = 'YahahaHayuuuuu'

/** @type {number} Cache TTL: 15 minutes in milliseconds */
const githubcacheage = 1000 * 60 * 15

/**
 * Generate a deterministic "contribution level" for a given date.
 * Used to render the contribution graph without hitting the GitHub GraphQL API.
 *
 * @param {Date} date - The date to calculate a level for
 * @param {Date} now - The current date (dates after this return -1)
 * @returns {number} Level from -1 (future) to 4 (highest activity)
 */
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

/**
 * Filter, sort, and compute stats from a raw list of GitHub repos.
 * - Filters out forks
 * - Sorts by (stars + forks) descending
 * - Returns top 3 repos and aggregate stats
 *
 * @param {Array<object>} repolist - Raw repo objects from the GitHub API
 * @returns {{ repos: Array<object>, stats: { totalrepos: number, totalstars: number, totalforks: number } }}
 */
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

/**
 * Read cached GitHub data from localStorage.
 *
 * @returns {{ isfresh: boolean, repos: Array<object>, user: object } | null}
 *   Returns null if cache is missing or malformed.
 *   `isfresh` is true if the cache is within the TTL window.
 */
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

/**
 * Write GitHub data to localStorage cache with a timestamp.
 *
 * @param {object} user - GitHub user profile object
 * @param {Array<object>} repos - Array of GitHub repo objects
 */
export function writegithubcache(user, repos) {
  try {
    localStorage.setItem(githubcachekey, JSON.stringify({ time: Date.now(), user, repos }))
  } catch { return }
}

/**
 * Generate 52 weeks × 7 days of contribution data for the graph.
 * Each day has a deterministic level based on its date.
 *
 * @returns {Array<Array<{ date: Date, level: number }>>} 52 arrays of 7 day objects
 */
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

/**
 * Fetch data from a URL with a single retry on failure.
 * Uses exponential backoff (1s delay before retry).
 *
 * @param {string} fetchurl - URL to fetch
 * @param {object} options - fetch options (signal, headers, etc.)
 * @returns {Promise<Response>}
 */
export async function fetchWithRetry(fetchurl, options = {}) {
  try {
    const response = await fetch(fetchurl, options)
    if (response.ok) return response
    throw new Error(`HTTP ${response.status}`)
  } catch (error) {
    if (options.signal?.aborted) throw error
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return fetch(fetchurl, options)
  }
}
