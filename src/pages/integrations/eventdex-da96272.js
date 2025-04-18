import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Eventdex"
      description="At Eventdex we provide a cloud platform and mobile apps for Business to Business events."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/eventdex-da96272.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Eventdex Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(103, 168, 200, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">At Eventdex we provide a cloud platform and mobile apps for Business to Business events.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">All New Event Leads</div>
  <div>Triggers when a lead is inserted and get all the Leads for a particular event from Eventdex.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Attendees</div>
  <div>Triggers when an Attendee registered in Eventdex.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Events List</div>
  <div>Triggers when an event is created and get all the event details for an Event Admin/Event Organizer/Attendee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Order Information</div>
  <div>Triggers when a new person is registered for an event and gets all the orders and payment information.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Checkins</div>
  <div>Triggers when New Attendee is checked in to Eventdex.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Exhibitor New Leads</div>
  <div>Triggers when an Exhibitor lead is inserted and get all the Leads for a particular Exhibitor from Eventdex.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create New Attendees</div>
  <div>Create New Attendees in Eventdex.</div>
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
          <title>Eventdex</title>
          <meta name="description" content="At Eventdex we provide a cloud platform and mobile apps for Business to Business events." />
        </>
      ),
    },
  };
}
