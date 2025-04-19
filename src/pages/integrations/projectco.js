import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Project.co"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/projectco.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Project.co Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(76, 29, 149, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Project.co is a project management software tool for service businesses. Collaborate with your clients and team so all your project information is in one place.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Group</div>
  <div>Triggers when a new ProjectCo group is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new Project.co project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new Project.co task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new ProjectCo user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Project</div>
  <div>Triggers when a Project.co project is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Task</div>
  <div>Triggers when a ProjectCo task is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Group</div>
  <div>Creates a group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Comment on Project</div>
  <div>Creates a new comment inside a project\'s discussion</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Comment on Task</div>
  <div>Creates a new comment inside a task\'s discussion</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a ProjectCo User</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Updates a project if it exists</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Updates a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Group</div>
  <div>Finds a group by name or ID and creates a new one if search has no results.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Finds a project by name or ID and creates a new one if search has no results.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Task</div>
  <div>Finds a task by name or ID and corresponding project and creates a new one if search has no results.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Group</div>
  <div>Finds a Group by ID or Name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds a Project by ID or Name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds a Task by ID or Name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds a User by Name or Email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Group</div>
  <div>Finds a group by name or ID and creates a new one if search has no results.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Finds a project by name or ID and creates a new one if search has no results.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Task</div>
  <div>Finds a task by name or ID and corresponding project and creates a new one if search has no results.</div>
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
          <title>Project.co</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
