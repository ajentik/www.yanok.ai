import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Vtiger CRM"
      description="Vtiger CRM is more than just a CRM. At its heart, Vtiger CRM enables salespersons and support staff do more through an easy but powerful interface. With built-in solutions that range from email marketing to activity and project management and beyond, Vtiger CRM provides an integrated solution to drive business growth."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/vtiger.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Vtiger CRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(19, 175, 223, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Vtiger CRM is more than just a CRM. At its heart, Vtiger CRM enables salespersons and support staff do more through an easy but powerful interface. With built-in solutions that range from email marketing to activity and project management and beyond, Vtiger CRM provides an integrated solution to drive business growth.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Created or Updated</div>
  <div>Triggers when a new contact is created or existing lead is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Created or Updated</div>
  <div>Triggers when a new lead is created or existing lead is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Case</div>
  <div>Triggers when a new Case is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new Invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new Lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when a new Opportunity is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Organization</div>
  <div>Triggers when a new Organization is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a new Product is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Service</div>
  <div>Triggers when a new Service is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a new Ticket is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Todo</div>
  <div>Triggers when a new todo is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opportunity Created or Updated</div>
  <div>Triggers when a new opportunity is created or existing opportunity is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Case</div>
  <div>Creates a new Case.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Creates or updates contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Create a new Event in Vtiger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Lead</div>
  <div>Creates or updates lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Opportunity</div>
  <div>Creates or updates opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Organization</div>
  <div>Creates a new Organization/Account/Company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a new Product in Vtiger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Service</div>
  <div>Creates a new Service item in Vtiger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket</div>
  <div>Creates a new Ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Todo</div>
  <div>Create a new To do in Vtiger.</div>
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
          <title>Vtiger CRM</title>
          <meta name="description" content="Vtiger CRM is more than just a CRM. At its heart, Vtiger CRM enables salespersons and support staff do more through an easy but powerful interface. With built-in solutions that range from email marketing to activity and project management and beyond, Vtiger CRM provides an integrated solution to drive business growth." />
        </>
      ),
    },
  };
}
