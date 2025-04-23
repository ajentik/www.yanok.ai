import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Citrix ShareFile"
      description={`Citrix ShareFile is an enterprise `}follow-me" data solution that makes it easy for users to store, sync and share data securely from any device, anywhere!"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/citrix-sharefile.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Citrix ShareFile Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(120, 190, 32, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Citrix ShareFile is an enterprise "follow-me" data solution that makes it easy for users to store, sync and share data securely from any device, anywhere!</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File</div>
  <div>Triggers when a new file is added to the chosen folder.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Note</div>
  <div>Adds a note in the chosen folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add URL</div>
  <div>Adds a URL in the chosen folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Folder</div>
  <div>Creates a folder in the chosen folder. If home is chosen will create a folder in the home directory.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client User</div>
  <div>Creates a ShareFile user with the given information.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload File</div>
  <div>Allows user to upload a file to the selected folder.</div>
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
          <title>Citrix ShareFile</title>
          <meta name="description" content={`Citrix ShareFile is an enterprise `}follow-me" data solution that makes it easy for users to store, sync and share data securely from any device, anywhere!" />
        </>
      ),
    },
  };
}
