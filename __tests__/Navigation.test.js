import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from '../src/components/Navigation';
import '@testing-library/jest-dom';

describe('Navigation component', () => {
  it('renders main navigation links', () => {
    render(<Navigation />);
    expect(screen.getByText('Yanok AI')).toBeInTheDocument();
    expect(screen.getByText('Platform')).toBeInTheDocument();
    expect(screen.getByText('Solutions')).toBeInTheDocument();
    expect(screen.getByText('Partners')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Book an intro')).toBeInTheDocument();
  });
});
