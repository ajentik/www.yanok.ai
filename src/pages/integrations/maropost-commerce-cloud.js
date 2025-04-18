import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Maropost Commerce Cloud"
      description="Build an online store, process sales at your bricks-and-mortar store, and showcase your products through eBay and social media, all from one platform."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/maropost-commerce-cloud.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Maropost Commerce Cloud Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Build an online store, process sales at your bricks-and-mortar store, and showcase your products through eBay and social media, all from one platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Cart</div>
  <div>Triggers when new abandoned carts are made.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Completed Order</div>
  <div>Triggers on new completed orders (dispatched or cancelled).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Content</div>
  <div>Triggers when new content pages are made.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is made.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Item</div>
  <div>Triggers when new items are created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers on new orders.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Paid Order</div>
  <div>Triggers on new paid orders.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers on new payments.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New RMA</div>
  <div>Triggers on new RMAs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Customer</div>
  <div>Triggers when a customer is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Updated Order</div>
  <div>Triggers on new updated orders.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Item</div>
  <div>Triggers when an item is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Content</div>
  <div>Creates a new content page.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a new customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Item</div>
  <div>Creates a new item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Creates a new order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Order</div>
  <div>Updates an existing order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payment</div>
  <div>Creates a new payment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create RMA</div>
  <div>Creates a new RMA.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Updates an existing customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Item</div>
  <div>Updates an existing item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Content</div>
  <div>Finds content by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Finds a customer by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Multiple Items</div>
  <div>Finds multiple items and returns them as line items. Useful for comparing multiple items.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Item</div>
  <div>Finds a item by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order</div>
  <div>Finds an existing order by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Payment</div>
  <div>Finds an existing payment by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find RMA</div>
  <div>Finds an existing RMA by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Content</div>
  <div>Finds content by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer</div>
  <div>Finds a customer by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Item</div>
  <div>Finds a item by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Order</div>
  <div>Finds an existing order by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Payment</div>
  <div>Finds an existing payment by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create RMA</div>
  <div>Finds an existing RMA by searching.</div>
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
          <title>Maropost Commerce Cloud</title>
          <meta name="description" content="Build an online store, process sales at your bricks-and-mortar store, and showcase your products through eBay and social media, all from one platform." />
        </>
      ),
    },
  };
}
