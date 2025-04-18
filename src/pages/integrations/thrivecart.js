import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ThriveCart"
      description="ThriveCart is the no. 1 cart software that grows your income from existing traffic."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/thrivecart.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ThriveCart Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(33, 195, 197, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ThriveCart is the no. 1 cart software that grows your income from existing traffic.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Affiliate Approved</div>
  <div>Triggers when an affiliate is approved to promote a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Affiliate Commission Earned</div>
  <div>Triggers when an affiliate earns commission.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Affiliate Commission Paid</div>
  <div>Triggers when an affiliate commission is paid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Affiliate Commission Clawback</div>
  <div>Triggers when an affiliate commission is clawed back.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Affiliate Rejected</div>
  <div>Triggers when an affiliate is rejected from promoting a product, or when their access is revoked.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cart Abandoned</div>
  <div>Triggers when a customer enters their email address into the checkout page, but leaves without making a purchase.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Bump Purchase</div>
  <div>Triggers when a specific bump (or bumps) are purchased.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Declined</div>
  <div>Triggers when a customer\'s card is declined for the initial payment of a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Downsell Purchase</div>
  <div>Triggers when a specific downsell (or downsells) are purchased.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product Purchase</div>
  <div>Triggers when a specific product (or products) are purchased.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upsell Purchase</div>
  <div>Triggers when a specific upsell (or upsells) are purchased.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Rebill Payment</div>
  <div>Triggers when a successful rebill payment is made.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recurring Payments Cancelled</div>
  <div>Triggers when a recurring payment for a subscription or a split pay is cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recurring Payments Completed</div>
  <div>Triggers when a subscription or a split pay is completed and all payments have been made successfully.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recurring Payment Failed</div>
  <div>Triggers when a subscription or split pay rebill payment fails.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Refund</div>
  <div>Triggers when a purchase is refunded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Paused</div>
  <div>Triggers when a subscription or a split pay is paused.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Resumed</div>
  <div>Triggers when a subscription or a split pay is resumed.</div>
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
          <title>ThriveCart</title>
          <meta name="description" content="ThriveCart is the no. 1 cart software that grows your income from existing traffic." />
        </>
      ),
    },
  };
}
