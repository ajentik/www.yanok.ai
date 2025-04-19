import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Volusion"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/volusion.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Volusion Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(101, 75, 251, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Volusion is an all-in-one leading ecommerce solution that lets you easily create, manage, and expand your online store.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Customer Email Update</div>
  <div>Triggers when an email is updated.</div>
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
  <div class="font-semibold">New Product</div>
  <div>Triggers when a new product is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Cancelled</div>
  <div>Triggers when an order is cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Paid</div>
  <div>Triggers when an order is paid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Refund</div>
  <div>Triggers when an order is refunded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Shipped</div>
  <div>Triggers when an order is shipped.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product Out of Stock</div>
  <div>Triggers when a product is out of stock.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a new customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a new product.</div>
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
          <title>Volusion</title>
        </>
      ),
    },
  };
}
