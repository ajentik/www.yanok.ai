import React from 'react';
import { render, screen, getByTailwindClass, hasTailwindClass, mockRouter } from './testUtils';

describe('Test Utilities', () => {
  it('should export the render function properly', () => {
    expect(typeof render).toBe('function');
  });

  it('should correctly mock Next.js router', () => {
    expect(mockRouter).toBeDefined();
    expect(mockRouter.push).toBeDefined();
    expect(typeof mockRouter.push).toBe('function');
  });

  it('should render components with router context', () => {
    const TestComponent = () => <div data-testid="test-component">Test Content</div>;
    render(<TestComponent />);
    expect(screen.getByTestId('test-component')).toBeInTheDocument();
  });

  it('should correctly check for tailwind classes', () => {
    const { container } = render(
      <div className="px-4 my-class">
        <span className="text-red-500">Tailwind Text</span>
      </div>
    );
    
    const element = container.firstChild;
    expect(hasTailwindClass(element, 'px-4')).toBe(true);
    expect(hasTailwindClass(element, 'my-class')).toBe(true);
    expect(hasTailwindClass(element, 'text-red-500')).toBe(false);
  });

  it('should find elements by tailwind class', () => {
    const { container } = render(
      <div>
        <span className="text-red-500">Red Text</span>
      </div>
    );
    
    const element = getByTailwindClass(container, 'text-red-500');
    expect(element).toBeDefined();
    expect(element.textContent).toBe('Red Text');
  });
});
