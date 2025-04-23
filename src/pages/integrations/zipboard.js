import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="zipBoard"
      description={`zipBoard is a web-based visual feedback and bug tracking tool that helps developers, testers and project managers collaborate during product development.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zipboard.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        zipBoard Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(43, 222, 115, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">zipBoard is a web-based visual feedback and bug tracking tool that helps developers, testers and project managers collaborate during product development.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Files</div>
  <div>Triggers when a new file is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project.</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tasks</div>
  <div>Triggers when a new task is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Files</div>
  <div>Create\'s a new file</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sharereviewurls</div>
  <div>Creates a new sharereviewurls.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tasks</div>
  <div>Creates a new tasks.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Files</div>
  <div>Finds a files by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds a project by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Review Urls</div>
  <div>Search for a Review Url by project and file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Tasks</div>
  <div>Finds a tasks by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Files</div>
  <div>Finds a files by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Finds a project by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Sharereviewurls</div>
  <div>Search for a Review Url by project and file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Tasks</div>
  <div>Finds a tasks by searching.</div>
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
          <title>zipBoard</title>
          <meta name="description" content={`zipBoard is a web-based visual feedback and bug tracking tool that helps developers, testers and project managers collaborate during product development.`} />
        </>
      ),
    },
  };
}
