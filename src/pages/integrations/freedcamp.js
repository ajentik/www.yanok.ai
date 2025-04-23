import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Freedcamp"
      description={`Freedcamp is a project management tool equipt with all the tools you need to work with your team and organize any project.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/freedcamp.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Freedcamp Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(57, 161, 231, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Freedcamp is a project management tool equipt with all the tools you need to work with your team and organize any project.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when a comment is added to a task you are subscribed on.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Assigned to Me</div>
  <div>Triggers when a new or existing task is assigned to you.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Completed</div>
  <div>Triggers when a task is marked as completed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment</div>
  <div>Creates a new comment for a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Discussion Comment</div>
  <div>Creates a new comment for a discussion.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project in a project group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task in a task list.</div>
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
          <title>Freedcamp</title>
          <meta name="description" content={`Freedcamp is a project management tool equipt with all the tools you need to work with your team and organize any project.`} />
        </>
      ),
    },
  };
}
