import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Kanbanery"
      description={`Kanbanery is an easy to use but full-featured online visual project management tool for personal or team use. Just create task cards and move them through columns as work is completed. A fully-functional free plan is available for personal use.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/kanbanery.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Kanbanery Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(38, 34, 34, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Kanbanery is an easy to use but full-featured online visual project management tool for personal or team use. Just create task cards and move them through columns as work is completed. A fully-functional free plan is available for personal use.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>A new task is added to your Kanbanery board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Task as Ready</div>
  <div>Add the check mark which indicates that a task is ready to be pulled to the next column.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Moved Task Card</div>
  <div>A task card is moved to a new column.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Task Card</div>
  <div>Creates a new task card.</div>
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
          <title>Kanbanery</title>
          <meta name="description" content={`Kanbanery is an easy to use but full-featured online visual project management tool for personal or team use. Just create task cards and move them through columns as work is completed. A fully-functional free plan is available for personal use.`} />
        </>
      ),
    },
  };
}
