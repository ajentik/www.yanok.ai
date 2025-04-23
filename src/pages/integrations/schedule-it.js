import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Schedule It"
      description={`Schedule it - A software tool which helps you schedule your resources, teams, equipment, rooms, and projects all in one place.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/schedule-it.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Schedule It Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(65, 125, 187, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Schedule it - A software tool which helps you schedule your resources, teams, equipment, rooms, and projects all in one place.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Event/Task</div>
  <div>Triggers when a new event or task is added to a resource you specify.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Event/Task</div>
  <div>Triggers when an event or task is deleted from a resource you specify.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Resource Added to an Event/Task</div>
  <div>Triggers when a resource you specify is added to an event or task that was not tagged to it previously.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Event/Task</div>
  <div>Triggers when an event or task is updated in a resource you specify.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Resource</div>
  <div>Triggers when a new resource is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Resource</div>
  <div>Triggers when a resource is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Resource</div>
  <div>Triggers when a resources details are updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates a new event in the schedule of a resource you specify.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Resource</div>
  <div>Creates a new resource in a group you specify.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task in the schedule of a resource you specify.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Event/Task</div>
  <div>Delete an existing event/task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Event/Task</div>
  <div>Updates an existing event/task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Resource</div>
  <div>Updates an existing resource.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Event/Task</div>
  <div>Find an existing event/task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Resource</div>
  <div>Find an existing resource.</div>
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
          <title>Schedule It</title>
          <meta name="description" content={`Schedule it - A software tool which helps you schedule your resources, teams, equipment, rooms, and projects all in one place.`} />
        </>
      ),
    },
  };
}
