import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pneumatic"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pneumatic.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pneumatic Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(254, 195, 54, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Pneumatic is first workflow service created especially for small teams.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Task Completed</div>
  <div>Triggers when some task is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Returned</div>
  <div>Triggers when a process is returned to this task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Workflow Completed</div>
  <div>Triggers when a workflow is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Workflow Started</div>
  <div>Triggers when a new workflow is started.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Run Workflow</div>
  <div>Run a New Workflow</div>
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
          <title>Pneumatic</title>
        </>
      ),
    },
  };
}
