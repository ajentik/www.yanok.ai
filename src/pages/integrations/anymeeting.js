import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Intermedia AnyMeeting"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/anymeeting.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Intermedia AnyMeeting Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(133, 196, 46, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Hold online meetings and webinars to connect with sales prospects, clients and new potential leads.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Attendee</div>
  <div>Triggers at the end of a meeting or a webinar to send information about your attendees.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recording Ready</div>
  <div>Triggers when a customer\'s recording ready.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Webinar Registration</div>
  <div>Triggers when a person registers for one of your webinars.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Webinar Scheduled</div>
  <div>Triggers when a new webinar is scheduled in AnyMeeting.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Schedule Meeting</div>
  <div>Creates a new meeting.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Webinar Registration</div>
  <div>Registers a person for your webinar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Schedule Webinar</div>
  <div>Creates a new webinar.</div>
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
          <title>Intermedia AnyMeeting</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
