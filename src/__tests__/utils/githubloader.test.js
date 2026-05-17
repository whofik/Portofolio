import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  getcontributionlevel,
  buildrepodata,
  readgithubcache,
  writegithubcache,
  generatecontributiondata,
  fetchWithRetry,
} from '../../utils/githubloader'

describe('getcontributionlevel', () => {
  it('returns -1 for future dates', () => {
    const now = new Date('2026-01-15')
    const future = new Date('2026-02-01')
    expect(getcontributionlevel(future, now)).toBe(-1)
  })

  it('returns a level between 0 and 4 for past dates', () => {
    const now = new Date('2026-06-01')
    const past = new Date('2026-03-15')
    const level = getcontributionlevel(past, now)
    expect(level).toBeGreaterThanOrEqual(0)
    expect(level).toBeLessThanOrEqual(4)
  })

  it('returns deterministic results for the same date', () => {
    const now = new Date('2026-12-31')
    const date = new Date('2026-06-15')
    const level1 = getcontributionlevel(date, now)
    const level2 = getcontributionlevel(date, now)
    expect(level1).toBe(level2)
  })

  it('returns level for today (boundary: date === now)', () => {
    const now = new Date('2026-05-16')
    const level = getcontributionlevel(now, now)
    expect(level).toBeGreaterThanOrEqual(0)
    expect(level).toBeLessThanOrEqual(4)
  })
})

describe('buildrepodata', () => {
  const mockRepos = [
    { name: 'repo-a', fork: false, stargazers_count: 10, forks_count: 5 },
    { name: 'repo-b', fork: true, stargazers_count: 100, forks_count: 50 },
    { name: 'repo-c', fork: false, stargazers_count: 20, forks_count: 0 },
    { name: 'repo-d', fork: false, stargazers_count: 5, forks_count: 1 },
    { name: 'repo-e', fork: false, stargazers_count: 0, forks_count: 0 },
  ]

  it('filters out forked repos', () => {
    const result = buildrepodata(mockRepos)
    const names = result.repos.map(r => r.name)
    expect(names).not.toContain('repo-b')
  })

  it('sorts by (stars + forks) descending', () => {
    const result = buildrepodata(mockRepos)
    expect(result.repos[0].name).toBe('repo-c')
    expect(result.repos[1].name).toBe('repo-a')
  })

  it('returns only top 3 repos', () => {
    const result = buildrepodata(mockRepos)
    expect(result.repos.length).toBeLessThanOrEqual(3)
  })

  it('calculates correct aggregate stats', () => {
    const result = buildrepodata(mockRepos)
    expect(result.stats.totalrepos).toBe(4) // 4 non-fork repos
    expect(result.stats.totalstars).toBe(35) // 10+20+5+0
    expect(result.stats.totalforks).toBe(6) // 5+0+1+0
  })

  it('handles empty repo list', () => {
    const result = buildrepodata([])
    expect(result.repos).toEqual([])
    expect(result.stats.totalrepos).toBe(0)
    expect(result.stats.totalstars).toBe(0)
    expect(result.stats.totalforks).toBe(0)
  })

  it('handles all repos being forks', () => {
    const allForks = [
      { name: 'fork-1', fork: true, stargazers_count: 5, forks_count: 1 },
      { name: 'fork-2', fork: true, stargazers_count: 3, forks_count: 0 },
    ]
    const result = buildrepodata(allForks)
    expect(result.repos).toEqual([])
    expect(result.stats.totalrepos).toBe(0)
  })
})

describe('readgithubcache / writegithubcache', () => {
  it('returns null when no cache exists', () => {
    expect(readgithubcache()).toBeNull()
  })

  it('writes and reads cache correctly', () => {
    const user = { login: 'test', name: 'Test User' }
    const repos = [{ name: 'repo-1', fork: false, stargazers_count: 0, forks_count: 0 }]
    writegithubcache(user, repos)
    const cache = readgithubcache()
    expect(cache).not.toBeNull()
    expect(cache.user.login).toBe('test')
    expect(cache.repos).toHaveLength(1)
    expect(cache.isfresh).toBe(true)
  })

  it('returns null for malformed cache data', () => {
    localStorage.setItem('YahahaHayuuuuu', 'not json')
    expect(readgithubcache()).toBeNull()
  })

  it('returns null for cache missing required fields', () => {
    localStorage.setItem('YahahaHayuuuuu', JSON.stringify({ time: Date.now() }))
    expect(readgithubcache()).toBeNull()
  })

  it('marks old cache as not fresh', () => {
    const oldTime = Date.now() - (1000 * 60 * 20) // 20 minutes ago
    localStorage.setItem('YahahaHayuuuuu', JSON.stringify({
      time: oldTime,
      user: { login: 'test' },
      repos: [],
    }))
    const cache = readgithubcache()
    expect(cache).not.toBeNull()
    expect(cache.isfresh).toBe(false)
  })
})

describe('generatecontributiondata', () => {
  it('returns 52 weeks', () => {
    const data = generatecontributiondata()
    expect(data).toHaveLength(52)
  })

  it('each week has 7 days', () => {
    const data = generatecontributiondata()
    data.forEach(week => {
      expect(week).toHaveLength(7)
    })
  })

  it('each day has date and level properties', () => {
    const data = generatecontributiondata()
    const firstDay = data[0][0]
    expect(firstDay).toHaveProperty('date')
    expect(firstDay).toHaveProperty('level')
    expect(firstDay.date).toBeInstanceOf(Date)
  })

  it('levels are in valid range (-1 to 4)', () => {
    const data = generatecontributiondata()
    data.forEach(week => {
      week.forEach(day => {
        expect(day.level).toBeGreaterThanOrEqual(-1)
        expect(day.level).toBeLessThanOrEqual(4)
      })
    })
  })
})

describe('fetchWithRetry', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('returns response on first successful attempt', async () => {
    const mockResponse = { ok: true, json: () => Promise.resolve({ data: 'test' }) }
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(mockResponse)
    const result = await fetchWithRetry('https://api.example.com/test')
    expect(result).toBe(mockResponse)
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('retries once on failure', async () => {
    const mockSuccessResponse = { ok: true, json: () => Promise.resolve({}) }
    vi.spyOn(globalThis, 'fetch')
      .mockRejectedValueOnce(new Error('Network error'))
      .mockResolvedValueOnce(mockSuccessResponse)

    const result = await fetchWithRetry('https://api.example.com/test')
    expect(result).toBe(mockSuccessResponse)
    expect(fetch).toHaveBeenCalledTimes(2)
  }, 5000)

  it('retries on non-ok HTTP response', async () => {
    const mockSuccessResponse = { ok: true }
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({ ok: false, status: 500 })
      .mockResolvedValueOnce(mockSuccessResponse)

    const result = await fetchWithRetry('https://api.example.com/test')
    expect(result).toBe(mockSuccessResponse)
    expect(fetch).toHaveBeenCalledTimes(2)
  }, 5000)

  it('does not retry if signal is aborted', async () => {
    const controller = new AbortController()
    controller.abort()
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new DOMException('Aborted', 'AbortError'))

    await expect(fetchWithRetry('https://api.example.com/test', { signal: controller.signal }))
      .rejects.toThrow()
    expect(fetch).toHaveBeenCalledTimes(1)
  })
})
