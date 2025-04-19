import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Kanban Tool"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/kanbantool.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Kanban Tool Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(41, 121, 210, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Kanban Tool is a smart visual project management application with real-time collaboration that allows teams to get work done faster. Kanban Tool helps companies visualize workflow, analyze and improve business processes and reduce waste.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Activity on a Board</div>
  <div>Triggers when a new activity on a board is made.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Board</div>
  <div>Triggers when a new board is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Board Collaborator</div>
  <div>Triggers when a new collaborator is added to a board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Card Type</div>
  <div>Triggers when a new card type is defined for a board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Checklist Item</div>
  <div>Triggers when a new checklist item is added to a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when a new comment is added to a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Swimlane</div>
  <div>Triggers when a new swimlane is created for a board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Workflow Stage</div>
  <div>Triggers when a new workflow stage is created for a board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Archived</div>
  <div>Triggers when a task is archived.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Moved</div>
  <div>Triggers when a task is moved to another workflow stage or swimlane.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Updated</div>
  <div>Triggers when a task is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Archive Task</div>
  <div>Archives a specific task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Complete Checklist Item</div>
  <div>Completes an existing checklist item on a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Checklist Item</div>
  <div>Creates a new checklist item on a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Comment</div>
  <div>Writes a new comment on a specific task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task on a specific board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Checklist Item</div>
  <div>Deletes a checklist item from a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Task</div>
  <div>Deletes a specific task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move Task</div>
  <div>Moves a specific task between workflow stages and swimlanes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Checklist Item</div>
  <div>Updates a checklist item\'s name or assigned user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Updates a task\'s name, description, due date or other details.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds a task on a selected board given task\'s name, location, or with advanced search query. Does not search for archived tasks. Optionally, creates a new task if none are not found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Task Details</div>
  <div>Gets task details (ex. description, custom fields)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create task</div>
  <div>Finds a task on a selected board given task\'s name, location, or with advanced search query. Does not search for archived tasks. Optionally, creates a new task if none are not found.</div>
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
          <title>Kanban Tool</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
