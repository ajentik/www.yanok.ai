import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="RZQ"
      description="RZQ is an e-commerce platform that allows merchants to establish, operate, and manage their online stores with no technical hassle. It also allows them to enable or disable the connection with any logistic company and/or payment gateway with a click of a button."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/rzq.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        RZQ Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(144, 79, 247, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">RZQ is an e-commerce platform that allows merchants to establish, operate, and manage their online stores with no technical hassle. It also allows them to enable or disable the connection with any logistic company and/or payment gateway with a click of a button.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Customer Registered</div>
  <div>Triggers when a new customer is registered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get All Orders</div>
  <div>Triggers when getting all orders.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Placed</div>
  <div>Triggers when a new order is placed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Updated</div>
  <div>Triggers when an order is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product Created</div>
  <div>Triggers when a new product is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product Updated</div>
  <div>Triggers when a product is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Product</div>
  <div>Deletes a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Order Status</div>
  <div>Updates status of an order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product</div>
  <div>Updates a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product Quantity</div>
  <div>Updates quantity of a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Product Image</div>
  <div>Uploads an image for a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Brand</div>
  <div>Finds a brand by id or slug or name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Category</div>
  <div>Finds a category by id or slug or name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order</div>
  <div>Finds an order by id or customer email or customer phone.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product</div>
  <div>Finds a product by id or slug or sku or name.</div>
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
          <title>RZQ</title>
          <meta name="description" content="RZQ is an e-commerce platform that allows merchants to establish, operate, and manage their online stores with no technical hassle. It also allows them to enable or disable the connection with any logistic company and/or payment gateway with a click of a button." />
        </>
      ),
    },
  };
}
