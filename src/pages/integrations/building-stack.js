import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Building Stack"
      description="Building Stack is an all-in-one property management software that helps you; manage tenants, collect rent payments and resolve work orders."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/building-stack.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Building Stack Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(31, 39, 135, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Building Stack is an all-in-one property management software that helps you; manage tenants, collect rent payments and resolve work orders.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Inquiry Is Updated</div>
  <div>Triggers when an Inquiry is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lease</div>
  <div>Triggers when a new lease is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a new ticket is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inquiry Is Created</div>
  <div>Triggers when a new Inquiry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Is Created</div>
  <div>Triggers when a new lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Contact Is Created</div>
  <div>Triggers when a new lead contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Showing Is Created</div>
  <div>Triggers when a new Showing is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tenant Is Created</div>
  <div>Triggers when a new tenant is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Online Payment Funded</div>
  <div>Triggers when an online rent payment is sent to buildings bank account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Successful Online Payment</div>
  <div>Triggers when a new online payment is processed successfully.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Showing Is Updated</div>
  <div>Triggers when an existing Showing is updated</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Inquiry</div>
  <div>Create a new lead Inquiry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Create a lead (potential tenant)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead Contact</div>
  <div>Create a new lead contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tenant</div>
  <div>Create a new tenant</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Internal Ticket</div>
  <div>Creates an internal employee only ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tenant Ticket</div>
  <div>Creates a tenant ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead Contact</div>
  <div>Find a Lead Contact by its ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead Contact IDs</div>
  <div>Find Lead Contact IDs by providing a search query</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Unit Listings</div>
  <div>Get a list of vacant units from listings section</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Building</div>
  <div>Finds a building by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Employee</div>
  <div>Finds employee by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lease</div>
  <div>Finds a lease by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Tenant</div>
  <div>Finds tenant by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Unit</div>
  <div>Finds unit by id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Vendor</div>
  <div>Finds Vendor by ID</div>
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
          <title>Building Stack</title>
          <meta name="description" content="Building Stack is an all-in-one property management software that helps you; manage tenants, collect rent payments and resolve work orders." />
        </>
      ),
    },
  };
}
