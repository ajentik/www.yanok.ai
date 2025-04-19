import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Everhour"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/everhour.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Everhour Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(36, 190, 106, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Everhour is a time tracking software equipped with budgeting, forward resource planning, expenses tracking, visual dashboards and flexible reports.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Time Updated</div>
  <div>Triggers when time that belongs to a task is added, edited or removed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Timer Started</div>
  <div>Triggers when a timer is started. Timer should be with a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Timer Stopped</div>
  <div>Triggers when a running timer is stopped. Timer should be with a task.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a new client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Section</div>
  <div>Сreates section (column) in a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Stop Timer</div>
  <div>Stops the current timer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Time</div>
  <div>Adds your time to a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start Timer</div>
  <div>Starts a new timer for a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Member</div>
  <div>Finds a member by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Internal Project</div>
  <div>Finds a project for creating task/section by name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds a project by name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Section</div>
  <div>Finds a section by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds a task by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Internal Project</div>
  <div>Finds a project for creating task/section by name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Section</div>
  <div>Finds a section by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Task</div>
  <div>Finds a task by name.</div>
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
          <title>Everhour</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
