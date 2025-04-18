import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AmeriCommerce"
      description="AmeriCommerce is a full-featured eCommerce platform."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/americommerce.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AmeriCommerce Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(253, 122, 44, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AmeriCommerce is a full-featured eCommerce platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a customer is created in your AmeriCommerce store.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order (of any status) is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a product is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Quote</div>
  <div>Triggers when a new quote is added to your AmeriCommerce Store.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Valid Order</div>
  <div>Triggers when a new valid order (meaning not declined or cancelled) is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Status Changed</div>
  <div>Triggers when an order status changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Updated</div>
  <div>Triggers when an order is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Customer</div>
  <div>Triggers when a customer is updated in your AmeriCommerce store.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Email Updated</div>
  <div>Triggers when a customer\'s email address is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Product</div>
  <div>Triggers when a product is updated on your AmeriCommerce store.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Change Order Status</div>
  <div>Changes an order\'s status</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a new customer in your AmeriCommerce Store</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Order</div>
  <div>Creates or Updates an Order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Order Payment</div>
  <div>Creates or updates an order payment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Order Shipment</div>
  <div>Creates or updates an order shipment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a new product in your AmeriCommerce Store</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Updates a customer in your AmeriCommerce Store</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Inventory</div>
  <div>Updates inventory for a product or variant inventory item in your AmeriCommerce catalog.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product</div>
  <div>Use this to make changes to a product in AmeriCommerce</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Finds a customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order</div>
  <div>Find an Order from your AmeriCommerce store</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product</div>
  <div>Find a product from your AmeriCommerce store</div>
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
          <title>AmeriCommerce</title>
          <meta name="description" content="AmeriCommerce is a full-featured eCommerce platform." />
        </>
      ),
    },
  };
}
