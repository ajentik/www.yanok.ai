import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SubscriptionFlow"
      description="SubscriptionFlow can help recurring businesses turn their billing into a competitive advantage. Our all-inclusive subscription features can boost the sales, marketing, and services of your business to its potential."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/subscriptionflow.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SubscriptionFlow Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(253, 123, 3, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SubscriptionFlow can help recurring businesses turn their billing into a competitive advantage. Our all-inclusive subscription features can boost the sales, marketing, and services of your business to its potential.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Module Record</div>
  <div>Triggers when there\'s a new module record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Module Record</div>
  <div>Triggers when there\'s a module record updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Module Record</div>
  <div>This Action will create record against selected module</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Module Record</div>
  <div>This Action will find record against selected module</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Module Record</div>
  <div>Updates a Module Record</div>
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
          <title>SubscriptionFlow</title>
          <meta name="description" content="SubscriptionFlow can help recurring businesses turn their billing into a competitive advantage. Our all-inclusive subscription features can boost the sales, marketing, and services of your business to its potential." />
        </>
      ),
    },
  };
}
