import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Tallyfy"
      description="Tallyfy is a workflow platform that eliminates chaos from your repeatable processes - freeing up your time."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/tallyfy.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Tallyfy Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(118, 182, 63, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Tallyfy is a workflow platform that eliminates chaos from your repeatable processes - freeing up your time.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment</div>
  <div>Add a new comment or issue to a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Task Assignees</div>
  <div>Change the assignees of any task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Task Deadline</div>
  <div>Change the deadline of any task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Complete Task</div>
  <div>Complete a task in a process.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a standalone task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Launch Process</div>
  <div>Launch a new process using a blueprint.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Process Task</div>
  <div>Find a process task on Tallyfy process.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Complete Process</div>
  <div>Complete Process</div>
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
          <title>Tallyfy</title>
          <meta name="description" content="Tallyfy is a workflow platform that eliminates chaos from your repeatable processes - freeing up your time." />
        </>
      ),
    },
  };
}
