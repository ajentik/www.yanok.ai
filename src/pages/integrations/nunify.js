import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="nunify"
      description="nunify is an event tech platform to run any type of event - virtual events, hybrid events, webinars, in-person events & meetings. This platform provides all tools for registrations, onsite check-in, networking, audience engagement, gamification, live stream, event apps, sponsorships."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/nunify.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        nunify Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(62, 38, 120, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">nunify is an event tech platform to run any type of event - virtual events, hybrid events, webinars, in-person events & meetings. This platform provides all tools for registrations, onsite check-in, networking, audience engagement, gamification, live stream, event apps, sponsorships.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Attendee Check-In</div>
  <div>Triggers when an attendee has checked in to a location or nunify event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Registration</div>
  <div>Triggers when an attendee registers for a nunify event.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Registrant</div>
  <div>Registers an attendee to your event in nunify and issues a ticket for them.</div>
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
          <title>nunify</title>
          <meta name="description" content="nunify is an event tech platform to run any type of event - virtual events, hybrid events, webinars, in-person events & meetings. This platform provides all tools for registrations, onsite check-in, networking, audience engagement, gamification, live stream, event apps, sponsorships." />
        </>
      ),
    },
  };
}
