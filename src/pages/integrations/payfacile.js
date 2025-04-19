import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PayFacile"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/payfacile.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PayFacile Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(105, 100, 224, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">PayFacile is a web-app for collecting payments without coding. Manage customers, automate billing, sell subscriptions and digital files, design your own payment pages, integrate with your website or share a secure payment link.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Payment for All Products</div>
  <div>Triggers when a new payment is recorded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment for Specific Product</div>
  <div>Triggers when a new payment is recorded for a specific product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Failed - Payment Info Defective</div>
  <div>Triggers when a payment failed because of customer\'s payment informations are defective.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Failed - Payment Info Expired</div>
  <div>Triggers when a payment failed because of customer\'s payment informations are expired.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Failed - Insufficient Funds</div>
  <div>Triggers when a payment failed because of insufficient funds.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Terminated</div>
  <div>Triggers when a subscription is terminated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order for All Products</div>
  <div>Triggers when a new order is successfully placed. The payment has been validated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order for Specific Products</div>
  <div>Triggers when a new order is successfully placed for a specific product. The payment has been validated.</div>
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
          <title>PayFacile</title>
        </>
      ),
    },
  };
}
