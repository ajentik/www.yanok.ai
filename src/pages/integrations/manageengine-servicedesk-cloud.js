import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ManageEngine ServiceDesk Plus Cloud"
      description={`ManageEngine ServiceDesk Plus is a ITIL® compliant comprehensive help desk software with integrated asset and project management capabilities.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/manageengine-servicedesk-cloud.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ManageEngine ServiceDesk Plus Cloud Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(26, 87, 121, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ManageEngine ServiceDesk Plus is a ITIL® compliant comprehensive help desk software with integrated asset and project management capabilities.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Asset</div>
  <div>Triggers when a new asset is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Change</div>
  <div>Triggers when a new change is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Request</div>
  <div>Triggers when a new request is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Announcement</div>
  <div>Sends an announcement to all users.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Change</div>
  <div>Creates a new change.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Request</div>
  <div>Creates a new request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoke API Call</div>
  <div>Make API calls in ServiceDesk Plus Cloud to perform an action</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Request</div>
  <div>Updates an existing request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Request</div>
  <div>Finds Request details using the Request ID.</div>
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
          <title>ManageEngine ServiceDesk Plus Cloud</title>
          <meta name="description" content={`ManageEngine ServiceDesk Plus is a ITIL® compliant comprehensive help desk software with integrated asset and project management capabilities.`} />
        </>
      ),
    },
  };
}
