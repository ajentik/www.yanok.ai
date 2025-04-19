import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../src/components/Layout';

describe('Layout component', () => {
  it('renders children correctly', () => {
    const text = 'Test Child Content';
    render(
      <Layout>
        <p>{text}</p>
      </Layout>
    );
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
