import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Cloudprinter.com"
      description={`This application is for sending any print job, data or content to Cloudprinter and printing it locally in more than 104 countries. Offering transparent pricing, real-time status updates, and 500+ product templates.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/cloudprinter.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Cloudprinter.com Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(37, 125, 226, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">This application is for sending any print job, data or content to Cloudprinter and printing it locally in more than 104 countries. Offering transparent pricing, real-time status updates, and 500+ product templates.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Signals</div>
  <div>Triggers when you receive notifications of the print and ship status of your print jobs.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Order</div>
  <div>Request cancellation of a specific order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Create a new order for one item that will be sent to the Print Cloud. You are required to set up the product, options, shipping, and address details.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Request Order Quote</div>
  <div>Request a quote for a specific item. The Quote Hash will be stored and can be used to Create Order in the Action step.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Order</div>
  <div>Finds the status of one of your orders based on the order reference.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Product</div>
  <div>Finds the specifications of a product based on the product reference.</div>
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
          <title>Cloudprinter.com</title>
          <meta name="description" content={`This application is for sending any print job, data or content to Cloudprinter and printing it locally in more than 104 countries. Offering transparent pricing, real-time status updates, and 500+ product templates.`} />
        </>
      ),
    },
  };
}
