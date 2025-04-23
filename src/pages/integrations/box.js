import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Box"
      description={`Box lets you keep all your businesses files in one place for simple online collaboration.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/box.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Box Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 129, 198, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Box lets you keep all your businesses files in one place for simple online collaboration.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggered when someone comments on a file in a folder you own/collaborate on.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggered when a new event is performed (this is the activity stream).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File</div>
  <div>Triggered when you add a new file to a folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Folder</div>
  <div>Triggered when you add a new folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Assigned to You</div>
  <div>Triggered when you are assigned a task.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add User as Collaborator</div>
  <div>Adds an individual user as a collaborator on a folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment to File</div>
  <div>Adds a comment to a file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload File</div>
  <div>Copy an already-existing file from another service to Box.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Folder</div>
  <div>Creates a brand new folder at the path you specify.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move/Copy File</div>
  <div>Moves or copies a file from one folder to another.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Text File</div>
  <div>Creates a brand new text (.txt) file from plain text content you specify.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Task to File</div>
  <div>Adds a task to a file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a File</div>
  <div>Search for a specific file by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Folder</div>
  <div>Search for a specific folder by name.</div>
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
          <title>Box</title>
          <meta name="description" content={`Box lets you keep all your businesses files in one place for simple online collaboration.`} />
        </>
      ),
    },
  };
}
