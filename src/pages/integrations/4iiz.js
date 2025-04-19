import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="4iiz"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/4iiz.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        4iiz Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(91, 165, 249, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">4iiz is a system that optimizes every vertical within a law firm.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Call Objections</div>
  <div>Retrieves all available call objections</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Call Outcomes</div>
  <div>Retrieves all available call outcomes</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Call Status</div>
  <div>Retrieves all available call statuses</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Call Type</div>
  <div>Retrieves all available call types</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Campaigns</div>
  <div>Triggers when a Campaign selector is opened.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Contacts</div>
  <div>Fetches all available contacts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Deal Stages</div>
  <div>Retrieves all available Deal Stages</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Event Objections</div>
  <div>Retrieves all available event objections</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Event Outcomes</div>
  <div>Retrieves all available event outcomes</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Event Type</div>
  <div>Retrieves all available event types</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Leads</div>
  <div>Get leads from the lead table</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Lead Sources</div>
  <div>Retrieves all available lead sources</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Lead Status</div>
  <div>Retrieves all available lead status</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Lost Reasons</div>
  <div>Retrieves all available Lost Reasons</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Offices</div>
  <div>Retrieves all available Offices</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Practice Areas</div>
  <div>Fetches all available practice areas.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Address</div>
  <div>Creates a new address record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Call</div>
  <div>Creates a new call record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Call Note</div>
  <div>Creates a note record for the Call</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Campaign</div>
  <div>Creates a new Campaign</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Campaign Expense</div>
  <div>Creates a new Campaign Expense</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a new Deal</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates a new Event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event Note</div>
  <div>Creates a note record for the Event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new Lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead Source</div>
  <div>Creates a new Lead Source</div>
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
          <title>4iiz</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
