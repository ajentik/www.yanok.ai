import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="WebinarJam / EverWebinar"
      description={`WebinarJam is a webinar and live broadcasting program allowing for live and prerecorded events.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/webinarjam.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        WebinarJam / EverWebinar Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(222, 67, 49, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">WebinarJam is a webinar and live broadcasting program allowing for live and prerecorded events.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Live Attendee</div>
  <div>Triggers when a registrant attend a live webinar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Registrant Attends Replay</div>
  <div>Triggers when a registrant attends the webinar replay.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Registrant Joins Webinar After</div>
  <div>Triggers when a registrant joins the live webinar late.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Registrant Leaves Before</div>
  <div>Triggers when a registrant leaves the live webinar before a specific timestamp.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Registrant Misses Webinar</div>
  <div>Triggers when a registrant misses the live webinar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Registrant Purchases</div>
  <div>Triggers when a registrant buys a product during the live webinar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Registration</div>
  <div>Triggers when a user registers for a webinar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Registrants Stays Until</div>
  <div>Triggers when a registrant stays in a live webinar past a specific timestamp.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>WebinarJam / EverWebinar</title>
          <meta name="description" content={`WebinarJam is a webinar and live broadcasting program allowing for live and prerecorded events.`} />
        </>
      ),
    },
  };
}
