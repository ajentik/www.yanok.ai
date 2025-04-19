import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Timesheet"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/timesheet.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Timesheet Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 136, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Timesheet is a mobile Time Tracker which allows you the recording of your working hours with a simple push of a button.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new Project is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Rate</div>
  <div>Triggers when a new Rate is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tag</div>
  <div>Triggers when a new Tag is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new Task is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Team</div>
  <div>Triggers when a new Team is added.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Rate</div>
  <div>Creates a new Rate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Report</div>
  <div>Sends a new Report.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tag</div>
  <div>Creates a new Tag.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Team</div>
  <div>Creates a new Team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds a Project by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Rate</div>
  <div>Finds a Rate by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Tag</div>
  <div>Finds a Tag by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds a Task by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Team</div>
  <div>Finds a Team by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Finds a Project by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Rate</div>
  <div>Finds a Rate by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Tag</div>
  <div>Finds a Tag by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Task</div>
  <div>Finds a Task by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Team</div>
  <div>Finds a Team by searching.</div>
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
          <title>Timesheet</title>
        </>
      ),
    },
  };
}
