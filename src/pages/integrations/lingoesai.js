import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Lingoes.ai"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/lingoesai.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Lingoes.ai Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(31, 118, 237, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Lingoes.ai is a multilingual text analytics service that allows you to extract valuable data from raw texts like emails, documents and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Classify Text With Your Custom NLP Models</div>
  <div>Classify text with your custom NLP models trained on Lingoes.ai NLP service.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Classify Text With Lingoes.ai Ready Model</div>
  <div>Ready multilingual and multi-domain NLP model for classifying your texts with class labels defined by you. Can be used for multiple different classification use cases like sentiment analysis, category identification, and intent detection. Just specify possible class labels in descriptive format as in human\'s natural language (e.g. "positive", "negative", "neutral" for sentiment analysis), and the model gives you the most probable label.</div>
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
          <title>Lingoes.ai</title>
        </>
      ),
    },
  };
}
