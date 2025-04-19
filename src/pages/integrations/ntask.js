import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="nTask"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ntask.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        nTask Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(114, 180, 50, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">NTask is a free task management platform smart teams rely on to get things done better and faster.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Issue Created</div>
  <div>Triggers when a new issue is created in the task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Issue Status Changed</div>
  <div>Triggers when the status of an issue is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Meeting Created</div>
  <div>Triggers when a new meeting is created in the task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Risk Created</div>
  <div>Triggers when a new risk is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Risk Status Changed</div>
  <div>Triggers when the status of a risk is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Assignees Added</div>
  <div>Triggers when new assignees are added to the task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Attachment Added</div>
  <div>Triggers when a new attachment is added in a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task CheckList Added</div>
  <div>Triggers when a new task checklist is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Comment Created</div>
  <div>Triggers when a new comment is created in a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Completed</div>
  <div>Triggers when a task is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Priority Changed</div>
  <div>Triggers when a task\'s priority is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Status Updated</div>
  <div>Triggers when a task\'s status is changed.</div>
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
  <div class="font-semibold">Add Task Assignees</div>
  <div>Add Assignees to a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Task CheckList</div>
  <div>Add CheckList to a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Issue Status</div>
  <div>Change the status of an issue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Risk Status</div>
  <div>Change the status of a risk.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Task Status</div>
  <div>Change status of a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Comment</div>
  <div>Create a new comment in a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Issue</div>
  <div>Create an issue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Meeting</div>
  <div>Create a meeting.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Create a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Risk</div>
  <div>Create a risk.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Create a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Update a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Issue</div>
  <div>Find an issue in a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Risk</div>
  <div>Find a risk in a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Find a task in a project.</div>
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
          <title>nTask</title>
        </>
      ),
    },
  };
}
