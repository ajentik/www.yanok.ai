import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Turis"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/turis.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Turis Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 153, 147, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Turis is a wholesale B2B eCommerce platform focused on giving your retailers the best ordering experience you can imagine.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Buyer</div>
  <div>Triggers when a new buyer is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is added (with line items support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a new product is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Retailer</div>
  <div>Triggers when a new retailer is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Buyer</div>
  <div>Triggers when a buyer is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Order</div>
  <div>Triggers when an order is updated (with line items support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Product</div>
  <div>Triggers when a product is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Retailer</div>
  <div>Triggers when a retailer is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Stock Levels</div>
  <div>Triggers when stock levels are updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Product Images</div>
  <div>Adds images to a product image list. Extends an existing list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a new product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Order</div>
  <div>Updates an order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product</div>
  <div>Updates an existing product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product Images</div>
  <div>Updates a product image list. Overrides images with a new list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Stock Levels</div>
  <div>Updates a product stock levels.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order</div>
  <div>Searches for order by number, buyer name or retailer name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product</div>
  <div>Searches for product by name or SKU.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Stock Levels of Specific Product</div>
  <div>Searches for stock levels by product name or SKU.</div>
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
          <title>Turis</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
