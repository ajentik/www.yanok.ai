import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pomelo Pay"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pomelo-pay.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pomelo Pay Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(93, 201, 142, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Pomelo Pay is a hardware-free mobile payment service provider offering a secure, simple and hassle-free way to take payments in an instant.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Shop</div>
  <div>Triggers when a new shop is created for your company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Custom Fee</div>
  <div>Triggers when a new custom fee is created for your shop</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order Field</div>
  <div>Triggers when a new order field is created for your shop</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a new product is created for your shop</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Category</div>
  <div>Triggers when a new category is created for your shop</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tax</div>
  <div>Triggers when a new tax configuration is created for your shop</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Transaction</div>
  <div>Triggers when a new transaction is created for your account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Status Change</div>
  <div>Triggers when a transaction is created or updated to any state such as INITIATED, QR_CODE_GENERATED, CONFIRMED, CANCELLED, FAILED, REFUND_REQUESTED or CANCELLED.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Category</div>
  <div>Creates a Category for your Shop</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order With Products</div>
  <div>Creates an Order by specifying a list of products and their quantity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a Product</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Multiple Products</div>
  <div>Create up to 50 products simultaneously by using this bulk import action</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tax</div>
  <div>Creates a Tax for a shop that you can use to apply to products</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Transaction</div>
  <div>Create a new transaction which you can share to your customer or redirect to for payment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark a Product Out of Stock</div>
  <div>Marks a product as out of stock so it can no longer be sold</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Product Image</div>
  <div>Uploads an image to an existing product</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Payment Link to Customer Email</div>
  <div>Sends a Payment Link to Customer\'s email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Payment Link SMS to Customer Phone Number</div>
  <div>Sends A Payment Link To Your Customer Using SMS</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Apply Tax to All Products of a Shop</div>
  <div>Applies one or many specified taxes to all products in a specified shop. This action replaces all applied taxes to all products in a shop with the specified taxes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product</div>
  <div>Updates a Product</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Product by SKU Reference</div>
  <div>Finds and updates a product by SKU or reference.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Category</div>
  <div>Search for a given category by name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Tax</div>
  <div>Find a Tax to apply on products</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Shops</div>
  <div>Search the list of Shops for your merchant account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Products</div>
  <div>Search for Products in a Shop</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Product</div>
  <div>Find a product to update or create it when it cannot be found</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Category</div>
  <div>Search for a given category by name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Or Create Tax</div>
  <div>Find a Tax to apply on products</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Product</div>
  <div>Find a product to update or create it when it cannot be found</div>
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
          <title>Pomelo Pay</title>
        </>
      ),
    },
  };
}
