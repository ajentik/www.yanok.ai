import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Webflow"
      description="Design and build professional websites with a CMS from scratch online with Webflow."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/webflow.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Webflow Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(114, 87, 180, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Design and build professional websites with a CMS from scratch online with Webflow.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Form Submission</div>
  <div>Triggers when a new form submission occurs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is placed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Order</div>
  <div>Triggers when an order is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Item</div>
  <div>Adds a new item to a given collection.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Live Item</div>
  <div>Adds a new item to a given collection on your published site.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fulfill Order</div>
  <div>Fulfills an order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Refund Order</div>
  <div>Refund an order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unfulfill Order</div>
  <div>Unfulfills an order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Item</div>
  <div>Updates an item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Live Item</div>
  <div>Updates a live item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Order</div>
  <div>Updates an order.</div>
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
          <title>Webflow</title>
          <meta name="description" content="Design and build professional websites with a CMS from scratch online with Webflow." />
        </>
      ),
    },
  };
}
