import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="GuideCX"
      description={`GuideCX was created by professionals in a number of industries who were similarly frustrated by the lack of solutions and automation in the ‘sale to implementation’ process.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/guidecx.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        GuideCX Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(100, 145, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">GuideCX was created by professionals in a number of industries who were similarly frustrated by the lack of solutions and automation in the ‘sale to implementation’ process.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Pending Project</div>
  <div>A Pending Project is an object containing the default values that a GuideCX admin or project manager will have access to as they complete the project setup within the GuideCX app. A successful API request will trigger a "Pending Project" notification within the app and provide an opportunity for your project manager to verify the project details before the project is created and your customer users are notified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project Note</div>
  <div>Creates a new note on the project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task Note</div>
  <div>Creates a note on a task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task Status</div>
  <div>Updates the status of a task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Search for a task across your organization</div>
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
          <title>GuideCX</title>
          <meta name="description" content={`GuideCX was created by professionals in a number of industries who were similarly frustrated by the lack of solutions and automation in the ‘sale to implementation’ process.`} />
        </>
      ),
    },
  };
}
