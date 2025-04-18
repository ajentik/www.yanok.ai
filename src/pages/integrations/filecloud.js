import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="FileCloud"
      description="FileCloud is an Enterprise File Access and Share solution that runs on-premise, integrated with your own IT infrastructure and using your own storage."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/filecloud.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        FileCloud Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(18, 101, 160, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">FileCloud is an Enterprise File Access and Share solution that runs on-premise, integrated with your own IT infrastructure and using your own storage.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New File In Folder</div>
  <div>Triggers when a new file is added directly to a specific folder (but not its subfolders).</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Folder</div>
  <div>Creates a brand new folder at the path you specify.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Text File</div>
  <div>Creates a brand new text (.txt) file from plain text content you specify.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload File</div>
  <div>Copy an already-existing file from another service to FileCloud.</div>
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
          <title>FileCloud</title>
          <meta name="description" content="FileCloud is an Enterprise File Access and Share solution that runs on-premise, integrated with your own IT infrastructure and using your own storage." />
        </>
      ),
    },
  };
}
