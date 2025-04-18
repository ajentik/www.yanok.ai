import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Rocketlane"
      description="Rocketlane is a collaborative customer onboarding platform that helps you shorten time to value and deliver a delightful onboarding experience."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/rocketlane.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Rocketlane Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(15, 98, 254, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Rocketlane is a collaborative customer onboarding platform that helps you shorten time to value and deliver a delightful onboarding experience.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Form Submitted</div>
  <div>Triggers when a form response is submitted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Message Created</div>
  <div>Triggers when a new message is added in a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Created</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Updated</div>
  <div>Triggers when a project is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Message Created</div>
  <div>Triggers when a new message is added in a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Created</div>
  <div>Triggers when a new task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Updated</div>
  <div>Triggers when a new task is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Task Message</div>
  <div>Creates a new Task message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Import Template to Project</div>
  <div>Imports one or more templates to a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Updates a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Updates a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Project</div>
  <div>Search Project By Id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Project (V2)</div>
  <div>Search Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Task (V2)</div>
  <div>Search Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Task</div>
  <div>Search Task By Id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User</div>
  <div>Search User By Email Id.</div>
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
          <title>Rocketlane</title>
          <meta name="description" content="Rocketlane is a collaborative customer onboarding platform that helps you shorten time to value and deliver a delightful onboarding experience." />
        </>
      ),
    },
  };
}
