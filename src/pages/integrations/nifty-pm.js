import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Nifty"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/nifty-pm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Nifty Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 184, 169, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Nifty helps you communicate with your team members and manage your projects — all in one place. Project management has never been easier, fun, and more efficient.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Doc</div>
  <div>Triggers when a new doc is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File</div>
  <div>Triggers when a new file is uploaded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tag</div>
  <div>Triggers when a new tag is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message</div>
  <div>Triggers when a new message is sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Milestone</div>
  <div>Triggers when a new milestone is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subtask</div>
  <div>Triggers when a new subtask is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Portfolio</div>
  <div>Triggers when a new portfolio is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Is Completed</div>
  <div>Triggers when a task is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task List</div>
  <div>Triggers when a new task list is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is invited.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Doc</div>
  <div>Creates a new document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tag</div>
  <div>Creates a new tag.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message</div>
  <div>Send a new message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Milestone</div>
  <div>Creates a new milestone.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Subtask</div>
  <div>Creates a new subtask.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Portfolio</div>
  <div>Creates a new portfolio.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task List</div>
  <div>Creates a new task list.</div>
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
          <title>Nifty</title>
        </>
      ),
    },
  };
}
