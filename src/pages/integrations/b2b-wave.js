import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="B2B Wave"
      description="B2B Wave is the easiest cloud B2B eCommerce solution for distributors, wholesalers, and manufacturers"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/b2b-wave.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        B2B Wave Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(44, 191, 211, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">B2B Wave is the easiest cloud B2B eCommerce solution for distributors, wholesalers, and manufacturers</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Abandoned Order</div>
  <div>Triggers when a new abandoned order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Status Update</div>
  <div>Triggers when an order status is changed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a new product is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a Product</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product Customer Price</div>
  <div>Creates a Product Customer Price or updates existing</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Updates a Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Order Integration Ref</div>
  <div>Updates the Order Integration Ref field</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Order Shipping Tracking</div>
  <div>Update the Order Shipping Tracking Number</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Order Status</div>
  <div>Updates the Order Status</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product</div>
  <div>Updates a Product</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product Quantity</div>
  <div>Finds a product by ID or Code and updates its Quantity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Finds a Customer by various fields</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order</div>
  <div>Finds an Order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product</div>
  <div>Finds a Product by ID or Code</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer</div>
  <div>Finds a Customer by various fields</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Product</div>
  <div>Finds a Product by ID or Code</div>
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
          <title>B2B Wave</title>
          <meta name="description" content="B2B Wave is the easiest cloud B2B eCommerce solution for distributors, wholesalers, and manufacturers" />
        </>
      ),
    },
  };
}
