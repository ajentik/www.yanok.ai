import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="MeisterTask"
      description="MeisterTask is an incredibly intuitive online task manager that uses smart integrations and task automations to make your team more productive."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/meistertask.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        MeisterTask Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 170, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">MeisterTask is an incredibly intuitive online task manager that uses smart integrations and task automations to make your team more productive.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Attachment</div>
  <div>Triggers when an attachment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Checklist Item</div>
  <div>Triggers when a new checklist item is added to a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new person is added to a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Section</div>
  <div>Triggers when a new section is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Label</div>
  <div>Triggers when a label is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when a new comment is created on a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a Task is created or changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task Label</div>
  <div>Triggers when a Task label is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Attachment</div>
  <div>Creates a new attachment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Label</div>
  <div>Creates a new label.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task Label</div>
  <div>Creates a new task label.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Updates an existing task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Attachment</div>
  <div>Finds an attachment by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Find a person based on a person_id. Can be used to match a tasks assignee to a person name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Label</div>
  <div>Finds a label by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds a task by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Attachment</div>
  <div>Finds an attachment by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Label</div>
  <div>Finds a label by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Task</div>
  <div>Finds a task by searching.</div>
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
          <title>MeisterTask</title>
          <meta name="description" content="MeisterTask is an incredibly intuitive online task manager that uses smart integrations and task automations to make your team more productive." />
        </>
      ),
    },
  };
}
