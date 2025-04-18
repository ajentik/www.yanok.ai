import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Cirkus"
      description="Cirkus is a task management software for any business that relies on collaboration to get work done. With powerful project management features for free, Cirkus is simple in design and capable of adapting to your most complicated work processes."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/cirkus.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Cirkus Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(5, 135, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Cirkus is a task management software for any business that relies on collaboration to get work done. With powerful project management features for free, Cirkus is simple in design and capable of adapting to your most complicated work processes.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar Event</div>
  <div>Triggers when a new calendar event is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subproject</div>
  <div>Triggers when a new subproject is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Time Entry</div>
  <div>Triggers when a new time entry is added.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Calendar Event</div>
  <div>Creates a calendar event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Updates a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Subproject</div>
  <div>Creates a subproject</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Subproject</div>
  <div>Updates a subproject</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Updates a task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Time Entry</div>
  <div>Creates a time entry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds an existing task.</div>
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
          <title>Cirkus</title>
          <meta name="description" content="Cirkus is a task management software for any business that relies on collaboration to get work done. With powerful project management features for free, Cirkus is simple in design and capable of adapting to your most complicated work processes." />
        </>
      ),
    },
  };
}
