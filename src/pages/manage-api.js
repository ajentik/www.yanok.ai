import Layout from '@/components/Layout';

export default function Page() {
  return (
    <Layout 
      title="Manage API - Yanok Platform"
      description="API Management with AI Capabilities"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="pt-10 max-w-container mx-auto text-center">
  <h1 class="font-regular text-5xl md:text-7xl">Manage API</h1>
  <p class="text-2xl pt-10">Intelligent API Management with Autonomous Monitoring</p>
</div>

<div class="w-full text-white">
  <div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-20 py-24">
    <div class="text-xl space-y-8">
      <h2 class="text-3xl font-bold">API Lifecycle Management</h2>
      <ul class="list-disc pl-8 space-y-4">
        <li>Automated API creation and documentation</li>
        <li>Version control and deployment</li>
        <li>Performance monitoring and analytics</li>
        <li>Security and access control</li>
      </ul>

      <h2 class="text-3xl font-bold pt-12">Agentic Capabilities</h2>
      <ul class="list-disc pl-8 space-y-4">
        <li>Self-healing endpoints</li>
        <li>Intelligent request routing</li>
        <li>Automated load balancing</li>
        <li>Adaptive rate limiting</li>
      </ul>

      <h2 class="text-3xl font-bold pt-12">Integration Features</h2>
      <ul class="list-disc pl-8 space-y-4">
        <li>Multi-protocol support (REST, GraphQL)</li>
        <li>Custom authentication methods</li>
        <li>Automated documentation updates</li>
        <li>Real-time monitoring dashboards</li>
      </ul>
    </div>
  </div>
</div>` }} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>Manage API - Yanok Platform</title>
          <meta name="description" content="API Management with AI Capabilities" />
        </>
      ),
    },
  };
}
