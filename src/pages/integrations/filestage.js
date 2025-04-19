import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Filestage"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/filestage.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Filestage Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 172, 55, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Share, review and approve all your files in one place and enjoy a faster, more productive approval process</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">When File Changes Review State</div>
  <div>Triggers when a file changes its review state.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">When a New File Is Added to a Project</div>
  <div>Triggers when a new file is added to a project.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Folder</div>
  <div>Creates a folder in Filestage</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a project in Filestage</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Review Step</div>
  <div>Creates review step</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload a File</div>
  <div>Uploads a file to a defined Project and its review step</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get File by ID</div>
  <div>Get file by file ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get File Reviews</div>
  <div>Finds all reviews for a file given its ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Folder by ID</div>
  <div>Get folder by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Project by ID</div>
  <div>Get project by ID</div>
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
          <title>Filestage</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
