import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Mollie"
      description={`Mollie is a licensed business specializing in processing online payments on behalf of merchants.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mollie-1.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Mollie Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Mollie is a licensed business specializing in processing online payments on behalf of merchants.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer has been created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order has been created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a new payment has been created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Settlement</div>
  <div>Triggers when a new settlement has been created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>This creates a new order in Mollie.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payment</div>
  <div>This creates a new payment in Mollie.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payment Link</div>
  <div>This creates a new payment link in Mollie.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Order</div>
  <div>This searches for an order in Mollie.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Payment</div>
  <div>This search for payment by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Shipments</div>
  <div>This searches for shipments for an order in Mollie.</div>
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
          <title>Mollie</title>
          <meta name="description" content={`Mollie is a licensed business specializing in processing online payments on behalf of merchants.`} />
        </>
      ),
    },
  };
}
