import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Height"
      description="Height is a project management software for teams to collaborate faster with tasks, chat, and flexible workflows."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/height.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Height Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(121, 87, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Height is a project management software for teams to collaborate faster with tasks, chat, and flexible workflows.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Completed Task</div>
  <div>Triggers when a task is completed (i.e. Done, Won\'t do, …).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message</div>
  <div>Triggers when a new message is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Task</div>
  <div>Triggers when a task is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Added to a List</div>
  <div>Triggers when a task is added to a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Assigned to User</div>
  <div>Triggers when a task is assigned to a specific user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Task</div>
  <div>Triggers when a task is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Updated to Status</div>
  <div>Triggers when a task is updated to a specific status.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Message</div>
  <div>Creates a message on a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a task in your workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task(s)</div>
  <div>Update one or multiple tasks by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Task</div>
  <div>Fetch a task with some more information.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Tasks</div>
  <div>Search tasks through with a text query.</div>
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
          <title>Height</title>
          <meta name="description" content="Height is a project management software for teams to collaborate faster with tasks, chat, and flexible workflows." />
        </>
      ),
    },
  };
}
