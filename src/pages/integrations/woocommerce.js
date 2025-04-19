import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="WooCommerce"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/woocommerce.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        WooCommerce Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(155, 92, 143, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">WooCommerce is the eCommerce platform for WordPress. This connection requires a paid extension.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Booking</div>
  <div>Triggers when any Booking is created, updated, deleted, etc. WooCommerce Bookings must be installed and enabled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Coupon</div>
  <div>Triggers when any Coupon is created, updated, deleted, etc. Coupon functionality must be enabled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer</div>
  <div>Triggers when any Customer is created, updated, deleted, etc in your WooCommerce Store.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order</div>
  <div>Triggers when any Order is created, updated, deleted, etc in your WooCommerce Store.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Line Item in an Order</div>
  <div>Triggers when any Order event occurs. Creates a separate task for each line item in an Order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product</div>
  <div>Triggers when any Product is created, updated, deleted, etc in your WooCommerce Store.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription</div>
  <div>Triggers when any Subscription is created, updated, deleted, etc. WooCommerce Subscriptions must be installed and enabled.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Coupon</div>
  <div>Creates a new coupon.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Coupon</div>
  <div>Updates an existing coupon.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a new customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Updates an existing customer.</div>
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
  <div class="font-semibold">Create Product</div>
  <div>Creates a new product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product</div>
  <div>Updates an existing product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Subscription</div>
  <div>Creates a new subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Subscription</div>
  <div>Updates an existing subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Coupon</div>
  <div>Finds a coupon by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Finds a customer by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order</div>
  <div>Finds a order by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product</div>
  <div>Finds a product by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Subscription</div>
  <div>Finds a subscription by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Coupon</div>
  <div>Finds a coupon by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer</div>
  <div>Finds a customer by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Order</div>
  <div>Finds a order by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Product</div>
  <div>Finds a product by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Subscription</div>
  <div>Finds a subscription by searching.</div>
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
          <title>WooCommerce</title>
        </>
      ),
    },
  };
}
