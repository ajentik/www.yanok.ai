import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ProcessKit"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/processkit.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ProcessKit Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(250, 83, 44, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ProcessKit gives your team its operating procedures, systems, and automation workflows to make repeatable projects more predictable and scalable.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Updated Project</div>
  <div>Triggers when a new project is created in ProcessKit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">A Project Is Updated</div>
  <div>Triggers when a project has been updated in ProcessKit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Completed Tasks</div>
  <div>Triggers when a task in a project has been marked completed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Complete Task</div>
  <div>Mark a task as complete.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a client in ProcessKit</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Empty Task List</div>
  <div>Create a new, empty task list in a project. Later, you can add tasks to it manually or via another Zapier action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a project in ProcessKit</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag to Project</div>
  <div>Apply a tag to a project in ProcessKit. If the tag doesn\'t exist yet, this action can create the tag and then apply it.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Create a task in an existing task list in an existing project in ProcessKit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign Person to Task</div>
  <div>Assign an existing task to a person in your ProcessKit account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task List From Process Template</div>
  <div>Create a task list in a project. The task list and tasks will be built from a process template in your ProcessKit account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Task Incomplete</div>
  <div>Mark a task as not completed yet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Client</div>
  <div>Updates a client in ProcessKit</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Make updates to an existing project in ProcessKit, including updating project dates and other fields, moving a project to a different board, and associating a client with a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Update an existing task\'s title, content fields, start date, or due date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task Field</div>
  <div>Update an existing task field</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client by Name</div>
  <div>Find a Client in ProcessKit that has a name that contains this text. If there are multiple matches, the most recently created Client will be returned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client by Custom Attribute Value</div>
  <div>Find a Client in your ProcessKit account, which has a value in the selected custom client attribute field that contains this text. If there are multiple matches, the Client that was most recently created will be returned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project by Title</div>
  <div>Find a project in ProcessKit by its title</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project by ID</div>
  <div>Find a project in ProcessKit by its project ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project by Custom Field Value</div>
  <div>Find a project in ProcessKit by custom field values</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Find a task within a project in ProcessKit</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task Field</div>
  <div>Find a task field in a task by its label. Enter the exact label text (case sensitive) for the field you want to find.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Client</div>
  <div>Find a Client in ProcessKit that has a name that contains this text. If there are multiple matches, the most recently created Client will be returned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Client</div>
  <div>Find a Client in your ProcessKit account, which has a value in the selected custom client attribute field that contains this text. If there are multiple matches, the Client that was most recently created will be returned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Project</div>
  <div>Find a project in ProcessKit by its title</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Project</div>
  <div>Find a project in ProcessKit by custom field values</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Task</div>
  <div>Find a task within a project in ProcessKit</div>
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
          <title>ProcessKit</title>
        </>
      ),
    },
  };
}
