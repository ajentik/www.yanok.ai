import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Flexie CRM"
      description={`Flexie CRM solution is built to help sales teams stay organized, nurture leads, close more deals, and improve overall productivity.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/flexie-crm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Flexie CRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(74, 163, 223, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Flexie CRM solution is built to help sales teams stay organized, nurture leads, close more deals, and improve overall productivity.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Update Account</div>
  <div>Triggers when an account is updated within a workflow with a Zapier action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggers when new account is added within a workflow with a Zapier action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is added within a workflow with a Zapier action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when new deal is added within a workflow with a Zapier action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when new lead is added within a workflow with a Zapier action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Triggers when a contact is updated within a workflow with a Zapier action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Custom Entity</div>
  <div>Triggers when a new Custom Entity is created within a workflow with a Zapier action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Custom Entity</div>
  <div>Triggers when a Custom Entity is updated within a workflow with a Zapier action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal</div>
  <div>Triggers when deal is updated within a workflow with a Zapier action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Triggers when lead is updated within a workflow with a Zapier action.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Creates a new account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Custom Entity</div>
  <div>Creates a Custom Entity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a new deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Push to Dynamic Endpoint</div>
  <div>Push record to Dynamic Endpoint.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Account</div>
  <div>Updates an account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Custom Entity</div>
  <div>Updates a Custom Entity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal</div>
  <div>Updates a deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Updates a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Account</div>
  <div>Finds an existing account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find an existing Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Custom Entity</div>
  <div>Finds an Existing Custom Entity Record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Deals</div>
  <div>Finds an existing Deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead</div>
  <div>Find an existing Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create an Account</div>
  <div>Find or Create an Account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Find or Create Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Custom Field</div>
  <div>Find or Create Custom Field</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Deal</div>
  <div>Find or Create a Deal</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Lead</div>
  <div>Find or Create Lead</div>
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
          <title>Flexie CRM</title>
          <meta name="description" content={`Flexie CRM solution is built to help sales teams stay organized, nurture leads, close more deals, and improve overall productivity.`} />
        </>
      ),
    },
  };
}
