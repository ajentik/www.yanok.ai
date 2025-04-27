import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../src/components/Layout';
import '@testing-library/jest-dom';

// Mock Next.js components
jest.mock('next/head', () => {
  const originalModule = jest.requireActual('react');
  
  class HeadMock extends originalModule.Component {
    render() {
      const { children } = this.props;
      
      const processedChildren = [];
      let titleContent = null;
      let metaDesc = null;
      let favicon = null;
      
      // Process children to extract important elements
      originalModule.Children.forEach(children, (child) => {
        if (!originalModule.isValidElement(child)) return;
        
        const { type, props } = child;
        
        if (type === 'title') {
          titleContent = props.children;
          processedChildren.push(<title key="title" data-testid="page-title">{props.children}</title>);
        } 
        else if (type === 'meta' && props.name === 'description') {
          metaDesc = props.content;
          processedChildren.push(<meta key="meta-desc" data-testid="meta-description" name={props.name} content={props.content} />);
        } 
        else if (type === 'link' && props.rel === 'icon') {
          favicon = props.href;
          processedChildren.push(<link key="favicon" data-testid="favicon" rel={props.rel} href={props.href} />);
        } 
        else {
          processedChildren.push(child);
        }
      });
      
      return (
        <div data-testid="head" data-title={titleContent} data-description={metaDesc} data-favicon={favicon}>
          {processedChildren}
        </div>
      );
    }
  }
  
  return HeadMock;
});

jest.mock('next/script', () => {
  return ({ id, dangerouslySetInnerHTML }) => (
    <script data-testid={id || 'next-script'}>
      {dangerouslySetInnerHTML && <div data-testid={`${id || 'next-script'}-content`} />}
    </script>
  );
});

jest.mock('next/link', () => {
  return ({ children, href }) => <a href={href}>{children}</a>;
});

// DO NOT mock Navigation and Footer, as we want to test their integration with Layout

describe('Layout integration with Navigation and Footer', () => {
  it('renders Navigation component', () => {
    render(
      <Layout title="Test Title">
        <p>Test content</p>
      </Layout>
    );
    
    // Verify Navigation component is rendered
    // Use querySelector to find navigation element
    const nav = document.querySelector('nav');
    expect(nav).toBeInTheDocument();
    
    // Find Yanok AI in the navigation bar specifically
    const navLinks = nav.querySelectorAll('a');
    let hasYanokAI = false;
    navLinks.forEach(link => {
      if (link.textContent.includes('Yanok AI')) {
        hasYanokAI = true;
      }
    });
    expect(hasYanokAI).toBe(true);
    
    // Look for platform link in navigation
    const platformLink = nav.querySelector('a[href="/platform"]');
    expect(platformLink).toBeInTheDocument();
    expect(platformLink.textContent).toBe('Platform');
  });
  
  it('renders Footer component', () => {
    render(
      <Layout title="Test Title">
        <p>Test content</p>
      </Layout>
    );
    
    // Verify Footer component is rendered
    const footer = document.querySelector('footer');
    expect(footer).toBeInTheDocument();
    
    // Check for copyright text
    expect(screen.getByText(/© \d{4} Yanok AI\. All rights reserved\./)).toBeInTheDocument();
    
    // Check for Footer navigation sections using headings
    const headings = footer.querySelectorAll('h3');
    const sectionTitles = Array.from(headings).map(h => h.textContent);
    expect(sectionTitles).toContain('Platform');
    expect(sectionTitles).toContain('Solutions');
    expect(sectionTitles).toContain('Company');
    expect(sectionTitles).toContain('Legal');
  });
  
  it('renders head with proper title', () => {
    render(
      <Layout title="Test Title">
        <p>Test content</p>
      </Layout>
    );
    
    // Verify title is rendered in Head
    const head = screen.getByTestId('head');
    expect(head).toHaveAttribute('data-title', 'Test Title | Yanok AI');
  });
  
  it('renders head with metaTitle when provided', () => {
    render(
      <Layout title="Test Title" metaTitle="Custom Meta Title">
        <p>Test content</p>
      </Layout>
    );
    
    // Verify metaTitle takes precedence over title
    const head = screen.getByTestId('head');
    expect(head).toHaveAttribute('data-title', 'Custom Meta Title | Yanok AI');
  });
  
  it('contains Google Tag Manager script', () => {
    render(
      <Layout title="Test Title">
        <p>Test content</p>
      </Layout>
    );
    
    // Check for GTM script
    const gtmScript = screen.getByTestId('gtm-script');
    expect(gtmScript).toBeInTheDocument();
  });
  
  it('correctly wraps content in proper structure', () => {
    render(
      <Layout title="Test Title">
        <p>Test content</p>
      </Layout>
    );
    
    // Content should be in main tag
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveTextContent('Test content');
    
    // Main should be in a content wrapper
    const wrapper = main.closest('#content-wrapper');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass('flex');
    expect(wrapper).toHaveClass('flex-col');
    expect(wrapper).toHaveClass('min-h-screen');
  });
  
  it('renders favicon link in head', () => {
    render(
      <Layout title="Test Title">
        <p>Test content</p>
      </Layout>
    );
    
    // Check for favicon link in head
    const head = screen.getByTestId('head');
    expect(head).toHaveAttribute('data-favicon', '/favicon.ico');
  });
  
  it('renders description meta tag when provided', () => {
    const description = 'This is a test description';
    render(
      <Layout title="Test Title" description={description}>
        <p>Test content</p>
      </Layout>
    );
    
    // Check for description meta tag
    const head = screen.getByTestId('head');
    expect(head).toHaveAttribute('data-description', description);
  });
  
  it('uses metaDescription over description when both are provided', () => {
    render(
      <Layout 
        title="Test Title" 
        description="Regular description" 
        metaDescription="Meta description"
      >
        <p>Test content</p>
      </Layout>
    );
    
    // Check that metaDescription is used
    const head = screen.getByTestId('head');
    expect(head).toHaveAttribute('data-description', 'Meta description');
  });
});
