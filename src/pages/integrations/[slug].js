import IntegrationLayout from '@/components/IntegrationLayout';
import { readYamlData } from '@/lib/dataUtils';
import path from 'path';

export default function IntegrationPage({ integration, triggers, actions, metaTags }) {
  return (
    <>
      {metaTags}
      <IntegrationLayout title={integration.name} description={integration.description}>
        <div className="flex flex-col items-center pt-10">
          <img
            className="h-20"
            src={integration.logoUrl || `/assets/images/integrations/${integration.slug}.png`}
            alt={integration.name}
          />
          <p className="max-w-3xl mt-8 text-center">
            {integration.description}
          </p>
        </div>
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-2xl font-bold">Triggers</h2>
          <div className="flex flex-col gap-5 mt-5">
            {triggers.map(trigger => (
              <div key={trigger.id} className="flex flex-col items-start">
                <div className="font-semibold">{trigger.name}</div>
                <div>{trigger.description}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-2xl font-bold">Actions</h2>
          <div className="flex flex-col gap-5 mt-5">
            {actions.map(action => (
              <div key={action.id} className="flex flex-col items-start">
                <div className="font-semibold">{action.name}</div>
                <div>{action.description}</div>
              </div>
            ))}
          </div>
        </div>
      </IntegrationLayout>
    </>
  );
}

export async function getStaticPaths() {
  const integrations = readYamlData(path.join(process.cwd(), 'data', 'integrations.yml'));
  const paths = integrations.map(item => ({ params: { slug: item.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const integrations = readYamlData(path.join(process.cwd(), 'data', 'integrations.yml'));
  const triggers = readYamlData(path.join(process.cwd(), 'data', 'triggers.yml'));
  const actions = readYamlData(path.join(process.cwd(), 'data', 'actions.yml'));
  const integration = integrations.find(item => item.slug === params.slug);
  const integrationTriggers = triggers.filter(t => t.integration_id === integration.id);
  const integrationActions = actions.filter(a => a.integration_id === integration.id);

  return {
    props: {
      integration,
      triggers: integrationTriggers,
      actions: integrationActions,
      metaTags: (
        <>
          <title>{integration.name}</title>
        </>
      ),
    },
  };
}
