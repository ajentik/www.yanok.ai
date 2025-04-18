import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Sortd for Gmail"
      description="Sortd allows you to organise email & teamwork in Gmail. Collaborate around Tasks, Emails, Meetings and Projects is made easy with customised boards and workflows"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sortd.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Sortd for Gmail Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(66, 66, 66, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Sortd allows you to organise email & teamwork in Gmail. Collaborate around Tasks, Emails, Meetings and Projects is made easy with customised boards and workflows</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Task Archived</div>
  <div>Triggers when a task is archived.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Assigned</div>
  <div>Triggers when a task is assigned to a team member</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Completed</div>
  <div>Triggers when a task is marked as completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Deleted</div>
  <div>Triggers when a task is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task Created</div>
  <div>Triggers when a new Task is created on the specified board or list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Moved to List</div>
  <div>Triggers when a task is moved to the specified list.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Create a new Task in Sortd</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task From Gmail Thread</div>
  <div>Create a Task in Sortd from a new thread in Gmail</div>
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
          <title>Sortd for Gmail</title>
          <meta name="description" content="Sortd allows you to organise email & teamwork in Gmail. Collaborate around Tasks, Emails, Meetings and Projects is made easy with customised boards and workflows" />
        </>
      ),
    },
  };
}
