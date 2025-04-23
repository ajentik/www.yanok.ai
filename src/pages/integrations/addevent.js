import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AddEvent"
      description={`AddEvent is an add to calendar service on the internet. We handle millions of events every year for businesses around the world.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/addevent.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AddEvent Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(45, 53, 70, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AddEvent is an add to calendar service on the internet. We handle millions of events every year for businesses around the world.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar Subscriber</div>
  <div>Triggers when a new calendar subscriber is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New RSVP Attendee</div>
  <div>Triggers when a new email RSVP Attendee is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New RSVP Attendee by Event Id</div>
  <div>Triggers when a new email RSVP Attendee is created from a specified event.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates an Event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Direct URL Method</div>
  <div>Creates add-to-calendar links for emails</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Event</div>
  <div>Updates an Event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Event</div>
  <div>Deletes an event in a calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Event</div>
  <div>Finds an Event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find RSVP Subscriber</div>
  <div>Finds an RSVP Subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List All Events Across All Calendars</div>
  <div>List of all events across all calendars.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Events in Main Calendar</div>
  <div>List Events in a Main Calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Events in a Calendar</div>
  <div>List of events in a calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Events</div>
  <div>Finds an Event.</div>
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
          <title>AddEvent</title>
          <meta name="description" content={`AddEvent is an add to calendar service on the internet. We handle millions of events every year for businesses around the world.`} />
        </>
      ),
    },
  };
}
