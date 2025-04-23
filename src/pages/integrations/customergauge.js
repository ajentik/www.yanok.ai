import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CustomerGauge"
      description={`CustomerGauge is a SaaS platform that helps clients improve retention, using Customer Success and Net Promoter® methodologies.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/customergauge.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CustomerGauge Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(226, 99, 92, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">CustomerGauge is a SaaS platform that helps clients improve retention, using Customer Success and Net Promoter® methodologies.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Change Fire-fighting Status</div>
  <div>Change the Fire-fighting status, Leave a Workflow Comment, and/or Change Assignee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Survey Response</div>
  <div>Allows you to upload a survey response to CustomerGauge as historical data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Survey Invitation</div>
  <div>Upload a single record to CustomerGauge to attempt to send a survey invitation from one of your Automated Campaigns.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update/Create Activity</div>
  <div>Creates a new Activity in your CustomerGauge system, or Updates an existing Activity in your CustomerGauge system.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Import Fields</div>
  <div>Fetches the Import Fields data structure configuration from your CustomerGauge platform, which you can use in the Upload Survey Response or Send Survey Invitation actions.</div>
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
          <title>CustomerGauge</title>
          <meta name="description" content={`CustomerGauge is a SaaS platform that helps clients improve retention, using Customer Success and Net Promoter® methodologies.`} />
        </>
      ),
    },
  };
}
