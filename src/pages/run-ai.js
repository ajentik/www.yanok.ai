import Layout from '@/components/Layout';

export default function Page() {
  return (
    <Layout 
      title="Run AI - Yanok Platform"
      description="AI Automation and Agent Capabilities"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="pt-10 max-w-container mx-auto text-center">
  <h1 class="font-regular text-5xl md:text-7xl">Run AI</h1>
  <p class="text-2xl pt-10">Advanced AI automation with autonomous agent capabilities</p>
</div>

<div class="w-full text-white">
  <div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-20 py-24">
    <div class="text-xl space-y-8">
      <h2 class="text-3xl font-bold">Autonomous AI Agents</h2>
      <ul class="list-disc pl-8 space-y-4">
        <li>Goal-oriented task execution with dynamic planning</li>
        <li>Contextual decision-making based on business rules</li>
        <li>Self-learning and adaptation from interactions</li>
        <li>Multi-agent collaboration and orchestration</li>
      </ul>

      <h2 class="text-3xl font-bold pt-12">Integration Capabilities</h2>
      <ul class="list-disc pl-8 space-y-4">
        <li>Natural language processing for text analysis</li>
        <li>Computer vision for image/video processing</li>
        <li>Real-time decision engines</li>
        <li>Predictive analytics integration</li>
      </ul>

      <h2 class="text-3xl font-bold pt-12">Agent Intelligence</h2>
      <ul class="list-disc pl-8 space-y-4">
        <li>Memory management for contextual awareness</li>
        <li>Dynamic resource allocation</li>
        <li>Automated workflow optimization</li>
        <li>Continuous learning from outcomes</li>
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
          <title>Run AI - Yanok Platform</title>
          <meta name="description" content="AI Automation and Agent Capabilities" />
        </>
      ),
    },
  };
}
