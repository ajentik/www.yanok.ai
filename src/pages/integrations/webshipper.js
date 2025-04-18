import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Webshipper"
      description="Webshipper is a shipping platform for all your shipping needs. Webshipper can help you automate and optimize your shipping flow."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/webshipper.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Webshipper Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(50, 137, 168, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Webshipper is a shipping platform for all your shipping needs. Webshipper can help you automate and optimize your shipping flow.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Order</div>
  <div>Triggers when an order is created, updated or deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Report</div>
  <div>Triggers when a report is created, updated or deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Shipment</div>
  <div>Triggers when a shipment is created, updated or deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tracking Event</div>
  <div>Triggers when a tracking event is created, updated or deleted.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Creates or updates an order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Shipment</div>
  <div>Creates a new shipment.</div>
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
          <title>Webshipper</title>
          <meta name="description" content="Webshipper is a shipping platform for all your shipping needs. Webshipper can help you automate and optimize your shipping flow." />
        </>
      ),
    },
  };
}
