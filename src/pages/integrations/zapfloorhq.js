import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ZapFloorHQ"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zapfloorhq.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ZapFloorHQ Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 132, 224, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ZapFloorHQ really simplifies our billing process and allows us to easily generate all our monthly invoices and track the payments.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Customer Created</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Created</div>
  <div>Triggers when a new deal is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Created</div>
  <div>Triggers when a new lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Created</div>
  <div>Triggers when a new user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Visitor Created</div>
  <div>Triggers when a new visitor is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a new deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead Contact</div>
  <div>Creates a new lead Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Find Lead</div>
  <div>Create or find lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Updates a lead resource</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer by Name</div>
  <div>Finds a customer by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Customer by ID</div>
  <div>Find a customer by its ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Customers</div>
  <div>Search customers using a filter</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Deal by ID</div>
  <div>Find a deal by its ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Deals</div>
  <div>Search deals using a filter</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead by Name</div>
  <div>Finds a lead by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Lead by ID</div>
  <div>Find a lead by its ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Leads</div>
  <div>Search leads using a filter</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Deal</div>
  <div>Find a deal by its ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Lead</div>
  <div>Finds a lead by searching.</div>
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
          <title>ZapFloorHQ</title>
        </>
      ),
    },
  };
}
