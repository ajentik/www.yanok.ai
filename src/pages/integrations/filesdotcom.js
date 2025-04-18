import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Files.com"
      description="Files.com is Smart Cloud Storage for modern teams. With Files.com, your team can collaborate, automate, and get things done -- without compromising security."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/filesdotcom.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Files.com Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(193, 31, 50, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Files.com is Smart Cloud Storage for modern teams. With Files.com, your team can collaborate, automate, and get things done -- without compromising security.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New File Uploaded</div>
  <div>Triggers when a new File is uploaded. (note: This trigger will only fire for files &lt; 150MB. This is a limit of Zapier. To support larger files, consider a Files.com built-in integration or sync).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File or Folder Created</div>
  <div>Triggers when a new File or Folder is Created. (note: If you need to actually use the File Contents your Action, use the New File Uploaded Trigger instead).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Group Created</div>
  <div>Triggers when a new Group is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Created</div>
  <div>Triggers when a new User is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Upload File</div>
  <div>Upload file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Folder</div>
  <div>Create folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Group</div>
  <div>Create Group.</div>
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
          <title>Files.com</title>
          <meta name="description" content="Files.com is Smart Cloud Storage for modern teams. With Files.com, your team can collaborate, automate, and get things done -- without compromising security." />
        </>
      ),
    },
  };
}
