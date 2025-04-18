import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Searchie"
      description="Searchie transforms your video and audio content into a powerful search experience."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/searchie.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Searchie Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(41, 58, 211, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Searchie transforms your video and audio content into a powerful search experience.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">File Processed</div>
  <div>Triggers when a file has been processed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Audience</div>
  <div>Triggers when a new audience is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Audience Tag</div>
  <div>Triggers when a new audience tag is created in the account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File</div>
  <div>Triggers when a new file is added in searchie.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Folder</div>
  <div>Triggers when a new folder is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Hub</div>
  <div>Triggers when a new Hub is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Playlist</div>
  <div>Triggers when a new playlist is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Widget</div>
  <div>Triggers when a new widget is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add or Update Audience</div>
  <div>Adds audience to a Searchie account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Audience Tag</div>
  <div>Adds an Audience Tag</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add File</div>
  <div>Add file to a Folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add File Tag</div>
  <div>Adds a tag to a file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Hub Access</div>
  <div>Adds a Hub access to an audience.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Audience Tag</div>
  <div>Remove an Audience Tag</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Hub Access</div>
  <div>Removed a Hub access for an audience</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Audience</div>
  <div>Finds an Audience</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Add Audience</div>
  <div>Finds an Audience</div>
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
          <title>Searchie</title>
          <meta name="description" content="Searchie transforms your video and audio content into a powerful search experience." />
        </>
      ),
    },
  };
}
