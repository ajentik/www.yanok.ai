import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Lokalise"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/lokalise.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Lokalise Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(164, 161, 74, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Lokalise is a translation management tool that lets you structure and automate workflows while encouraging collaboration among all involved.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Order Completed</div>
  <div>Triggers when an order has been completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Exported</div>
  <div>Triggers when a project export is performed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Imported</div>
  <div>Triggers when anything is imported into the project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Closed</div>
  <div>Triggers when a task is closed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Created</div>
  <div>Triggers when a new task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Language Closed</div>
  <div>Triggers when a language is closed in the task.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates an empty Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Download Files</div>
  <div>Downloads files.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload File</div>
  <div>Uploads a file to the project.</div>
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
          <title>Lokalise</title>
        </>
      ),
    },
  };
}
