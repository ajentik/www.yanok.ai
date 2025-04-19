import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="VentiPay"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ventipay.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        VentiPay Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(254, 95, 90, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">VentiPay is a payment platform that accepts online and physical payments via debit, prepaid, and credit cards, and handles subscriptions.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice in Draft</div>
  <div>Triggers when an invoice is in draft state.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Open</div>
  <div>Triggers when an invoice is in open state.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Paid</div>
  <div>Triggers when an invoice has been paid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Retrying</div>
  <div>Triggers when an invoice is in retrying state.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Uncollectible</div>
  <div>Triggers when an invoice is in uncollectible state.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Void</div>
  <div>Triggers when an invoice has been voided.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Loan Intent Approved</div>
  <div>Triggers when a loan intent is approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Loan Intent Authorized</div>
  <div>Triggers when a loan intent is authorized.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Loan Intent Canceled</div>
  <div>Triggers when a loan intent is canceled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Loan Intent</div>
  <div>Triggers when a new loan intent is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Loan Intent Rejected</div>
  <div>Triggers when a loan intent is rejected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a new payment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Activated</div>
  <div>Triggers when a subscription is successfully activated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Canceled</div>
  <div>Triggers when a subscription is canceled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscription</div>
  <div>Triggers when a new subscription is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Past Due</div>
  <div>Triggers when a subscription is past its due payment date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Suspended</div>
  <div>Triggers when a subscription is suspended.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Started Trialing</div>
  <div>Triggers when a subscription starts its trialing period.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Unpaid</div>
  <div>Triggers when a subscription is marked as Unpaid.</div>
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
          <title>VentiPay</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
