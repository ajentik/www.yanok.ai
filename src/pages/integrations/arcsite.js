import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ArcSite"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/arcsite.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ArcSite Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(227, 87, 28, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ArcSite is the all-in-one drawing & mobile sales platform for service professionals including mobile drawing, estimation, and takeoff tools.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Drawing Updated</div>
  <div>Triggers when a drawing is edited and uploaded from ArcSite App as a new version.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Drawing Created</div>
  <div>Triggers when a new drawing is uploaded to ArcSite Cloud.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Created</div>
  <div>Triggers when a new project is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Create a New Project and also optionally set other information, such as customer info, sales rep info...</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Export Proposal PDF</div>
  <div>Export Proposal PDF</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Add Collaborator</div>
  <div>Add a collaborator to the specified project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Update a Project, such as name, information of customer, sales rep...</div>
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
          <title>ArcSite</title>
        </>
      ),
    },
  };
}
