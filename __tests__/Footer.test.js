import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';
import '@testing-library/jest-dom';

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Footer component', () => {
  beforeEach(() => {
    // Mock the current year for consistent testing
    const mockDate = new Date('2025-04-26');
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
  });
  
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders company name correctly', () => {
    render(<Footer />);
    expect(screen.getByText('Yanok AI')).toBeInTheDocument();
  });

  it('renders copyright with the current year', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 Yanok AI\. All rights reserved\./)).toBeInTheDocument();
  });

  it('renders all platform links', () => {
    render(<Footer />);
    expect(screen.getByText('Platform')).toBeInTheDocument();
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Run AI')).toBeInTheDocument();
    expect(screen.getByText('Async Jobs')).toBeInTheDocument();
    expect(screen.getByText('RAG')).toBeInTheDocument();
  });

  it('renders all solution links', () => {
    render(<Footer />);
    expect(screen.getByText('Solutions')).toBeInTheDocument();
    expect(screen.getByText('Maintain Security')).toBeInTheDocument();
    expect(screen.getByText('Manage API')).toBeInTheDocument();
  });

  it('renders all company links', () => {
    render(<Footer />);
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Careers')).toBeInTheDocument();
    expect(screen.getByText('D&I')).toBeInTheDocument();
  });

  it('renders all legal links', () => {
    render(<Footer />);
    expect(screen.getByText('Legal')).toBeInTheDocument();
    expect(screen.getByText('Privacy')).toBeInTheDocument();
    expect(screen.getByText('Terms')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    expect(screen.getByText('Twitter')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('has correct link hrefs for navigation items', () => {
    render(<Footer />);
    
    // Platform links
    expect(screen.getByText('Overview').closest('a')).toHaveAttribute('href', '/platform');
    expect(screen.getByText('Run AI').closest('a')).toHaveAttribute('href', '/run-ai');
    expect(screen.getByText('Async Jobs').closest('a')).toHaveAttribute('href', '/async-jobs');
    expect(screen.getByText('RAG').closest('a')).toHaveAttribute('href', '/rag');
    
    // Solutions links
    expect(screen.getByText('Maintain Security').closest('a')).toHaveAttribute('href', '/maintain-security');
    expect(screen.getByText('Manage API').closest('a')).toHaveAttribute('href', '/manage-api');
    
    // Company links
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Careers').closest('a')).toHaveAttribute('href', '/careers');
    expect(screen.getByText('D&I').closest('a')).toHaveAttribute('href', '/diversity-and-inclusion');
    
    // Legal links
    expect(screen.getByText('Privacy').closest('a')).toHaveAttribute('href', '/privacy');
    expect(screen.getByText('Terms').closest('a')).toHaveAttribute('href', '/terms');
  });
  
  it('has correct social media links with proper attributes', () => {
    render(<Footer />);
    
    // Twitter
    const twitterLink = screen.getByText('Twitter').closest('a');
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/YanokAI');
    expect(twitterLink).toHaveAttribute('target', '_blank');
    expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    // GitHub
    const githubLink = screen.getByText('GitHub').closest('a');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/YanokAI');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    // LinkedIn
    const linkedinLink = screen.getByText('LinkedIn').closest('a');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/yanok-ai');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
  
  // CSS class tests
  it('applies correct CSS classes for responsive design', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('w-full');
    expect(footerElement).toHaveClass('py-10');
    expect(footerElement).toHaveClass('bg-darkerBlue/50');
    expect(footerElement).toHaveClass('mt-auto');
    
    // Check responsive grid classes
    const gridContainer = screen.getByText('Platform').closest('div').parentElement;
    expect(gridContainer).toHaveClass('grid');
    expect(gridContainer).toHaveClass('grid-cols-2');
    expect(gridContainer).toHaveClass('md:grid-cols-4');
    expect(gridContainer).toHaveClass('gap-8');
  });
});
