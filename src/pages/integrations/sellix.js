import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Sellix"
      description="Sellix is a powerful e-commerce solution that lets you create a custom store in just a couple of clicks. Enable 20+ triggers such as invoices paid, products out of stock or subscriptions created."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sellix.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Sellix Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(38, 38, 38, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Sellix is a powerful e-commerce solution that lets you create a custom store in just a couple of clicks. Enable 20+ triggers such as invoices paid, products out of stock or subscriptions created.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Feedback Received</div>
  <div>Triggers when a new feedback is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Cancelled</div>
  <div>Triggers when an order is cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Cancelled Product</div>
  <div>Triggers when order is cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Created</div>
  <div>Triggers when a new order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Created Product</div>
  <div>Triggers when a new order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Disputed</div>
  <div>Triggers when an order is disputed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Disputed Product</div>
  <div>Triggers when a new order is disputed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Paid</div>
  <div>Triggers when order paid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Paid Product</div>
  <div>Triggers when an order is paid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Partial</div>
  <div>Triggers when an order is partial.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Partial Product</div>
  <div>Triggers when order is partial.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Updated</div>
  <div>Triggers when an order is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Updated Product</div>
  <div>Triggers when an order is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product Created</div>
  <div>Triggers when a new product is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product Edited</div>
  <div>Triggers when product is edited.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product Stock</div>
  <div>Triggers when product in stock.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Query Created</div>
  <div>Triggers when a new query is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Query Replied</div>
  <div>Triggers when query is replied.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Created</div>
  <div>Triggers when a new subscription is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Renewed</div>
  <div>Triggers when subscription is renewed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Trial Ended</div>
  <div>Triggers when subscription trial ended.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Trial Started</div>
  <div>Triggers when a subscription trial started.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Upcoming</div>
  <div>Triggers when subscription is upcoming.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Updated</div>
  <div>Triggers when subscription is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Sellix</title>
          <meta name="description" content="Sellix is a powerful e-commerce solution that lets you create a custom store in just a couple of clicks. Enable 20+ triggers such as invoices paid, products out of stock or subscriptions created." />
        </>
      ),
    },
  };
}
