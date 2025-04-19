import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Apify"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/apify.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Apify Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(63, 137, 183, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Apify is a serverless computing platform built for web automation. Turn any website into an API in a few minutes.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Finished Actor Run</div>
  <div>Triggers whenever a selected actor is run and finished.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finished Task Run</div>
  <div>Triggers whenever a selected task is run and finished.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Run Actor</div>
  <div>Runs a selected actor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Run Task</div>
  <div>Runs a selected actor task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Key-Value Store Record</div>
  <div>Creates a new or updates an existing record in a key-value store.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Dataset Items</div>
  <div>Fetches items from a dataset.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Key-Value Store Record</div>
  <div>Gets a record from a key-value store.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Last Actor Run</div>
  <div>Finds the most recent actor run with a specific status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Last Task Run</div>
  <div>Finds the most recent task run with a specific status.</div>
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
          <title>Apify</title>
        </>
      ),
    },
  };
}
