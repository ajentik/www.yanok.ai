import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zoho Projects"
      description="Zoho Projects is an online project management app that helps you plan your work and keep track of your progress. It also lets the people in the project communicate easily, discuss ideas, and stay updated. This lets you deliver quality results on time."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zoho-projects.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zoho Projects Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(240, 72, 62, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Zoho Projects is an online project management app that helps you plan your work and keep track of your progress. It also lets the people in the project communicate easily, discuss ideas, and stay updated. This lets you deliver quality results on time.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Bug</div>
  <div>Triggers when a new bug/issue is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File</div>
  <div>Triggers when a new file is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Log Time</div>
  <div>Triggers when a new log-time is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Milestone</div>
  <div>Triggers when a new milestone is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Trigger when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a task is created or completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task List</div>
  <div>Triggers when a new tasklist is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Log Time</div>
  <div>Creates a new log time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Bug</div>
  <div>Creates a new Bug.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Milestone</div>
  <div>Creates a new Milestone.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task List</div>
  <div>Creates a new Task List.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Updates existing project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload File</div>
  <div>Copy an already-existing file from another service to Zoho Projects.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds an existing project.</div>
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
          <title>Zoho Projects</title>
          <meta name="description" content="Zoho Projects is an online project management app that helps you plan your work and keep track of your progress. It also lets the people in the project communicate easily, discuss ideas, and stay updated. This lets you deliver quality results on time." />
        </>
      ),
    },
  };
}
