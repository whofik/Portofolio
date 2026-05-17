import '@testing-library/jest-dom'

// Mock localStorage
const localStorageMock = (() => {
  let store = {}
  return {
    getItem: (key) => store[key] ?? null,
    setItem: (key, value) => { store[key] = String(value) },
    removeItem: (key) => { delete store[key] },
    clear: () => { store = {} },
    get length() { return Object.keys(store).length },
    key: (index) => Object.keys(store)[index] ?? null,
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

// Mock IntersectionObserver
class IntersectionObserverMock {
  constructor() {
    this.observe = vi.fn()
    this.unobserve = vi.fn()
    this.disconnect = vi.fn()
  }
}

window.IntersectionObserver = IntersectionObserverMock

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn()

// Reset localStorage between tests
beforeEach(() => {
  localStorage.clear()
})
