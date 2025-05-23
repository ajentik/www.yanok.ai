import Layout from '@/components/Layout';

export default function Page() {
  return (
    <Layout 
      title="Yanok Platform"
      description="Yanok Automation Platform"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="pt-10 max-w-container mx-auto text-center">
  <h1 class="font-regular text-5xl md:text-7xl">Yanok Automation Platform</h1>
  <p class="text-2xl pt-10">Create AI workflow automations with drag-and-drop. Trigger your AI automations directly or connect them to your
  applications through our API.</p>
</div>

<div class="site-gutter max-w-container mx-auto py-24 flex flex-row items-center gap-16">
  <div class="text-2xl flex-1 flex flex-col gap-5">
    <p><span class="font-bold">Yanok Platform</span> is a powerhouse in web automation, acting as the essential connector to a multitude of web apps and
    services, seamlessly enabling them to collaborate.</p>
    <p>Create seamless integration with an intuitive no-code drag-and-drop interface.</p>
    <div class="block py-5 flex flex-col md:flex-row gap-5 justify-center">
      <a href="https://app.yanok.ai/" class="btn btn-cta btn-cta-small">Automate with Yanok</a>
      <a href="/book-demo.html" class="btn text-xl md:text-2xl rounded-lg md:px-8 md:py-2">Book a Demo</a>
    </div>
  </div>
  <img class="flex-1 hidden md:block" src="/assets/images/landing/building.webp" />
</div>

<div id="run-ai" class="w-full text-white">
  <div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-20 py-24">
    <h2 class="text-4xl md:text-5xl font-bold">Run AI</h2>
    <p class="text-xl">Empower your business workflows with seamless AI model integration and autonomous agent capabilities.</p>
    <a href="/run-ai.html" class="btn btn-cta">Learn More</a>
  </div>
</div>

<div id="manage-api" class="w-full text-white">
  <div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-20 py-24">
    <h2 class="text-4xl md:text-5xl font-bold">Manage API</h2>
    <p class="text-xl">Comprehensive API lifecycle management with intelligent monitoring and security features.</p>
    <a href="/manage-api.html" class="btn btn-cta">Learn More</a>
  </div>
</div>

<div id="rag" class="w-full text-white">
  <div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-20 py-24">
    <h2 class="text-4xl md:text-5xl font-bold">RAG</h2>
    <p class="text-xl">Enhanced AI responses through intelligent retrieval and context-aware generation.</p>
    <a href="/rag.html" class="btn btn-cta">Learn More</a>
  </div>
</div>

<div id="maintain-security" class="w-full text-white">
  <div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-20 py-24">
    <h2 class="text-4xl md:text-5xl font-bold">Maintain Security</h2>
    <p class="text-xl">Enterprise-grade security features ensuring protection of your AI operations and data.</p>
    <a href="/maintain-security.html" class="btn btn-cta">Learn More</a>
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
          <title>Yanok Platform</title>
          <meta name="description" content="Yanok Automation Platform" />
        </>
      ),
    },
  };
}
