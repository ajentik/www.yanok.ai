import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SiteCapture"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sitecapture.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SiteCapture Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(37, 165, 228, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SiteCapture is a field reporting tool to collect photos and data from a job site. SiteCapture is used in home service industries such as solar to improve time and accuracy of site survey and system installations. Take photos and sync in real time for the most advanced technology in field services.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Project Status Updated</div>
  <div>Triggers when the project status has been updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Archive Project</div>
  <div>Action to archive an existing project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign Project</div>
  <div>Action to assign an existing project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Action to create a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Project</div>
  <div>Action to send an existing project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Action to update an existing project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Company by Key</div>
  <div>Search for a company by key.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project by Id</div>
  <div>Search for a project by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User by Id</div>
  <div>Search for a user by id.</div>
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
          <title>SiteCapture</title>
        </>
      ),
    },
  };
}
