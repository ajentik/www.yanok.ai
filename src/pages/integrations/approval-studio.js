import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Approval Studio"
      description={`Approval Studio is a client-oriented online proofing software for creative teams and everyone working with designs.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/approval-studio.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Approval Studio Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 94, 40, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Approval Studio is a client-oriented online proofing software for creative teams and everyone working with designs.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Annotation Added</div>
  <div>Triggers when a new annotation is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Annotation Deleted</div>
  <div>Triggers when the annotation is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Annotation Edited</div>
  <div>Triggers when the annotation is edited.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Asset Deleted</div>
  <div>Triggers when the asset is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Asset Uploaded</div>
  <div>Triggers when the asset is uploaded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Created</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Edited</div>
  <div>Triggers when some project is edited.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project\'s State Changed</div>
  <div>Triggers when the project\'s state is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reference Document Deleted</div>
  <div>Triggers when the reference document is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reference Document Uploaded</div>
  <div>Triggers when the reference document is uploaded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Approved</div>
  <div>Triggers when the task is approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Completed</div>
  <div>Triggers when the task is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Created</div>
  <div>Triggers when a new task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Deleted</div>
  <div>Triggers when the task is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Rejected</div>
  <div>Triggers when the task is rejected.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Change Project\'s Attributes</div>
  <div>Change values of several project\'s attributes (Project\'s Name, Due Date, Design, Tags, etc).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Project\'s State</div>
  <div>Set new project\'s state (Active, OnHold, Completed or Archived).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task \'Upload Assets\'</div>
  <div>Create a new Approval Studio upload assets task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task \'External Review All Assets\'</div>
  <div>Create a new Approval Studio external review all assets task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task \'External Review Assets\'</div>
  <div>Create a new Approval Studio external review assets task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task \'Upload Reference Documents\'</div>
  <div>Create a new Approval Studio upload refdocs task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task \'Review All Assets\'</div>
  <div>Create a new Approval Studio review all assets task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task \'Review Assets\'</div>
  <div>Create a new Approval Studio review assets task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Project Info</div>
  <div>Get the main project\'s info.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Task Info</div>
  <div>Get the task\'s info.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pick Project Template</div>
  <div>Pick the project\'s template for a future using.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pick Task Type</div>
  <div>Pick the task\'s type for a future using.</div>
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
          <title>Approval Studio</title>
          <meta name="description" content={`Approval Studio is a client-oriented online proofing software for creative teams and everyone working with designs.`} />
        </>
      ),
    },
  };
}
