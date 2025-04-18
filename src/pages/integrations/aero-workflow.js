import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Aero Workflow"
      description="Aero Workflow is a workflow application for accountants by accountants."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/aero-workflow.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Aero Workflow Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(54, 168, 214, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Aero Workflow is a workflow application for accountants by accountants.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Company Names</div>
  <div>Trigger for Company dynamic dropdown.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Appointment</div>
  <div>Creates a new Aero Appointment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Email Aero</div>
  <div>Creates a new Aero Email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note Aero</div>
  <div>Creates a new Aero Other.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new Aero Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Vault Entry</div>
  <div>Creates a new Vault Entry for specific company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Finds an existing company.</div>
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
          <title>Aero Workflow</title>
          <meta name="description" content="Aero Workflow is a workflow application for accountants by accountants." />
        </>
      ),
    },
  };
}
