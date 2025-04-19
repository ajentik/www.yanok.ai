import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="timeghost"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/timeghost.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        timeghost Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(82, 94, 105, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">timeghost is your project time tracking solution especially designed for Microsoft 365. No extra registration needed, all set with your Office/Microsoft 365 account.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Client</div>
  <div>Triggers when a client is created, changed or deleted in timeghost.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Project</div>
  <div>Triggers when a project is created, changed or deleted in timeghost.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Tag</div>
  <div>Triggers when a tag is created, changed or deleted in timeghost.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Time</div>
  <div>Triggers when a time is created, changed or deleted in timeghost.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Client</div>
  <div>Add a client to a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Custom Feed Event</div>
  <div>Add an event to the users feed. Entry is automatically deleted after 180 days.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Group</div>
  <div>Add a group to a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Project</div>
  <div>Add a project to a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Task</div>
  <div>Add a task to a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Time</div>
  <div>Add a time to a project within a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Time Tag</div>
  <div>Add a time tag to a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Clients</div>
  <div>Get all clients from a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client Projects</div>
  <div>Get all projects of one client in one workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client Times</div>
  <div>Get all times of one client in one workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Groups</div>
  <div>Get all groups from a workspace</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Projects</div>
  <div>Get all projects from a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project Tasks</div>
  <div>Get all tasks of one project in one workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project Times</div>
  <div>Get all times of one project in one workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Times</div>
  <div>Get all times from a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Time Tags</div>
  <div>Get all time tags from a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Client</div>
  <div>Update a client in a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Custom Feed Event</div>
  <div>Update a custom feed entry in a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Group</div>
  <div>Update a group in a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Update a project in a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Update a task in a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Time</div>
  <div>Update a time in a workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Time Tag</div>
  <div>Update a time tag in a workspace.</div>
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
          <title>timeghost</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
