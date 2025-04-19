import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Basecamp 3"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/basecamp3.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Basecamp 3 Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(102, 204, 102, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Basecamp’s unique blend of tools is everything any team needs to stay on the same page about whatever they’re working on.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggers when a new basecamp account is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when any activity happens in a basecamp.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when a new comment is created in a basecamp.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Document</div>
  <div>Triggers when a new document is created in a folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message</div>
  <div>Triggers when a new message is created in a basecamp.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new person is available in the account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Schedule Entry</div>
  <div>Triggers when a new schedule entry is created in a basecamp.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New To-do List</div>
  <div>Triggers when a new to-do list is created in a basecamp.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New To-do</div>
  <div>Triggers when a new to-do is created in a basecamp.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Upload</div>
  <div>Triggered when a new upload is added.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Campfire Message</div>
  <div>Creates a Campfire message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document</div>
  <div>Creates a new document in a folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Message</div>
  <div>Creates a new message in a message board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Comment on Message</div>
  <div>Creates a new comment in a message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Person to a Project</div>
  <div>Adds or creates a new person to an existing project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project from Template</div>
  <div>Creates a new project using a template.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Schedule Entry</div>
  <div>Creates a new schedule entry in a schedule.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create To-do</div>
  <div>Creates a new to-do in a to-do list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create To-do List</div>
  <div>Creates a new to-do list in a to-do set.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload File</div>
  <div>Uploads a new file in a folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Document</div>
  <div>Finds a document by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Finds a person by name or email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds a project by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find To-do List</div>
  <div>Finds a to-do list by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Document</div>
  <div>Finds or creates a specific document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Finds or creates a specific project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create To-do List</div>
  <div>Finds or creates a specific todo list.</div>
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
          <title>Basecamp 3</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
