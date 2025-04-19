import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Project Monitor"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/project-monitor.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Project Monitor Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(229, 0, 125, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Project Monitor is a PPM software that aims to manage your portfolios for all kinds of projects/sectors. Control the entire lifecycle, from request management to project execution. Measure progress on your team\'s workload and save time with a data-driven dashboard.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Project</div>
  <div>Triggers when a project is deleted in project monitor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Task</div>
  <div>Triggers when a task is deleted in project monitor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a project is created in project monitor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a task is created in project monitor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Project</div>
  <div>Triggers when a project is modified in project monitor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Task</div>
  <div>Triggers when a task is modified in project monitor.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new Project Monitor project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new Project Monitor task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Updates a PM project that had been created via the API.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Updates a PM task that had been created via the API.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Tasks State</div>
  <div>Update the state of the tasks of the given project and phase, from the source state to the target state.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Version</div>
  <div>Returns the installed version of Project Monitor.</div>
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
          <title>Project Monitor</title>
          <meta name="description" content={}/>s workload and save time with a data-driven dashboard.' />
        </>
      ),
    },
  };
}
