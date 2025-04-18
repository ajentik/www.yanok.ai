import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Airmeet"
      description="Airmeet is an all-in-one platform for communities & organizations to host immersive events and build real connections, online."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/airmeet.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Airmeet Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(85, 61, 205, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Airmeet is an all-in-one platform for communities & organizations to host immersive events and build real connections, online.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Airmeet</div>
  <div>Triggers when a new Airmeet is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Airmeet Finish</div>
  <div>Triggers when an Airmeet is ended by the host.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Airmeet Reminder</div>
  <div>Triggers when Airmeet is scheduled to start in 4 hours.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Airmeet Start</div>
  <div>Triggers when a specific Airmeet is started by the host.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attendee Registered</div>
  <div>Triggers when a new attendee registers for an Airmeet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attendee Joined an Event</div>
  <div>Triggers whenever an attendee joins an event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attendee Joined a Session</div>
  <div>Triggers whenever an attendee joins a session</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Booth Attendance</div>
  <div>Booth attendance in an event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Polls</div>
  <div>Polls by attendees for an event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Questions</div>
  <div>Questions by attendees for an event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Airmeet Booths</div>
  <div>Get Booth details for an event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Airmeet Tracks</div>
  <div>Get Track details for an event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Sessions for an Event</div>
  <div>Get Sessions info for an event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Registrant Added on a Specific Event</div>
  <div>Registrant Added on a specific event</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Registrant</div>
  <div>Add Registrant To Airmeet</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Airmeet</div>
  <div>Action for Airmeet Creation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Booth</div>
  <div>Action for Airmeet Booth</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Session</div>
  <div>Session Creation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Speaker</div>
  <div>Add A Speaker To Airmeet</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Register Attendee With Custom Registration Form</div>
  <div>Register Attendee With Custom Registration Form</div>
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
          <title>Airmeet</title>
          <meta name="description" content="Airmeet is an all-in-one platform for communities & organizations to host immersive events and build real connections, online." />
        </>
      ),
    },
  };
}
