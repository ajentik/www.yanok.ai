import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Easy Projects"
      description={`Easy Projects is a collaboration and project management software that helps teams get rid of spreadsheets and work together.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/easy-projects.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Easy Projects Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(43, 73, 144, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Easy Projects is a collaboration and project management software that helps teams get rid of spreadsheets and work together.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when a new activity is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Activity File</div>
  <div>Triggers when a new file is posted to activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Activity Message</div>
  <div>Triggers when a new activity message is posted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project File</div>
  <div>Triggers when a new file is posted to project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project Message</div>
  <div>Triggers when a new project message is posted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Time Log</div>
  <div>Triggers when a time log is posted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Activity</div>
  <div>Triggers when a activity is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Activity (With Properties)</div>
  <div>Triggers when a activity is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Project</div>
  <div>Triggers when a project is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Time Log</div>
  <div>Triggers when a time log is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Activity File</div>
  <div>Adds a new file to activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Project File</div>
  <div>Adds a new file to project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project (With Custom Fields)</div>
  <div>Creates a new project with custom fields (if specified).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project. Please note, custom fields are not supported by this action. If custom fields are required please use action \'Create Project (with custom fields)\'</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Creates a new activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Time Log</div>
  <div>Adds a new time log to activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Activity Message</div>
  <div>Adds a new message to activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Project Message</div>
  <div>Adds a new message to project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Updates a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Activity</div>
  <div>Updates a activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Time Log</div>
  <div>Updates a time log.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Activity</div>
  <div>Finds an existing activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds an existing project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Time Log</div>
  <div>Finds an existing time log.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Activity</div>
  <div>Find or Create Activity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Activity</div>
  <div>Find or Create Activity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Find or Create Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Find or Create Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Time Entry</div>
  <div>Find or Create Time Entry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Time Entry</div>
  <div>Find or Create Time Entry</div>
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
          <title>Easy Projects</title>
          <meta name="description" content={`Easy Projects is a collaboration and project management software that helps teams get rid of spreadsheets and work together.`} />
        </>
      ),
    },
  };
}
