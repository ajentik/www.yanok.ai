import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Eventable"
      description="Eventable is a calendar communication platform that makes it easy for anyone to create, send, and share calendar events on the web."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/eventable.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Eventable Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(73, 175, 205, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Eventable is a calendar communication platform that makes it easy for anyone to create, send, and share calendar events on the web.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new event is created (must choose between published or draft events).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber</div>
  <div>Triggers when a new subscriber adds any of your events to a calendar.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send Event to Subscriber</div>
  <div>Sends event invitation to a subscriber. Subscriber must have been previously added to the calendar in order to receive the event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates a new event in Eventable.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Event</div>
  <div>Updates an existing event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Event by Title</div>
  <div>Finds an event by the exact title (case-sensitive).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Subscriber by Email</div>
  <div>Finds a subscriber by their email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Event</div>
  <div>Find or Create Event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Subscriber</div>
  <div>Find or Create Subscriber</div>
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
          <title>Eventable</title>
          <meta name="description" content="Eventable is a calendar communication platform that makes it easy for anyone to create, send, and share calendar events on the web." />
        </>
      ),
    },
  };
}
