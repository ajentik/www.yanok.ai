import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="MyVR"
      description="Everything you need to manage and market your vacation rental business."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/myvr.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        MyVR Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(62, 143, 173, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Everything you need to manage and market your vacation rental business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Inquiry Created</div>
  <div>Triggers when a new Inquiry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Inquiry Message Created</div>
  <div>Triggers when a new Inquiry Message is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Property Created</div>
  <div>Triggers when a new Property is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Created</div>
  <div>Triggers when a new Reservation is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Approved</div>
  <div>Triggers when a requested reservation is approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Booked</div>
  <div>Triggers when a new reservation is booked by a renter with initial payment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Canceled</div>
  <div>Triggers when a reservation is canceled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Declined</div>
  <div>Triggers when a reservation is declined.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Deleted</div>
  <div>Triggers when a reservation is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Payment Deleted</div>
  <div>Triggers when a recorded reservation payment is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Payment Failed</div>
  <div>Triggers when an attempt to process a reservation payment fails.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Payment Processed</div>
  <div>Triggers when a new reservation payment is created and processed successfully.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Payment Recorded</div>
  <div>Triggers when a when a reservation payment is manually recorded as paid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Payment Updated</div>
  <div>Triggers when a reservation payment is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Payment Voided</div>
  <div>Triggers when a recorded reservation payment is voided.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Requested</div>
  <div>Triggers when a new reservation is requested and needs to be approved or declined.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Terms Updated</div>
  <div>Triggers when reservation terms are set or modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Updated</div>
  <div>Triggers when an existing reservation is updated - such as a change to the dates or property.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Inquiry</div>
  <div>Creates a new Inquiry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Inquiry Message</div>
  <div>Creates a new Inquiry Message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Property</div>
  <div>Creates a new Property.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Reservation</div>
  <div>Creates a new Reservation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Inquiry</div>
  <div>Finds an existing Inquiry from search parameters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Inquiry Message</div>
  <div>Finds an existing Inquiry Message from search parameters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Property</div>
  <div>Finds an existing Property from search parameters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Reservation</div>
  <div>Finds an existing Reservation from search parameters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Inquiry</div>
  <div>Finds an existing Inquiry from search parameters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Inquiry Message</div>
  <div>Finds an existing Inquiry Message from search parameters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Property</div>
  <div>Finds an existing Property from search parameters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Reservation</div>
  <div>Finds an existing Reservation from search parameters.</div>
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
          <title>MyVR</title>
          <meta name="description" content="Everything you need to manage and market your vacation rental business." />
        </>
      ),
    },
  };
}
