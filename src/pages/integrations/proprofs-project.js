import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ProProfs Project"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/proprofs-project.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ProProfs Project Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(62, 169, 244, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ProProfs Project is an online project management tool that also lets you collaborate with your team on the go.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Completed Subtask</div>
  <div>Triggers when a subtask is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Completed Task</div>
  <div>Triggers when a task is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new Event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new Project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subtask</div>
  <div>Triggers when a new subtask is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a new Client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates a Event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Subtask</div>
  <div>Creates a Subtask.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a Task.</div>
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
          <title>ProProfs Project</title>
        </>
      ),
    },
  };
}
