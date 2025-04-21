    import React from 'react';
import { render, screen } from '@testing-library/react';
import IntegrationPage from '../src/pages/integrations/[slug]';

describe('IntegrationPage component', () => {
  const integration = {
    id: 1,
    name: 'Test Integration',
    description: 'This is a test integration.',
    slug: 'test-integration',
    logoUrl: null,
  };
  const triggers = [
    { id: 10, name: 'Trigger One', description: 'First trigger', integration_id: 1 },
    { id: 11, name: 'Trigger Two', description: 'Second trigger', integration_id: 1 }
  ];
  const actions = [
    { id: 20, name: 'Action One', description: 'First action', integration_id: 1 },
    { id: 21, name: 'Action Two', description: 'Second action', integration_id: 1 }
  ];
  const metaTags = (
    <>
      <title>Test Integration</title>
      <meta name="description" content="This is a test integration." />
    </>
  );

  it('renders integration details, triggers, and actions', () => {
    render(
      <IntegrationPage
        integration={integration}
        triggers={triggers}
        actions={actions}
        metaTags={metaTags}
      />
    );

    // Integration title heading
    expect(screen.getByRole('heading', { level: 1, name: integration.name })).toBeInTheDocument();
    expect(screen.getByText(integration.description)).toBeInTheDocument();

    // Triggers
    expect(screen.getByText('Trigger One')).toBeInTheDocument();
    expect(screen.getByText('First trigger')).toBeInTheDocument();
    expect(screen.getByText('Trigger Two')).toBeInTheDocument();

    // Actions
    expect(screen.getByText('Action One')).toBeInTheDocument();
    expect(screen.getByText('First action')).toBeInTheDocument();
    expect(screen.getByText('Action Two')).toBeInTheDocument();
  });
});
