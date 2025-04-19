import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Google Drive"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/google-drive.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Google Drive Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(244, 180, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Google Drive is Google\'s file sync app that lets you store all of your files online alongside your Google Docs documents, and keep them synced with all of your devices.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New File</div>
  <div>Triggers when any new file is added (inside of any folder).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File in Folder</div>
  <div>Triggers when a new file is added directly to a specific folder (but not its subfolders).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Folder</div>
  <div>Triggers when a new folder is added directly to a specific folder (but not its subfolders).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated File</div>
  <div>Triggers when a file is updated in a specific folder (but not its subfolders).</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Copy File</div>
  <div>Create a copy of the specified file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload File</div>
  <div>Copies an existing file from another service to Google Drive.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Folder</div>
  <div>Create a new, empty folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move File</div>
  <div>Move a file from one folder to another.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create File from Text</div>
  <div>Create a new file from plain text.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Replace File</div>
  <div>Upload a file to Drive, that replaces an existing file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add File Sharing Preference</div>
  <div>Adds a sharing scope to the sharing preference of a file. Does not remove existing sharing settings. Provides a sharing URL.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Shortcut</div>
  <div>Create a shortcut to a file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a File</div>
  <div>Search for a specific file by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Folder</div>
  <div>Search for a specific folder by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create File</div>
  <div>Finds or creates a specific file v2.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Folder</div>
  <div>Finds or creates a specific folder v2.</div>
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
          <title>Google Drive</title>
          <meta name="description" content={}/>s file sync app that lets you store all of your files online alongside your Google Docs documents, and keep them synced with all of your devices.' />
        </>
      ),
    },
  };
}
