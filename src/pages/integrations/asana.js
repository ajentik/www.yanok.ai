import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Asana"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/asana.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Asana Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(46, 60, 84, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Asana is a leading work management platform that helps teams orchestrate their work, from daily tasks to strategic initiatives. With Asana, organizations have a living system of clarity where everyone can see, discuss, and execute their team’s priorities.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Completed Task</div>
  <div>Triggered when a task within a project, or any project within a workspace, is marked as completed. Does not trigger on completed subtasks.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggered when you add a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Story</div>
  <div>Triggered when you add a new story.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subtask</div>
  <div>Triggered when you add a new subtask.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tag Created</div>
  <div>Triggered when you create a new tag.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task in Project</div>
  <div>Triggered when you add a new task to a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to Task</div>
  <div>Triggered when you add a tag to a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Team</div>
  <div>Triggered when you add a new team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Task in Project</div>
  <div>Triggered when a task in a project is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggered when you add a new user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Workspace/Organization</div>
  <div>Triggered when you add a new workspace/organization.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Attach File</div>
  <div>Attaches a File to a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Duplicate Task</div>
  <div>Duplicates an existing task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project From Template</div>
  <div>Creates a new project from a custom template.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Section</div>
  <div>Creates a new section within a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Subtask</div>
  <div>Adds a subtask to an existing task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Adds a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Story</div>
  <div>Adds a new story (a comment is a story).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Adds a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Task to Section of Project</div>
  <div>Adds a task to a section of a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Updates an existing Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds an existing project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Section in Project</div>
  <div>Finds an existing section within a workspace project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task in Project</div>
  <div>Finds an existing task within a workspace project(s).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task by ID</div>
  <div>Finds an existing task by its ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds an existing user of your Asana account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Find or Create Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Task</div>
  <div>Find or Create Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Task</div>
  <div>Find or Create Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Task</div>
  <div>Find or Create Task</div>
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
          <title>Asana</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
