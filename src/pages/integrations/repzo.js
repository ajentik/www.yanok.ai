import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Repzo"
      description="A Complete Sales / Field Force Automation Platform for managing Sales, Marketing and Service Providers which provides you with real time coverage analytics"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/repzo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Repzo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(107, 43, 132, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">A Complete Sales / Field Force Automation Platform for managing Sales, Marketing and Service Providers which provides you with real time coverage analytics</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when you create a new client, Creating clients in Bulk will not fire this hook.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Form Entry</div>
  <div>Triggers when a new form entry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice/Return</div>
  <div>Triggers when a new Invoice/Return is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Retail Execution</div>
  <div>Triggers when a new retail execution entry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sales Order</div>
  <div>Triggers when a new sales order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Visit End</div>
  <div>Triggers when a new visit ends.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Visit Start</div>
  <div>Triggers when a new visit starts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Workday End</div>
  <div>Triggers when a new workday ends.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Workday Start</div>
  <div>Triggers when a new workday starts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Work Order</div>
  <div>Triggers when a new Work order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Work Request</div>
  <div>Triggers when a new Work request is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a product</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Workorder Category</div>
  <div>Creates a Workorder Category.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Work Order</div>
  <div>Creates a work order for CMMS module.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Work Request</div>
  <div>Creates a work request for CMMS module.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Client</div>
  <div>Finds a Client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Product</div>
  <div>Search for a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Workorder Category</div>
  <div>Finds a workorder category.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Client</div>
  <div>Finds a Client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Product.</div>
  <div>Search for a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Workorder Category</div>
  <div>Finds a workorder category.</div>
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
          <title>Repzo</title>
          <meta name="description" content="A Complete Sales / Field Force Automation Platform for managing Sales, Marketing and Service Providers which provides you with real time coverage analytics" />
        </>
      ),
    },
  };
}
