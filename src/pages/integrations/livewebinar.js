import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="LiveWebinar"
      description="LiveWebinar is an advanced, customisable meetings & webinar platform used for trainings, presentations and team meetings."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/livewebinar.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        LiveWebinar Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(18, 118, 212, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">LiveWebinar is an advanced, customisable meetings & webinar platform used for trainings, presentations and team meetings.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Webinar Recording Ready</div>
  <div>Triggers when a recording of your webinar is post-processed and ready for download. Based on this trigger you can download it to you FTP server or upload to Vimeo/YouTube.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sub-Account Create</div>
  <div>Triggers when a new sub-account is created under your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sub-Account Delete</div>
  <div>Triggers when sub-account is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sub-Account Status Disable</div>
  <div>Triggers when your sub-account status is disabled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sub-Account Status Enable</div>
  <div>Triggers when your sub-account is enabled</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sub-Account Update</div>
  <div>Triggers when your sub-account details changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Webinar Delete</div>
  <div>Triggers when a webinar is cancelled / deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Webinar Create</div>
  <div>Triggers when a new webinar or meeting is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Webinar Status Disable</div>
  <div>Triggered when webinar status changes to disabled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Webinar Status Enable</div>
  <div>Triggers when webinar status is changed to enable.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggered when someone fills in the Lead form before entering your webinar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Registrant</div>
  <div>Triggers when new registrant registers to your webinar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Webinar Update</div>
  <div>Triggers when a webinars details changes.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create New Registrant</div>
  <div>Creates a new registrant to your webinar. Will also trigger "New Registrant" event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Webinar</div>
  <div>Creates new Webinar based on your input. Triggers "Webinar Create" event.</div>
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
          <title>LiveWebinar</title>
          <meta name="description" content="LiveWebinar is an advanced, customisable meetings & webinar platform used for trainings, presentations and team meetings." />
        </>
      ),
    },
  };
}
