import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Vetrina Live"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/vetrina-live.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Vetrina Live Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(33, 184, 249, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Vetrina Live is an e-commerce platform that allows you to easily create your online store and sell online.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is placed on the shop.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Out of Stock Product</div>
  <div>Triggers when there\'s new out of stock product.</div>
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
  <div class="font-semibold">Create Coupon Code</div>
  <div>Create a discounted code for you customers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>This action allows you to create a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product Variation</div>
  <div>Creates product variation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Order</div>
  <div>Updates an order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product</div>
  <div>Updates product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product Variation</div>
  <div>Updates product variation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Find Customer by name or email.</div>
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
          <title>Vetrina Live</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
