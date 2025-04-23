import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Ironclad"
      description={`Ironclad is a contract lifecycle management platform used by companies to handle every type of contract workflow.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ironclad.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Ironclad Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 202, 136, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Ironclad is a contract lifecycle management platform used by companies to handle every type of contract workflow.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Approval Event</div>
  <div>Triggers when a new approval event is created that matches the selected event..</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Workflow Document Event</div>
  <div>Triggers when a new workflow document event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Workflow Event</div>
  <div>Triggers when a new workflow event is created that matches the selected event.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete Record</div>
  <div>Deletes an existing record by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Launch New Workflow</div>
  <div>Launches a New Workflow</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Workflow Approvals</div>
  <div>Gets Workflow Approvals for a Workflow</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Record</div>
  <div>Creates a New Record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Record</div>
  <div>Updates an existing Record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Workflow</div>
  <div>Updates the workflow metadata.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Workflow Approval</div>
  <div>Creates an Update Workflow Approval action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Workflow Comment</div>
  <div>Adds a workflow comment to an existing workflow</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Record</div>
  <div>Finds a record by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Workflow</div>
  <div>Finds a workflow based by ID.</div>
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
          <title>Ironclad</title>
          <meta name="description" content={`Ironclad is a contract lifecycle management platform used by companies to handle every type of contract workflow.`} />
        </>
      ),
    },
  };
}
