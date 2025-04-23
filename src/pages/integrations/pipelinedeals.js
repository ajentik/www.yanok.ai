import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pipeline CRM"
      description={`Simple and useful CRM software in the cloud. Sell more today with sales tracking software. Our CRM software will help organize, track, and manage your deals, leads, and contacts.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pipelinedeals.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pipeline CRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(15, 108, 184, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Simple and useful CRM software in the cloud. Sell more today with sales tracking software. Our CRM software will help organize, track, and manage your deals, leads, and contacts.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Deal Status Changed</div>
  <div>Triggers when a deal in your PipelineDeals account is updated from one status to another.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Moved Deal</div>
  <div>Triggers when a deal in your PipelineDeals account is moved from one deal stage to another.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company is created in your PipelineDeals account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a new deal is created in your PipelineDeals account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new person, lead, or contact is created in your PipelineDeals account.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Creates a new activity associated to an existing person, company or deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates a new calendar event in your Pipeline account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new calendar task in your PipelineDeals account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company in your PipelineDeals account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a new deal in your PipelineDeals account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person</div>
  <div>Creates a new person in your PipelineDeals account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Find an existing user on your PipelineDeals account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move Deal to Next Stage</div>
  <div>Moves a deal to next stage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Updates an existing company in your PipelineDeals account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal</div>
  <div>Updates an existing deal in your PipelineDeals account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person</div>
  <div>Updates an existing person in your PipelineDeals account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Find an existing company in your PipelineDeals account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Deal</div>
  <div>Find an existing deal in your PipelineDeals account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Find an existing person on your Pipeline account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Company</div>
  <div>Find or Create Company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Deal</div>
  <div>Find or Create Deal</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Person</div>
  <div>Find an existing person on your Pipeline account.</div>
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
          <title>Pipeline CRM</title>
          <meta name="description" content={`Simple and useful CRM software in the cloud. Sell more today with sales tracking software. Our CRM software will help organize, track, and manage your deals, leads, and contacts.`} />
        </>
      ),
    },
  };
}
