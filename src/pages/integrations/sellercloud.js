import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SellerCloud"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sellercloud.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SellerCloud Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(34, 118, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SellerCloud is an ecommerce solution helping online retailers up efficiency & grow business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Inventory</div>
  <div>Triggers when an inventory is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase Order</div>
  <div>Triggers on a new purchase order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Queued Job</div>
  <div>Triggers when a new queued job is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New RMA</div>
  <div>Triggers when a RMA is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Order</div>
  <div>Triggers when an order is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Purchase Order</div>
  <div>Triggers when a purchase order is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated RMA</div>
  <div>Triggers when a RMA is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Creates a sales order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Queued Job</div>
  <div>Creates a Queued Job using a Scheduled Task ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Inventory</div>
  <div>Updates an inventory.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Order Shipping Status</div>
  <div>Updates the shipping status of an order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Adjust Inventory Quantity</div>
  <div>Adjusts an inventory quantity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate a Way to Pay Link</div>
  <div>Generates a Way To Pay link using and Order ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Customer</div>
  <div>Finds a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Inventory</div>
  <div>Finds an inventory.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Inventory Quantity</div>
  <div>Gets the quantity of an inventory.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Order</div>
  <div>Finds an order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Purchase Order</div>
  <div>Finds a purchase order using a global keyword search.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Product</div>
  <div>Finds a product using a global keyword search.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Queued Job</div>
  <div>Finds a queued job by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find customer</div>
  <div>Find a customer by customer ID. Optionally, create one if none are found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order</div>
  <div>Find a order by order ID. Optionally, create one if none are found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product</div>
  <div>Find a product by product ID. Optionally, create one if none are found.</div>
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
          <title>SellerCloud</title>
        </>
      ),
    },
  };
}
