import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Jira Software Server"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/jira.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Jira Software Server Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(32, 80, 129, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Jira is a bug and issue tracking tool that allows software developers to manage product development and build better software. This integration connects to self-hosted instances of Jira.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Issue</div>
  <div>Triggers when you add an issue to a project of your selection.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Issue (Via JQL)</div>
  <div>Triggers when a new issue is added that matches some JQL.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Issue Type</div>
  <div>Triggers when you add a new issue type.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Priority</div>
  <div>Triggers when you add a new priority.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a project is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Issue</div>
  <div>Triggers when an issue is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Watcher to Issue</div>
  <div>Adds a user to the issue\'s watcher list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attach File to Issue</div>
  <div>Attaches a file to an existing (or newly created) Jira issue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Issue</div>
  <div>Create a new issue, select your own project and issue type.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Issue</div>
  <div>Updates an existing issue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Issue</div>
  <div>Searches for an issue, either using the issue\'s key, or its summary.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Find a user by name.</div>
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
          <title>Jira Software Server</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
