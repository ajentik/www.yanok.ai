import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="OpenAI (ChatGPT)"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/openai.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        OpenAI (ChatGPT) Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(1, 1, 1, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">From the makers of ChatGPT, the OpenAI integration for GPT-3 or DALL-E. Build AI powered workflows with OpenAI’s powerful models.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Check Moderation</div>
  <div>Use the moderation action to check for hate, hate/threatening, self-harm, sexual, sexual/minors, violence, or violence/graphic content in text.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate Image</div>
  <div>Generate an image with DALL-E given a prompt.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Prompt</div>
  <div>Sends a prompt to OpenAI and generate a completion.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Embeddings</div>
  <div>This best matches a query string (like "big animal") to a list of document strings (like "mouse", "cat", "buffalo", and "blue whale").</div>
</div>

    </div>
  </div>
</div>

<div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-5 py-14">
  <p><span class="font-bold">Yanok Platform</span> is a powerhouse in web automation, acting as the essential
    connector to a multitude of web apps and
    services, seamlessly enabling them to collaborate.</p>
  <p>Create seamless integration with an intuitive no-code drag-and-drop interface.</p>
  <div class="block pt-5 flex flex-col md:flex-row gap-5 justify-center items-center">
    <a href="https://app.yanok.ai/quickstarts/business/new" class="btn btn-cta btn-xl">Automate with Yanok</a>
    <a href="/book-demo.html" class="btn ">Book a Demo</a>
  </div>
</div>` }} />
    </IntegrationLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>OpenAI (ChatGPT)</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
