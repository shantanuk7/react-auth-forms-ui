// src/test/setup.ts

import '@testing-library/jest-dom'

beforeEach(() => {
  // directly replace localStorage with a simple fake version.
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    },
    writable: true,
  })
})

// Fix 2: fake matchMedia
// jsdom doesn't implement matchMedia because it has no concept of screen size.
// react-hot-toast calls it internally to detect user preferences (like reduced motion).
// We just return a dummy object that satisfies what it expects.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,        // always say "no, this media query doesn't match"
    media: query,          // echo back the query string
    onchange: null,
    addListener: vi.fn(),  // deprecated but some libs still call it
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})