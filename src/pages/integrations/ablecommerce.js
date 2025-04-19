import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AbleCommerce"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ablecommerce.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AbleCommerce Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 73, 144, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AbleCommerce is a complete and secure eCommerce platform for your business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is created. Filter options available to select the type of order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Abandoned Basket</div>
  <div>Triggers when a customer does not complete the checkout process.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order Note</div>
  <div>Triggers when a customer adds a note to their order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a new product is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new account is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Order Note</div>
  <div>Creates an order note for specified order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a registered user account with contact information and log in to the store.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product Advanced</div>
  <div>Creates a product with the minimum fields needed for a complete listing and purchase. This action includes additional fields for shipping, inventory, and catalog display features.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product Simple</div>
  <div>Creates a product with the minimum fields needed for a complete listing and purchase.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Prices and Inventory</div>
  <div>Updates prices and inventory stock levels for products and/or variants.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product for Google</div>
  <div>Update a product\'s data specifications used in Google feeds, advertising and shopping campaigns, and search engine optimization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product</div>
  <div>Search for a product by its name or SKU.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User by Email</div>
  <div>Search for a user by email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Product</div>
  <div>Search for a product by its name or SKU.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create User</div>
  <div>Search for a user by email address.</div>
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
          <title>AbleCommerce</title>
        </>
      ),
    },
  };
}
