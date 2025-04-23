import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Shopify"
      description={`Shopify is a simple way to create an online store to list products, collect credit card payments, and ship your goods.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/shopify.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Shopify Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(150, 191, 72, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Shopify is a simple way to create an online store to list products, collect credit card payments, and ship your goods.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Blog Entry</div>
  <div>Triggers when a new entry is added to a blog in your Shopify store.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is added to your Shopify account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Abandoned Cart</div>
  <div>Triggers whenever a cart is "abandoned" (only open carts) (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Cancelled Order</div>
  <div>Triggers whenever a order is "cancelled" (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Paid Order</div>
  <div>Triggers whenever a new purchase is "paid". You can choose a different order status like pending or refunded (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new purchase is made (only open orders) (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order (Any Status)</div>
  <div>Triggers when a new purchase is made (of any order status).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a new product is added to your Shopify store.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Customer</div>
  <div>Triggers when a customer\'s information is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Order</div>
  <div>Triggers when an order is updated (with line item support).</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Blog Entry</div>
  <div>Creates a new blog post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a new customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Inventory Quantity</div>
  <div>Updates the quantity of an existing product variant.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Creates a new order (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a new product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product Variant</div>
  <div>Creates a new product variant.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Updates an existing customer. Replaces only data that is set.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product</div>
  <div>Updates an existing product. Replaces only data that is set.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product Variant</div>
  <div>Updates an existing product variant. Replaces only data that is set.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Finds a customer by name or email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product by Title</div>
  <div>Finds a product by a title search.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product Variant by Title</div>
  <div>Finds a product variant by a title search.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer</div>
  <div>Finds or creates a specific customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Product</div>
  <div>Finds or creates a specific product by title v2.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Product Variant</div>
  <div>Finds or creates a specific product variant by title.</div>
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
          <title>Shopify</title>
          <meta name="description" content={`Shopify is a simple way to create an online store to list products, collect credit card payments, and ship your goods.`} />
        </>
      ),
    },
  };
}
