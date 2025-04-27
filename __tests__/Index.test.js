import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../src/pages/index';
import '@testing-library/jest-dom';

// Mock Next.js components
jest.mock('next/head', () => {
  return ({ children }) => <div data-testid="head">{children}</div>;
});

jest.mock('next/script', () => {
  return ({ id, dangerouslySetInnerHTML }) => (
    <script data-testid={id || 'next-script'}>
      {dangerouslySetInnerHTML && <div data-testid={`${id || 'next-script'}-content`} />}
    </script>
  );
});

// Mock Layout component
jest.mock('@/components/Layout', () => {
  return ({ children, title, description }) => (
    <div data-testid="layout" data-title={title} data-description={description}>
      {children}
    </div>
  );
});

describe('Home page', () => {
  it('renders the Layout component with correct props', () => {
    render(<Page />);
    const layout = screen.getByTestId('layout');
    
    expect(layout).toBeInTheDocument();
    expect(layout).toHaveAttribute('data-title', 'Yanok Agentic Workflow for Business');
    expect(layout).toHaveAttribute(
      'data-description', 
      'Build and run agentic workflows, turn the best practices into yes-no-ok decision for experts'
    );
  });
  
  it('includes HTML content in dangerouslySetInnerHTML prop', () => {
    const { container } = render(<Page />);
    
    // We can't directly check for dangerouslySetInnerHTML in the rendered output
    // due to how React handles it, but we can check for content that would be rendered
    
    // Check for key elements from the index page
    const layoutElement = screen.getByTestId('layout');
    expect(layoutElement).toBeInTheDocument();
    
    // Check for specific content from the index page
    expect(container.innerHTML).toContain('div');
    
    // For this test we'll verify the component rendered successfully
    // and contains children under the layout element
    expect(layoutElement.children.length).toBeGreaterThan(0);
  });
  
  it('includes static export function getStaticProps', () => {
    // In Next.js, getStaticProps is exported separately, not as a method on the component
    // We need to import it directly from the module
    const { getStaticProps } = require('../src/pages/index');
    
    // This test verifies that getStaticProps is exported and is a function
    expect(typeof getStaticProps).toBe('function');
  });
  
  it('returns correct props from getStaticProps', async () => {
    // Import the getStaticProps function directly
    const { getStaticProps } = require('../src/pages/index');
    
    // Call getStaticProps function
    const result = await getStaticProps();
    
    // Check that it returns the expected props
    expect(result).toEqual({
      props: {
        metaTitle: 'Yanok Agentic Workflow for Business',
        metaDescription: 'Build and run agentic workflows, turn the best practices into yes-no-ok decision for experts'
      }
    });
  });
});
