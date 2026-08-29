import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import Projects from '../../components/Projects'
import { author, githubUsername } from '../../constants/settings'

const mockUserData = {
  login: githubUsername,
  name: author.fullName,
  bio: 'Pelajar',
  avatar_url: 'https://avatars.githubusercontent.com/u/123',
}

const mockRepos = [
  {
    id: 1,
    name: 'project-alpha',
    description: 'An awesome project',
    html_url: `https://github.com/${githubUsername}/project-alpha`,
    language: 'JavaScript',
    stargazers_count: 10,
    forks_count: 2,
    fork: false,
  },
  {
    id: 2,
    name: 'project-beta',
    description: 'Another project',
    html_url: `https://github.com/${githubUsername}/project-beta`,
    language: 'Python',
    stargazers_count: 5,
    forks_count: 1,
    fork: false,
  },
]

function renderProjects() {
  return render(
    <HelmetProvider>
      <Projects />
    </HelmetProvider>
  )
}

describe('Projects', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    localStorage.clear()
  })

  it('shows loading spinner initially', () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation(() => new Promise(() => {}))
    renderProjects()
    expect(document.querySelector('.loading-dots')).toBeInTheDocument()
  })

  it('has the projects section with correct id', () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation(() => new Promise(() => {}))
    renderProjects()
    expect(document.getElementById('projects')).toBeInTheDocument()
  })

  it('renders repos after successful fetch', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockUserData),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockRepos),
      })

    renderProjects()

    await waitFor(() => {
      expect(screen.getByText('project-alpha')).toBeInTheDocument()
    })

    expect(screen.getByText('An awesome project')).toBeInTheDocument()
  })

  it('renders profile info after data loads', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockUserData),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockRepos),
      })

    renderProjects()

    await waitFor(() => {
      expect(screen.getByText(author.fullName)).toBeInTheDocument()
    })
  })

  it('handles network failure gracefully', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('Network error'))

    renderProjects()

    await waitFor(() => {
      expect(document.querySelector('.loading-dots')).not.toBeInTheDocument()
    }, { timeout: 5000 })
  }, 10000)

  it('renders contribution graph', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockUserData),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockRepos),
      })

    renderProjects()

    await waitFor(() => {
      expect(document.querySelector('.contribution-graph')).toBeInTheDocument()
    })

    const weeks = document.querySelectorAll('.graph-week')
    expect(weeks.length).toBe(52)
  })

  it('uses cached data when available', async () => {
    const cacheData = {
      time: Date.now(),
      user: mockUserData,
      repos: mockRepos,
    }
    localStorage.setItem('YahahaHayuuuuu', JSON.stringify(cacheData))

    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockImplementation(() => new Promise(() => {}))

    renderProjects()

    await waitFor(() => {
      expect(screen.getByText(author.fullName)).toBeInTheDocument()
    })

    // Fresh cache = no fetch needed
    expect(fetchSpy).not.toHaveBeenCalled()
  })
})
