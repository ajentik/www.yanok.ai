import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Ivanti Service Manager"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ivanti-service-manager.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Ivanti Service Manager Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(218, 41, 28, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Ivanti Service Manager is a native Cloud and On-Premise Service Management solution that transforms service and support teams, help desks and service desks from tactical service providers to strategic business enablers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Change Request</div>
  <div>Triggers when an change request is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Incident</div>
  <div>Triggers when an incident is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Service Request</div>
  <div>Triggers when an service request is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Change Request</div>
  <div>Creates a new change request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Incident</div>
  <div>Creates a new incident.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Incident Note</div>
  <div>Adds an incident note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Service Request</div>
  <div>Creates a new service request.</div>
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
          <title>Ivanti Service Manager</title>
        </>
      ),
    },
  };
}
