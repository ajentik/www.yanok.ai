import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Dropbox"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/dropbox.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Dropbox Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(41, 100, 246, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Dropbox lets you store your files online, sync them to all your devices, and share them easily. Get started for free, then upgrade for more space and security features.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Folder</div>
  <div>Triggers when a new folder is added. Make sure the number of files/folders in the watched folder does not exceed 4000.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File in Folder</div>
  <div>Triggers when a new file is added to a folder. Make sure the number of files/folders in the watched folder does not exceed 4000.</div>
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
  <div class="font-semibold">Upload File</div>
  <div>Upload an existing file or attachment not bigger than 100 MB.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move File</div>
  <div>Moves a file to a new location at the path you specify.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Text File</div>
  <div>Creates a brand new text file from plain text content you specify.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Append to Text File</div>
  <div>Adds a new line to an existing text file, or creates a file if it doesn\'t exist.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Rename File</div>
  <div>Renames a file that you specify.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Shared Link</div>
  <div>Creates a shared link for a file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Folder</div>
  <div>Finds a folder by name. Make sure the number of files/folders in the watched folder does not exceed 4000.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find File</div>
  <div>Search for a specific file by name. Make sure the number of files/folders in the watched folder does not exceed 4000.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find File (Content Search)</div>
  <div>Searches for files in a folder that match a search term in the contents or name. Requires a Dropbox Business account.</div>
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
          <title>Dropbox</title>
        </>
      ),
    },
  };
}
