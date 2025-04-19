import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Timely Time Tracking"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/timely-time-tracking.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Timely Time Tracking Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(155, 114, 218, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Timely Time Tracking automates company time tracking, so everyone can focus on the work that matters.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Workspace</div>
  <div>Triggers when a workspace is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Time Entry</div>
  <div>Triggers when time entries are created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Project</div>
  <div>Triggers when a project is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Person</div>
  <div>Triggers when a person is added or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Time Entry</div>
  <div>Triggers when a new time entry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a Client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Log Time Entry</div>
  <div>Logs a time entry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person</div>
  <div>Creates a new person in the workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client</div>
  <div>Finds a Client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Client</div>
  <div>Finds a Client</div>
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
          <title>Timely Time Tracking</title>
        </>
      ),
    },
  };
}
