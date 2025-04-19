import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Bullhorn CRM"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/bullhorn-crm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Bullhorn CRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(249, 109, 43, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Bullhorn provides cloud-based CRM solutions for companies in service-based industries. Its data capture and customer insight technology puts the most up-to-date and powerful information at users\' fingertips to give them everything they need to win customers and keep them happy.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Candidate</div>
  <div>Triggers when a new Candidate is added to Bullhorn.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Candidate</div>
  <div>Triggers when a Candidate is updated in Bullhorn.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New ClientContact</div>
  <div>Triggers when a new ClientContact is added to Bullhorn.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entity Added to Tearsheet</div>
  <div>Triggers when an entity is added to a specified Tearsheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated ClientContact</div>
  <div>Triggers when a ClientContact is updated in Bullhorn.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new JobOrder is added to Bullhorn.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new Lead is added to Bullhorn.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Lead</div>
  <div>Triggers when a Lead is updated in Bullhorn.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when a new Opportunity is added to Bullhorn.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Opportunity</div>
  <div>Triggers when a Opportunity is updated in Bullhorn.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new Task is added to Bullhorn.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Candidate</div>
  <div>Creates a new Candidate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create ClientContact</div>
  <div>Creates a new ClientContact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update ClientContact</div>
  <div>Updates an existing \' ClientContact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create JobOrder</div>
  <div>Creates a new JobOrder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Updates an existing \' Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Creates a new Note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity</div>
  <div>Updates an existing \' Opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Candidate</div>
  <div>Finds an existing candidate.</div>
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
          <title>Bullhorn CRM</title>
        </>
      ),
    },
  };
}
