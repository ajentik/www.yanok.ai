import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Order Desk"
      description="Order Desk's order management software allows you to customize your order management workflow."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/order-desk.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Order Desk Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Order Desk\'s order management software allows you to customize your order management workflow.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Order Folder Changed</div>
  <div>Triggers when an order\'s folder is changed in Order Desk.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order Added</div>
  <div>Triggers when a new order is added to Order Desk.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create New Order</div>
  <div>Create a new order in Order Desk.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Order Note</div>
  <div>Adds a note to the order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Shipment</div>
  <div>Add a shipment to an order at Order Desk</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Folder</div>
  <div>Change the order\'s folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Tag</div>
  <div>Change the tag on an order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Order Data</div>
  <div>Set the checkout data or metadata on an order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Order</div>
  <div>Get details for a specific order from Order Desk</div>
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
          <title>Order Desk</title>
          <meta name="description" content="Order Desk's order management software allows you to customize your order management workflow." />
        </>
      ),
    },
  };
}
