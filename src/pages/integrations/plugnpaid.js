import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="plugnpaid"
      description="plugnpaid is an online eCommerce platforms for SMEs and solopreneurs."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/plugnpaid.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        plugnpaid Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(70, 106, 252, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">plugnpaid is an online eCommerce platforms for SMEs and solopreneurs.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Abandoned Cart</div>
  <div>Triggers when a cart is abandoned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Marked as Paid</div>
  <div>Triggers when an invoice is marked as paid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Marked as Shipped</div>
  <div>Triggers when a new order is marked as shipped.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Tracking Set</div>
  <div>Triggers when an Order Tracking is set.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New One-Time Sale</div>
  <div>Triggers when a new sale is made.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Superbolts Client Subscription</div>
  <div>Triggers when a new Superbolts client signs up and subscribes for one of your Superbolts Billing Plans.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Declined</div>
  <div>Triggers when a new order is declined.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancelled Subscription</div>
  <div>Triggers when a subscription is canceled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Failed Recurring Charge</div>
  <div>Triggers when chare has failed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Recurring Subscription Sale</div>
  <div>Triggers when a new recurring subscription sale is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Refunded</div>
  <div>Triggers when a new order is refunded.</div>
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
          <title>plugnpaid</title>
          <meta name="description" content="plugnpaid is an online eCommerce platforms for SMEs and solopreneurs." />
        </>
      ),
    },
  };
}
