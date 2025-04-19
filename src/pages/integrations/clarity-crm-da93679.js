import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Clarity CRM"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/clarity-crm-da93679.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Clarity CRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Clarity CRM is a customer relationship management tool that lets you to manage account, contacts and build invoices and orders.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Created</div>
  <div>Triggers when a new lead is created in Claritysoft CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Deleted</div>
  <div>Triggers when a lead is deleted in Claritysoft CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Edited</div>
  <div>Triggers when a lead is edited in Claritysoft CRM.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new lead in Claritysoft CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead</div>
  <div>Finds an existing lead in Claritysoft CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Account</div>
  <div>Find or Create Account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Finds an existing contact in Claritysoft CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Lead</div>
  <div>Find or Create Lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Opportunity</div>
  <div>Finds an existing opportunity in Claritysoft CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Opportunity Line</div>
  <div>Find or Create Opportunity Line</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Product</div>
  <div>Finds an existing product in Claritysoft CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Product Group</div>
  <div>Finds an existing product-group in Claritysoft CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Quotation</div>
  <div>Finds an existing quotation in Claritysoft CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Quotation Line</div>
  <div>Find or Create Quotation Line</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Sales-order</div>
  <div>Finds an existing sales-order in Claritysoft CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Sales-order Line</div>
  <div>Finds an existing sales-order line in Claritysoft CRM.</div>
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
          <title>Clarity CRM</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
