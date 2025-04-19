import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Envoy for Desks"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/envoy-for-desks.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Envoy for Desks Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(251, 67, 55, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Empower employees to reserve a desk to collaborate safely on-site.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Desk</div>
  <div>Triggers when a new desk is created or imported.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Started</div>
  <div>Triggers when a reservation for a desk is checked in or when the reservation has reached the start time and date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Ended</div>
  <div>Triggers when a reservation for a desk is canceled, checked out, or the reservation has reached the end time and date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reservation</div>
  <div>Triggers when a new desk is booked.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Reservation</div>
  <div>Cancel an upcoming desk reservation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Check-In Reservation</div>
  <div>Check in to an existing desk reservation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Check Out Reservation</div>
  <div>End an active desk reservation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Reservation</div>
  <div>Books a desk for a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Reservations</div>
  <div>Find an existing reservation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Reservation</div>
  <div>Find an existing reservation.</div>
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
          <title>Envoy for Desks</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
