import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Shippo"
      description="Shippo provides a multi-carrier API and dashboard to help merchants and platforms get real-time rates, print labels, automate international paperwork, track packages and facilitate returns. Shippo provides the platform to help businesses succeed through shipping."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/shippo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Shippo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(147, 192, 67, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Shippo provides a multi-carrier API and dashboard to help merchants and platforms get real-time rates, print labels, automate international paperwork, track packages and facilitate returns. Shippo provides the platform to help businesses succeed through shipping.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Shipping Label</div>
  <div>Triggers when a new shipping label is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is created</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Creates an order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Shipping Label</div>
  <div>Search for a shipping label by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Order</div>
  <div>Search for an order by ID.</div>
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
          <title>Shippo</title>
          <meta name="description" content="Shippo provides a multi-carrier API and dashboard to help merchants and platforms get real-time rates, print labels, automate international paperwork, track packages and facilitate returns. Shippo provides the platform to help businesses succeed through shipping." />
        </>
      ),
    },
  };
}
