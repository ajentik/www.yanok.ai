import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Salesforce"
      description={`Salesforce is a leading enterprise customer relationship manager (CRM) application.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/salesforce.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Salesforce Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(23, 152, 193, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Salesforce is a leading enterprise customer relationship manager (CRM) application.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Outbound Message</div>
  <div>Triggers when a new outbound message is received in Salesforce.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Record</div>
  <div>Triggers when a record of the specified Salesforce object (ie. Contact, Lead, Opportunity, etc.) is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Field on Record</div>
  <div>Triggers when a field of your choosing (ie. email address, status) is updated on any record of a specified Salesforce object (ie. Contact, Lead, Opportunity, etc.).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Record</div>
  <div>Triggers when any record of the specified Salesforce object (ie. Contact, Lead, Opportunity, etc.) is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to Campaign</div>
  <div>Adds an existing contact to an existing campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add File to Record</div>
  <div>Adds an existing file to an existing Record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Lead to Campaign</div>
  <div>Adds an existing lead to an existing campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Attachment</div>
  <div>Creates a new attachment (max 25MB).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact in Salesforce.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create File</div>
  <div>Creates a new File (max 25MB).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new lead in Salesforce.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Record</div>
  <div>Creates a new record of a specified Salesforce object (ie. Contact, Lead, Opportunity, etc.).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Record (UTC)</div>
  <div>Creates a new record of a specified Salesforce object (ie. Contact, Lead, Opportunity, etc.).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates an existing contact in Salesforce.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Updates an existing lead in Salesforce.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Record</div>
  <div>Updates an existing record for a specified Salesforce object (ie. Contact, Lead, Opportunity, etc.).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Record (UTC)</div>
  <div>Updates an existing record for a specified Salesforce object (ie. Contact, Lead, Opportunity, etc.).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Record</div>
  <div>Finds a record of a specified Salesforce object by a field and value you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Record(s)</div>
  <div>Finds a record of a specified Salesforce object by a field and value you choose (with line-item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Record by Query</div>
  <div>Finds a record of a Salesforce object using a Salesforce Object Query (SOQL) WHERE clause.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Record</div>
  <div>Find a record. Optionally create a record if not found.</div>
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
          <title>Salesforce</title>
          <meta name="description" content={`Salesforce is a leading enterprise customer relationship manager (CRM) application.`} />
        </>
      ),
    },
  };
}
