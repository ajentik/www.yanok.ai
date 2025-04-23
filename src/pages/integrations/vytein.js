import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Vyte"
      description={`Vyte is a tool that makes scheduling appointments, meetings, and customers bookings easy and user-friendly.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/vytein.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Vyte Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(48, 143, 240, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Vyte is a tool that makes scheduling appointments, meetings, and customers bookings easy and user-friendly.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Event Cancelled</div>
  <div>Triggers when an event is cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Confirmed</div>
  <div>Triggers when an event is confirmed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Created</div>
  <div>Triggers when a new event is created on Vyte.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Updated</div>
  <div>Triggers when an event is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Event</div>
  <div>Cancels an event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates an event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Confirm Event</div>
  <div>Confirms and event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Event</div>
  <div>Finds an Event, should be used with an Action</div>
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
          <title>Vyte</title>
          <meta name="description" content={`Vyte is a tool that makes scheduling appointments, meetings, and customers bookings easy and user-friendly.`} />
        </>
      ),
    },
  };
}
