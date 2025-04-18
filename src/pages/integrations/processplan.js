import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Process Plan"
      description="ProcessPlan is a process, procedure, project, and workflow tool. Visually diagram your processes and then let ProcessPlan automate and manage your daily operations so you don't have to worry about making sure things are done correctly. Make your business run like a well-oiled machine while you sit back and relax!"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/processplan.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Process Plan Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(104, 175, 226, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ProcessPlan is a process, procedure, project, and workflow tool. Visually diagram your processes and then let ProcessPlan automate and manage your daily operations so you don\'t have to worry about making sure things are done correctly. Make your business run like a well-oiled machine while you sit back and relax!</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Field Updated</div>
  <div>Triggers when a field value is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Process Instance Completed</div>
  <div>Triggers when a process instance is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Process Instance Started</div>
  <div>Triggers when a process instance is started.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Assigned</div>
  <div>Triggers when a task is assigned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Canceled</div>
  <div>Triggers when a task is canceled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Completed</div>
  <div>Triggers when a task is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Due Date Changed</div>
  <div>Triggers when a task\'s due date is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Notes Updated</div>
  <div>Triggers when a task\'s notes are updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Past Due</div>
  <div>Triggers when a task becomes past due.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Start Date Changed</div>
  <div>Triggers when a task\'s start date is changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Cancel a Process</div>
  <div>Cancels a running process.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Process Fields</div>
  <div>Updates one or more fields of process.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel a Process Task</div>
  <div>Cancels a Process Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Complete a Task</div>
  <div>Completes a pending task in a running process.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start a Process Task</div>
  <div>Starts a Process Task out of order. Use with caution.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start a New Process</div>
  <div>Starts a new process instance and populates it\'s fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Process Instance</div>
  <div>Search for a process instance by field value.</div>
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
          <title>Process Plan</title>
          <meta name="description" content="ProcessPlan is a process, procedure, project, and workflow tool. Visually diagram your processes and then let ProcessPlan automate and manage your daily operations so you don't have to worry about making sure things are done correctly. Make your business run like a well-oiled machine while you sit back and relax!" />
        </>
      ),
    },
  };
}
