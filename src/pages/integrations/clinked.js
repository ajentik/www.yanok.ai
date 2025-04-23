import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Clinked"
      description={`Clinked is a white-label client portal for business. Clinked offers secure communication, collaboration & information sharing portal.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/clinked.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Clinked Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(139, 198, 88, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Clinked is a white-label client portal for business. Clinked offers secure communication, collaboration & information sharing portal.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Trigger when new event is created in group. Returns 100 latest events.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File</div>
  <div>Triggers when a new file is created in group. Returns latest 100 results.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Folder</div>
  <div>Triggers when new folder is created. Returns latest 100 results.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Group</div>
  <div>Triggers when new group is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Trigger when new note is created in group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task Category</div>
  <div>Triggers when a new task category is created in a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when new task is created in a group. Returns latest 100 results.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Attachment</div>
  <div>Create a new attachment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Discussion</div>
  <div>Create a new discussion.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates a new event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload File</div>
  <div>Creates a new file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Folder</div>
  <div>Creates a new folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Group</div>
  <div>Creates a new group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Duplicate a Group</div>
  <div>Duplicate an existing group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invite Members</div>
  <div>Invites new members to Organisation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Create a new Note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Note</div>
  <div>Update an existing note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invite Members to Space</div>
  <div>Invite members to a space</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task Category</div>
  <div>Creates a new task category.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Text File</div>
  <div>Creates a brand new text file from plain text content you specify.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Event</div>
  <div>Finds an event in group by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find File</div>
  <div>Finds a file in a group by name. Returns maximum 100 results.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Folder</div>
  <div>Finds a folder in a group by name. Returns latest 100 results.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Group</div>
  <div>Finds a group by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Note</div>
  <div>Finds a note in group by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task Categories</div>
  <div>Finds a Task Category in group by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds a task in a group by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Event</div>
  <div>Finds an event in group by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create File</div>
  <div>Finds a file in a group by name. Returns maximum 100 results.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Folder</div>
  <div>Finds a folder in a group by name. Returns latest 100 results.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Group</div>
  <div>Finds a group by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Note</div>
  <div>Finds a note in group by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Task Category</div>
  <div>Finds a Task Category in group by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Task</div>
  <div>Finds a task in a group by name.</div>
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
          <title>Clinked</title>
          <meta name="description" content={`Clinked is a white-label client portal for business. Clinked offers secure communication, collaboration & information sharing portal.`} />
        </>
      ),
    },
  };
}
