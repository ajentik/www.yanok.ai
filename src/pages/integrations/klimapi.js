import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="KlimAPI"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/klimapi.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        KlimAPI Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(6, 75, 84, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">KlimAPI is a platform that enables you and your customers to offset the unavoidable CO2 emissions of the service or product you sell.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Order Created</div>
  <div>Triggers when a new order is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Processed</div>
  <div>Triggers when an Order is fullfilled</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Calculate Flight Emissions</div>
  <div>Calculate Flight Emissions</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Calculate Hotel Emissions</div>
  <div>Calculate Hotel Emissions</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order by Carbon</div>
  <div>Get the compensation instantly by kilogram. For this route the API key has no limits.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order by Price</div>
  <div>Get the compensation instantly by price. For this route the API key has no limits.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payment Link by Carbon</div>
  <div>Create an Payment Link by Carbon</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payment Link by Price</div>
  <div>Create an Payment Link by Price</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Pending Order by Carbon</div>
  <div>Creates a pending Order by Carbon</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Pending Order by Price</div>
  <div>Creates a pending Order by Price</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Decline Order</div>
  <div>You declined the given Order. This is optional but very welcome</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Order</div>
  <div>Here you can request information about a specific Order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Payment Link</div>
  <div>Here you can request information about a specific Payment Link</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Process Order</div>
  <div>You accepted the given order. You may now show a confirmation or provide the link to the certificate.</div>
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
          <title>KlimAPI</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
