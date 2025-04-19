import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Crowdcast"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/crowdcast.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Crowdcast Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(236, 95, 62, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Crowdcast is a live video platform for hosting webinars, livestreams, workshops, interviews and online summits. Offering ticketing for paid live events, detailed analytics and integrations with CRM and marketing platforms.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Event Reminder</div>
  <div>Triggers 10 minutes before your event is scheduled to go live.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Question</div>
  <div>Triggers when a question is asked.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New CTA Click</div>
  <div>Triggers when a participant clicks your call to action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event Registration</div>
  <div>Triggers when a participant registers for any of your events on Crowdcast.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Session Visit</div>
  <div>Triggers when a participant visits a session\'s page at any given time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Recording View</div>
  <div>Triggers when a participant watches your recording.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Live Attendance</div>
  <div>Triggers at the end of your session when a participant has shown up live.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Missed Session</div>
  <div>Triggers at the end of your session when a participant has not shown up live.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Register Participant</div>
  <div>Registers a participant for an event (sends an email with a link to your event).</div>
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
          <title>Crowdcast</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
