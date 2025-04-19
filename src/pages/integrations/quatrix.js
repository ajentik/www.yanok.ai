import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Quatrix"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/quatrix.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Quatrix Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 119, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Download and upload files or folders, share them with predefined security options and a lot more functionalities can be easily integrated into your application using our [Quatrix APIs](https://docs.maytech.net/display/MD/Quatrix+API).</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New File in Directory</div>
  <div>Triggers when a new file is added to a directory.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File in Project Folder</div>
  <div>Triggers when a new file is added to a project folder.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Quick Link to a File</div>
  <div>Quick Link to a file</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Share File</div>
  <div>Share a file</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload File to a Directory</div>
  <div>Uploads a file</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload File to a Project Folder</div>
  <div>Uploads a file</div>
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
          <title>Quatrix</title>
        </>
      ),
    },
  };
}
