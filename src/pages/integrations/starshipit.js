import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Starshipit"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/starshipit.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Starshipit Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(70, 79, 93, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Starshipit is an integrated shipping and tracking software allowing you to generate shipments in bulk, send out customised notifications to your customers, and track shipments.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is created/imported.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Shipped Order</div>
  <div>Triggers when an order is shipped or manifested.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Writeback Error</div>
  <div>Triggers when an order printed/shipped in the last three days has a writeback error.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Order</div>
  <div>Retrieves an orders details.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Tracking</div>
  <div>Retrieve tracking details using a tracking number or an order number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Manifest</div>
  <div>Manifest using order ID(s), order number(s) or tracking number(s)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Creates an outbound order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Rates</div>
  <div>Get shipping rates for the given addresses and packages.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Print Label</div>
  <div>Print a shipping label for a given order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Print Packing Slip</div>
  <div>Create packing slip for an order using its Order ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Return Order</div>
  <div>Creates a return order. Note that returns are only supported with some couriers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Order</div>
  <div>Updates an Order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Orders</div>
  <div>Search printed order by order number, tracking number or name of the order</div>
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
          <title>Starshipit</title>
        </>
      ),
    },
  };
}
