import Layout from '@/components/Layout';

export default function Page() {
  return (
    <Layout 
      title="RAG - Yanok Platform"
      description="Retrieval-Augmented Generation Features"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="pt-10 max-w-container mx-auto text-center">
  <h1 class="font-regular text-5xl md:text-7xl">RAG</h1>
  <p class="text-2xl pt-10">Enhancing AI with Intelligent Retrieval and Contextual Generation</p>
</div>

<div class="w-full text-white">
  <div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-20 py-24">
    <div class="text-xl space-y-8">
      <h2 class="text-3xl font-bold">Retrieval-Augmented Generation</h2>
      <ul class="list-disc pl-8 space-y-4">
        <li>Integrates external knowledge bases for accurate information retrieval</li>
        <li>Enhances language models with real-time data access</li>
        <li>Supports context-aware content generation</li>
        <li>Improves response relevance and factual accuracy</li>
      </ul>

      <h2 class="text-3xl font-bold pt-12">Advanced Retrieval Techniques</h2>
      <ul class="list-disc pl-8 space-y-4">
        <li>Semantic search using vector embeddings</li>
        <li>Contextual query expansion for enhanced matching</li>
        <li>Multi-source data aggregation and synthesis</li>
        <li>Efficient indexing and querying mechanisms</li>
      </ul>

      <h2 class="text-3xl font-bold pt-12">Contextual Generation</h2>
      <ul class="list-disc pl-8 space-y-4">
        <li>Generates tailored responses based on retrieved data</li>
        <li>Maintains coherence and context continuity in conversations</li>
        <li>Adapts content generation to user intents and preferences</li>
        <li>Ensures compliance with organizational knowledge standards</li>
      </ul>

      <h2 class="text-3xl font-bold pt-12">Integration with Autonomous Agents</h2>
      <ul class="list-disc pl-8 space-y-4">
        <li>Empowers agents with access to relevant information in real-time</li>
        <li>Enhances decision-making capabilities through informed data</li>
        <li>Facilitates dynamic interaction flows based on generated content</li>
        <li>Supports scalable deployment across various business functions</li>
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
          <title>RAG - Yanok Platform</title>
          <meta name="description" content="Retrieval-Augmented Generation Features" />
        </>
      ),
    },
  };
}
