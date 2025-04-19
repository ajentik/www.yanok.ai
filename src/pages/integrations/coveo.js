import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Coveo"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/coveo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Coveo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(245, 128, 32, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Coveo is a complete AI-powered search & relevance service for unified & personalized search interactions.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete Content</div>
  <div>Deletes an item from your Coveo Cloud orgnization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add or Update Content</div>
  <div>Adds or update an item in a source of your Coveo Cloud organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Document</div>
  <div>Searches for items in your Coveo Cloud organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Help Document</div>
  <div>Searches for Coveo documentation from our help portal.</div>
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
          <title>Coveo</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
