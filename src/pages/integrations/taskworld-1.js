import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Taskworld"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/taskworld-1.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Taskworld Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(39, 182, 186, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Receive your Taskworld notifications in any app and collaborate more effectively!</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Added as a Follower to a Task</div>
  <div>Triggers when Taskworld user is added as follower to the task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assigned to a Task</div>
  <div>Triggers when your Taskworld user is assigned to the task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Commented</div>
  <div>Triggers when a new comment is added to the task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Due Date Added</div>
  <div>Triggers when date is added to the task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Due Date Changed</div>
  <div>Triggers when date added to the task is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Completed</div>
  <div>Triggers when your task is completed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Taskworld</title>
        </>
      ),
    },
  };
}
