import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="InEvent"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/inevent.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        InEvent Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 119, 200, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">InEvent is a software for corporate events.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">API Request</div>
  <div>Triggers a custom API Request (highly technical).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person on Waitlist</div>
  <div>Triggers when a new person is added to the waitlist.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Attendee</div>
  <div>Triggers when a new attendee is enrolled to the event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Attendee Check-In</div>
  <div>(For event check ins, use "New Attendee" with "Attendee present" filter). Triggers when an attendee checks-in at an event or an activity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Attendee Check-Out</div>
  <div>(For event check outs, use "New Attendee" with "Attendee absent" filter). Triggers when an attendee checks-out from an event or an activity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Poll Answers</div>
  <div>Triggers when an attendee answer a poll for a given activity.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Attendee</div>
  <div>Creates or updates an attendee at an event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Attendee</div>
  <div>Updates an attendee at an event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Events</div>
  <div>Finds events at your account</div>
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
          <title>InEvent</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
