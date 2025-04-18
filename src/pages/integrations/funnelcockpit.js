import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="FunnelCockpit"
      description="FunnelCockpit is your all-in-one marketing solution."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/funnelcockpit.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        FunnelCockpit Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(93, 159, 251, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">FunnelCockpit is your all-in-one marketing solution.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New CRM Contact</div>
  <div>Triggers when a new CRM contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Contact</div>
  <div>Triggers when a new email contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Form Submission</div>
  <div>Triggers when a new form submission has been made.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Survey Result</div>
  <div>Triggers when a new survey result has been created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Webinar Viewer</div>
  <div>Triggers when a new webinar viewer is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update CRM Contact</div>
  <div>Creates or updates a CRM Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Email Contact</div>
  <div>Creates or updates an email contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Webinar Viewer</div>
  <div>Adds a webinar viewer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Webinar Dates</div>
  <div>Gets the upcoming Webinar Dates</div>
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
          <title>FunnelCockpit</title>
          <meta name="description" content="FunnelCockpit is your all-in-one marketing solution." />
        </>
      ),
    },
  };
}
