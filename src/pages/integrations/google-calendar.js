import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Google Calendar"
      description="Google Calendar lets you organize your schedule and share events with co-workers and friends. With Google's free online calendar, it's easy to keep track of your daily schedule."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/google-calendar.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Google Calendar Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(54, 128, 247, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Google Calendar lets you organize your schedule and share events with co-workers and friends. With Google\'s free online calendar, it\'s easy to keep track of your daily schedule.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar</div>
  <div>Triggers when a calendar is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Cancelled</div>
  <div>Triggers when an event is cancelled or deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Ended</div>
  <div>Triggers when an event ends.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Start</div>
  <div>Triggers a specified time before an event starts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Event</div>
  <div>Triggers when an event is created or updated (except when it\'s cancelled).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when an event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event Matching Search</div>
  <div>Triggers when an event is created that matches a search.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Attendee/s to Event</div>
  <div>Invites one or more person to an existing event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Calendar</div>
  <div>Creates a new calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Event</div>
  <div>Deletes an event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Detailed Event</div>
  <div>Create an event by defining each field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Quick Add Event</div>
  <div>Create an event from a piece of text. Google parses the text for date, time, and description info.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Event</div>
  <div>Updates an event. Only filled fields are updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Event</div>
  <div>Finds an event in your calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Event</div>
  <div>Finds or creates a specific event.</div>
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
          <title>Google Calendar</title>
          <meta name="description" content="Google Calendar lets you organize your schedule and share events with co-workers and friends. With Google's free online calendar, it's easy to keep track of your daily schedule." />
        </>
      ),
    },
  };
}
