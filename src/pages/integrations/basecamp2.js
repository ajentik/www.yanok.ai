import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Basecamp 2"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/basecamp2.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Basecamp 2 Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(102, 204, 102, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Basecamp 2 lets you manage your projects all on one page, is super fast, and keeps you up to date in real-time.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggers when a new account is available in Basecamp.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File</div>
  <div>Triggers when a new file is added to a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar</div>
  <div>Triggers when a new calendar is added to Basecamp.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar Event on a Calendar</div>
  <div>Triggers when a new event is added to a calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar Event on a Project</div>
  <div>Triggers when a new event is added to a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Text Document</div>
  <div>Triggers when a new text document is added to a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when something happens inside of Basecamp. This trigger will give you a brief overview of the event that happened.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Global Activity</div>
  <div>Triggers when anything across any project happens. Use a filter step with this!</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New People</div>
  <div>Triggers when a new person is available in the account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project Template</div>
  <div>Triggers when a new project template is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Todo Item</div>
  <div>Triggers when a new todo is added to a todo list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Todo List</div>
  <div>Triggers when a new todo list is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Topic</div>
  <div>Triggers when a new topic is added (A new message is a topic, and the first comment on Calendar Events, Uploads, and Todos are topics).</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Calendar Event on Calendar</div>
  <div>Creates a new calendar event on a specific calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Calendar Event on Project</div>
  <div>Creates a new calendar event on a specific project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Document</div>
  <div>Create a brand new version tracked document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Grant Access to Project</div>
  <div>Give a user access to a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Message</div>
  <div>Creates a new message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Text File</div>
  <div>Creates a brand new text file from plain text content you specify.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project from Template</div>
  <div>Creates a project from your template of choice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Todo</div>
  <div>Creates a new todo item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Todo List</div>
  <div>Creates a new todo list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload File</div>
  <div>Copy an already-existing file from the trigger service.</div>
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
          <title>Basecamp 2</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
