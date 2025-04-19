import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="HourStack"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/hourstack.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        HourStack Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(52, 109, 224, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Simplified, visual time tracking and scheduling for teams of all sizes.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Client Created</div>
  <div>Triggers when a new client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Deleted</div>
  <div>Triggers when a client is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Updated</div>
  <div>Triggers when a client is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entry Completed</div>
  <div>Triggers when an entry is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entry Created</div>
  <div>Triggers when a new entry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entry Deleted</div>
  <div>Triggers when an entry is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entry Timer Started</div>
  <div>Triggers when an entry timer starts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entry Timer Stopped</div>
  <div>Triggers when an entry timer stops.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entry Updated</div>
  <div>Triggers when an entry is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Label Created</div>
  <div>Triggers when a new label is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Label Deleted</div>
  <div>Triggers when a label is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Label Updated</div>
  <div>Triggers when a label is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Created</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Deleted</div>
  <div>Triggers when a project is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Updated</div>
  <div>Triggers when a project is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Team Created</div>
  <div>Triggers when a new team is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Team Deleted</div>
  <div>Triggers when a team is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Team Updated</div>
  <div>Triggers when a team is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Archive Client</div>
  <div>Archives a client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a new client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Client</div>
  <div>Deletes a client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unarchive Client</div>
  <div>Unarchives a client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Client</div>
  <div>Updates a client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Complete Entry</div>
  <div>Marks an entry as complete.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Entry</div>
  <div>Creates a new entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Entry</div>
  <div>Deletes an entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start Timer</div>
  <div>Starts a timer on an entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Stop Timer</div>
  <div>Stops an active timer on an entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Entry</div>
  <div>Updates an entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Archive Label</div>
  <div>Archives a label.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Label</div>
  <div>Creates a new label.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Label</div>
  <div>Deletes a label.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unarchive Label</div>
  <div>Unarchives a label.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Label</div>
  <div>Updates a label.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Archive Project</div>
  <div>Archives a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Complete Project</div>
  <div>Marks a project as complete.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Project</div>
  <div>Deletes a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unarchive Project</div>
  <div>Unarchives a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Uncomplete Project</div>
  <div>Marks a project as incomplete.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Updates a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Team</div>
  <div>Creates a new team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Team</div>
  <div>Deletes a team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Team</div>
  <div>Updates a team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client</div>
  <div>Find a client by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Entry</div>
  <div>Find an entry by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Entry by Source</div>
  <div>Find an entry created via integration by the source task ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Label</div>
  <div>Find a label by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Label by Source</div>
  <div>Find a label created via integration by the source label ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Find a project by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Project by Source</div>
  <div>Find a project created via integration by the source project ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Team</div>
  <div>Find a team by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client</div>
  <div>Find a client by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Entry</div>
  <div>Find an entry by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Label</div>
  <div>Find a label by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Find an project by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Team</div>
  <div>Find an team by name.</div>
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
          <title>HourStack</title>
        </>
      ),
    },
  };
}
