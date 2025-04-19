import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ChargeDesk"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/chargedesk.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ChargeDesk Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 204, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ChargeDesk helps you manage your customer payments inside of your helpdesk. This integration helps you automate tasks such as exporting charge or customer data, automatically requesting payments and cancelling subscriptions.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Agent Log Created</div>
  <div>Triggers when a new Agent Log is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Charge Failed</div>
  <div>Triggers when a charge fails.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Charge Created</div>
  <div>Triggers when a new charge is created or imported.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Request Paid</div>
  <div>Triggers when a payment request is successfully paid by a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Charge Updated</div>
  <div>Triggers when a charge is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer First Paid</div>
  <div>Triggers when a customer makes their first payment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Created</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Updated</div>
  <div>Triggers when a customer is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Canceled</div>
  <div>Triggers when a subscription is canceled or unpaid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Created</div>
  <div>Triggers when a new subscription is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Updated</div>
  <div>Triggers when a subscription is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Subscription</div>
  <div>Cancels and active subscription</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Request Payment</div>
  <div>Requests a payment from a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Charge</div>
  <div>Find all matching charges.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Find an existing customer.</div>
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
          <title>ChargeDesk</title>
        </>
      ),
    },
  };
}
