import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zoho CRM"
      description={`Zoho CRM is a web-based CRM designed to attract, retain, and satisfy customers to grow your business.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zoho-crm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zoho CRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(239, 70, 62, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Zoho CRM is a web-based CRM designed to attract, retain, and satisfy customers to grow your business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created. If you are on a paid plan for the Zoho CRM then it is advisable to use New Module Entry (Instant) trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is created. If you are on a paid plan for the Zoho CRM then it is advisable to use New Module Entry (Instant) trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Module Entry</div>
  <div>Triggers instantaneously when any entry is created in the specified module.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Contact</div>
  <div>Triggers when a new contact is added or modified in Zoho. If you are on a paid plan for the Zoho CRM then it is advisable to use New/Updated Module Entry (Instant) trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Lead</div>
  <div>Triggers when a new lead is added or modified in Zoho. If you are on a paid plan for the Zoho CRM then it is advisable to use New/Updated Module Entry (Instant) trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New/Updated Module Entry</div>
  <div>Triggers instantaneously when any entry is created or updated in the specified module.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new active user is added to your Zoho CRM account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Module Entry</div>
  <div>Triggers instantaneously when a module entry is updated</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Attachment</div>
  <div>Add attachment to the selected Module entry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag</div>
  <div>Add new tag to existing module entries</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Convert Lead</div>
  <div>Convert an existing lead to contact and account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Module Entry</div>
  <div>Creates a new entry in a module</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Module Entry</div>
  <div>Update existing entry in the selected module</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Related Module Entry</div>
  <div>Relates an entry in this module with an entry in another module</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Module Entry</div>
  <div>Create or update module entries</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Module Entry</div>
  <div>Finds an entry in a module</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Create contact if contact does not exist</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Lead</div>
  <div>Create Lead if contact does not exist</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Module Entry</div>
  <div>Create module entry if entry does not exist</div>
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
          <title>Zoho CRM</title>
          <meta name="description" content={`Zoho CRM is a web-based CRM designed to attract, retain, and satisfy customers to grow your business.`} />
        </>
      ),
    },
  };
}
