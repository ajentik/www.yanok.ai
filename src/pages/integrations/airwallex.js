import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Airwallex"
      description="Airwallex is a payments platform transforming the way businesses move and manage money globally."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/airwallex.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Airwallex Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(91, 50, 245, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Airwallex is a payments platform transforming the way businesses move and manage money globally.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Approaching Card Limit</div>
  <div>Triggers when a card reaches the provided threshold on any of its configured limits.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Transaction Failed</div>
  <div>Triggers when a card transaction fails.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Low Account Balance Alert</div>
  <div>Triggers when the account balance for specified currecies goes below a threshold.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Beneficiary</div>
  <div>Triggers when a new beneficiary is added to your Airwallex account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Cardholder</div>
  <div>Triggers when a new cardholder is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Transaction on Monitored Card</div>
  <div>Triggers when a new transaction is made on a selected card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Transaction (Payouts, Deposits and Conversions)</div>
  <div>Triggers when there is a new transaction.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Beneficiary</div>
  <div>Creates a Beneficiary.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Cardholder</div>
  <div>Creates a cardholder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Beneficiary</div>
  <div>Updates a beneficiary by ID.</div>
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
          <title>Airwallex</title>
          <meta name="description" content="Airwallex is a payments platform transforming the way businesses move and manage money globally." />
        </>
      ),
    },
  };
}
