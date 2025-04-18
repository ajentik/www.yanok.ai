import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="BugBug"
      description="Save time with easy-to-use, automated browser testing. Ensure that your website or web app works and looks like it should. No coding required."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/bugbug.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        BugBug Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(70, 30, 86, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Save time with easy-to-use, automated browser testing. Ensure that your website or web app works and looks like it should. No coding required.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Any Schedule Run Failed</div>
  <div>Triggers when any scheduled cloud run fails.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Any Schedule Run Passed</div>
  <div>Triggers when any scheduled cloud run passes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Any Schedule Run Started</div>
  <div>Triggers when any schedule starts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Any Cloud Suite Run Failed</div>
  <div>Triggers when any suite fails when running in BugBug cloud.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Any Cloud Suite Run Passed</div>
  <div>Triggers when any suite passes when running in BugBug cloud.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Any Cloud Suite Run Started</div>
  <div>Triggers when any suite starts running in BugBug cloud.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Any Test Failed in the Cloud</div>
  <div>Triggers when any test failed when running in the BugBug cloud.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Any Test Passed in the Cloud</div>
  <div>Triggers when any test run passed when running in the BugBug cloud.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Any Test Started in the Cloud</div>
  <div>Triggers when any test starts running in the BugBug cloud.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>BugBug</title>
          <meta name="description" content="Save time with easy-to-use, automated browser testing. Ensure that your website or web app works and looks like it should. No coding required." />
        </>
      ),
    },
  };
}
