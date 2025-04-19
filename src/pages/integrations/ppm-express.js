import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PPM Express"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ppm-express.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PPM Express Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(18, 138, 16, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">PPM Express is Product Portfolio Management platform to easily integrate and orchestrate your existing projects in Microsoft Planner, Azure DevOps, Jira Software, Monday.com, and Microsoft Project Online to get a big picture view of your projects and product portfolio.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Idea Created</div>
  <div>Triggers when a Idea is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Idea Deleted</div>
  <div>Triggers when a Idea is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Idea Updated</div>
  <div>Triggers when a Idea is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Key Date Created</div>
  <div>Triggers when a Key Date is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Key Date Deleted</div>
  <div>Triggers when a Key Date is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Key Date Updated</div>
  <div>Triggers when a Key Date is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Created</div>
  <div>Triggers when a Project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Deleted</div>
  <div>Triggers when a Project is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Updated</div>
  <div>Triggers when a Project is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Created</div>
  <div>Triggers when a Task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Deleted</div>
  <div>Triggers when a Task is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Updated</div>
  <div>Triggers when a Task is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Idea</div>
  <div>Create new Idea</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Create new Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project Key Date</div>
  <div>Create new Project Key Date</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project Task</div>
  <div>Create new Project Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Idea</div>
  <div>Update Idea</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Idea Stage</div>
  <div>Update Idea Stage</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Update Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project Key Date</div>
  <div>Update Project Key Date</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project Task</div>
  <div>Update Project Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Idea by Id</div>
  <div>Gets Idea by Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Key Date by Id</div>
  <div>Gets Key Date by Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Project by Id</div>
  <div>Gets Project by Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Task by Id</div>
  <div>Gets Task by Id</div>
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
          <title>PPM Express</title>
        </>
      ),
    },
  };
}
