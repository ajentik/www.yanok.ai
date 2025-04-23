import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Week Plan"
      description={`Online weekly planner that helps you focus on what matters rather than just on getting things done.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/week-plan.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Week Plan Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(37, 154, 244, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Online weekly planner that helps you focus on what matters rather than just on getting things done.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Completed Task</div>
  <div>When a task is marked as completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Journal Entry</div>
  <div>New Journal Entry in Week Plan.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Role</div>
  <div>Triggers when a new role is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is created in the workspace.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Role</div>
  <div>Creates a new role.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Journal Entry</div>
  <div>Create a new journal entry in Week Plan.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Journal Log</div>
  <div>Create a new journal log in Week Plan.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Create a new task in Week Plan.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Role</div>
  <div>Finds an existing role.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Role</div>
  <div>Find or Create Role</div>
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
          <title>Week Plan</title>
          <meta name="description" content={`Online weekly planner that helps you focus on what matters rather than just on getting things done.`} />
        </>
      ),
    },
  };
}
