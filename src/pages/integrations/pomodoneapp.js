import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PomoDoneApp"
      description="Pomodone app enhances your task management by using the Pomodoro technique to boost your efficiency with controlled chunks of productivity. Prioritize your tasks, gain focus on them, and get more work done."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pomodoneapp.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PomoDoneApp Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(193, 56, 39, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Pomodone app enhances your task management by using the Pomodoro technique to boost your efficiency with controlled chunks of productivity. Prioritize your tasks, gain focus on them, and get more work done.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Item Complete</div>
  <div>Triggers when a task is marked as done.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Current Timer Stopped</div>
  <div>Triggers when the app timer is stopped.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Timer Started</div>
  <div>Triggers when the app timer is started.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates PomoDoneApp tasks from any source.</div>
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
          <title>PomoDoneApp</title>
          <meta name="description" content="Pomodone app enhances your task management by using the Pomodoro technique to boost your efficiency with controlled chunks of productivity. Prioritize your tasks, gain focus on them, and get more work done." />
        </>
      ),
    },
  };
}
