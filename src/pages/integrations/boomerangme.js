import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Boomerangme"
      description="Boomerangme is a Loyalty SaaS, upsell tool for agencies. Get additional recurring income from existing customers offering Loyalty as a Service. Use Reseller feature including white label, pricing set up, payment gateway connections."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/boomerangme.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Boomerangme Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(224, 230, 62, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Boomerangme is a Loyalty SaaS, upsell tool for agencies. Get additional recurring income from existing customers offering Loyalty as a Service. Use Reseller feature including white label, pricing set up, payment gateway connections.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Card Issued</div>
  <div>Triggers when card is issued.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Template Is Activated</div>
  <div>Triggers when a card template is activated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Template Is Deactivated</div>
  <div>Triggers when a cart template is deactivated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Template Is Deleted</div>
  <div>Triggers when a template card is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Card Template</div>
  <div>Triggers when a new card template is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Manager</div>
  <div>Triggers when a new manager created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subaccount</div>
  <div>Triggers when a new subaccount is signed up.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Customer Data</div>
  <div>Edit Data of Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Issue Card</div>
  <div>Issues a Card</div>
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
          <title>Boomerangme</title>
          <meta name="description" content="Boomerangme is a Loyalty SaaS, upsell tool for agencies. Get additional recurring income from existing customers offering Loyalty as a Service. Use Reseller feature including white label, pricing set up, payment gateway connections." />
        </>
      ),
    },
  };
}
