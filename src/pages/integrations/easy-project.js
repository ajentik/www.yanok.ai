import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Easy Project"
      description={`Easy Project is a professional project management software for you, your team and the whole company. Based on WBS, Gantt, Agile and other best PM practices. It is compatible with modules for Resources, Finances, Help Desk and CRM.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/easy-project.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Easy Project Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 128, 230, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Easy Project is a professional project management software for you, your team and the whole company. Based on WBS, Gantt, Agile and other best PM practices. It is compatible with modules for Resources, Finances, Help Desk and CRM.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Comments Web Hook Trigger</div>
  <div>Triggers when a task comment is created, updated or deleted according options.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Time Entry</div>
  <div>Triggers when a new time entry is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project. Author will be set to authenticated user</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Create a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Time Entry</div>
  <div>Create a new time entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Planned Project Expense</div>
  <div>Creates a new planned expense in project budget module.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Planned Project Income</div>
  <div>Creates a new planned income in project budget module.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project Expense</div>
  <div>Creates a new real expense in project budget module.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project Income</div>
  <div>Creates a new real income in project budget module.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Update task (Subject, Notes, Status, Priority, Assigned user).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds an existing project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds an existing task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Find or Create Project</div>
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
          <title>Easy Project</title>
          <meta name="description" content={`Easy Project is a professional project management software for you, your team and the whole company. Based on WBS, Gantt, Agile and other best PM practices. It is compatible with modules for Resources, Finances, Help Desk and CRM.`} />
        </>
      ),
    },
  };
}
