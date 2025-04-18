import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Phedone"
      description="Phedone is an natural language processing tool to automate and improve your customer ticketing and knowledge base flow"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/phedone.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Phedone Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(251, 69, 63, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Phedone is an natural language processing tool to automate and improve your customer ticketing and knowledge base flow</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Analyse a Textual Content</div>
  <div>Analyse a textual content and get insights without storing it in your Phedone\'s account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Detect Contact Reason</div>
  <div>Detect contact reason of a message, from list of reasons that you define</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Detect Used Languages</div>
  <div>Detect main language and detailed portions of text by language</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Extract Products</div>
  <div>Extract products from a textual content</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Extract TouchPoints</div>
  <div>Extract touchpoints from a textual content</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Answer Question</div>
  <div>Extract answer to a question from a textual content</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Estimate the Star Rating</div>
  <div>Estimates the rating express in a textual review from 1 (negative) to 5 (positive)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Summarize French</div>
  <div>Summarize a french textual content</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Translate Textual Content</div>
  <div>Translate text from a defined or automatically detected source language to another language</div>
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
          <title>Phedone</title>
          <meta name="description" content="Phedone is an natural language processing tool to automate and improve your customer ticketing and knowledge base flow" />
        </>
      ),
    },
  };
}
