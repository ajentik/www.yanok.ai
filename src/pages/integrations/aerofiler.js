import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Aerofiler"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/aerofiler.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Aerofiler Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(34, 77, 87, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Aerofiler is for in-house legal teams who wish to automate the process of creating, approving, filing and tracking contracts.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Approval Finished</div>
  <div>Triggers when an approval workflow is finished.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Approval Workflow Step</div>
  <div>Triggers when an approval workflow is sent for approval.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New External Workflow</div>
  <div>Triggers when a new workflow is initiated using external data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Uploaded File</div>
  <div>Triggers when a new file is uploaded to your Aerofiler instance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Updated Metadata</div>
  <div>Triggers when a field is updated in your Aerofiler instance.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Submit and File Document</div>
  <div>Submit a document using the provided data. With this action, the document will be immediately filed in the repository.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Submit Workflow</div>
  <div>Submit a workflow using the provided data. With this action, the workflow will be immediately submitted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Workflow From External Data</div>
  <div>Get external data to send to an Aerofiler workflow. With this action, the user will be able to review data before submitting the workflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Documents</div>
  <div>Update documents based on the search criteria.</div>
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
          <title>Aerofiler</title>
        </>
      ),
    },
  };
}
