import React from 'react';
import { render } from '@testing-library/react';

// Mock objects directly instead of mocking modules that might not exist in test environment
const mockRouter = {
  route: '/',
  pathname: '',
  query: {},
  asPath: '',
  push: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn()
  },
  beforePopState: jest.fn(() => null),
  prefetch: jest.fn(() => null)
};

// Add router to React context for components that use useRouter
const RouterContext = React.createContext(mockRouter);

// Mock Next.js useRouter hook
jest.mock('next/router', () => ({
  useRouter: () => mockRouter
}), { virtual: true });

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href, ...rest }) => {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  };
}, { virtual: true });

// Mock Next.js Head component
jest.mock('next/head', () => {
  return ({ children }) => <div data-testid="head">{children}</div>;
}, { virtual: true });

// Mock Next.js Script component
jest.mock('next/script', () => {
  return ({ id, dangerouslySetInnerHTML, children, ...props }) => (
    <script data-testid={id || 'next-script'} {...props}>
      {children}
      {dangerouslySetInnerHTML && <div data-testid={`${id || 'next-script'}-content`} />}
    </script>
  );
}, { virtual: true });

// Mock window.matchMedia for responsive tests
global.matchMedia = global.matchMedia || function() {
  return {
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
};

// Mock IntersectionObserver for components using it
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
};

// Custom render with router provider
function customRender(ui, options = {}) {
  return render(
    <RouterContext.Provider value={mockRouter}>
      {ui}
    </RouterContext.Provider>,
    options
  );
}

// Helper to find by tailwind class
function getByTailwindClass(container, className) {
  return container.querySelector(`.${className}`);
}

// Helper to check if an element has a tailwind class
function hasTailwindClass(element, className) {
  return element.classList.contains(className);
}

// Export everything from testing-library
export * from '@testing-library/react';

// Override render method
export { customRender as render, getByTailwindClass, hasTailwindClass };

// Mock date helper (use with jest.spyOn(global, 'Date'))
export function mockDate(date) {
  return date;
}

// Export mock router for tests that need to manipulate it
export { mockRouter };
