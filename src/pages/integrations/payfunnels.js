import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Payfunnels"
      description="Payfunnels is a payment processing platform accepting recurring and one-time online payments, and even setting up payment plans to expire after a certain number of payments."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/payfunnels.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Payfunnels Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(94, 114, 228, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Payfunnels is a payment processing platform accepting recurring and one-time online payments, and even setting up payment plans to expire after a certain number of payments.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">First Recurring Payment</div>
  <div>Triggers when the First payment of recurring subscription is successfully paid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Created</div>
  <div>Triggers when invoice Created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Deleted</div>
  <div>Triggers when invoice deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Updated</div>
  <div>Triggers when a invoice is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Failed</div>
  <div>Triggers when payment failed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Successful</div>
  <div>Triggers when a payment succeeded.</div>
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
          <title>Payfunnels</title>
          <meta name="description" content="Payfunnels is a payment processing platform accepting recurring and one-time online payments, and even setting up payment plans to expire after a certain number of payments." />
        </>
      ),
    },
  };
}
