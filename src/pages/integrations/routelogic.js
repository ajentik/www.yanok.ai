import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="RouteLogic"
      description="RouteLogic helps you make the most efficient routes and provides everything you need for a seamless customer experience."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/routelogic.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        RouteLogic Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(29, 21, 80, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">RouteLogic helps you make the most efficient routes and provides everything you need for a seamless customer experience.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Tasks Scheduled</div>
  <div>Triggers when a route with one or more Tasks has been scheduled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Completed</div>
  <div>Triggers when a task is delivered or picked up.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Created</div>
  <div>Triggers when a new Task has been created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Deleted</div>
  <div>Triggers when a Task has been deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Scheduled</div>
  <div>Triggers when a Task has been scheduled for delivery or pickup.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Updated</div>
  <div>Triggers when a Task has been updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new Task, probably with input from previous steps.</div>
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
          <title>RouteLogic</title>
          <meta name="description" content="RouteLogic helps you make the most efficient routes and provides everything you need for a seamless customer experience." />
        </>
      ),
    },
  };
}
