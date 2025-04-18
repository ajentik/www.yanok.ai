import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Salpo CRM"
      description="This is an easy to use tool, used to manage CRM"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/salpo-crm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Salpo CRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(87, 132, 158, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">This is an easy to use tool, used to manage CRM</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Communication</div>
  <div>Triggers when a new Communication is saved. Apply further filters such as subject line equals = \'something\' or if it\'s standard or scheduled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Module</div>
  <div>Triggers when a new custom module is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new Contact is created (Individual or Organisation).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when a new Opportunity is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Organisation</div>
  <div>Creates a new Organisation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Individual</div>
  <div>Creates a new Individual</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Creates a new, In-progress Opportunity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Scheduled Communication</div>
  <div>Schedules a Communication</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add File to Contact</div>
  <div>Add a file to a Contact record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add File to Custom Module</div>
  <div>Add a file to a Custom Module record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add File to Opportunity</div>
  <div>Link files to an Opportunity using the file URL.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contacts by Custom Field</div>
  <div>Finds Contacts by Custom Field value</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Opportunity by ID</div>
  <div>Retrieves all Opportunity details including products</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Communication/Notes</div>
  <div>Creates a standard Communication to record previous notes</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Custom Connection</div>
  <div>Creates a Custom Connection between two Modules</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Custom Module</div>
  <div>Creates a new record of a custom Module</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Standard Connection</div>
  <div>Creates a new Standard Connection between two modules (e.g Contact to Contact, Contact to Module)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contacts</div>
  <div>Update Individuals or Organisations</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Contact Custom Connection</div>
  <div>Search for a Contact and update a custom connection between Contacts or Modules</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Custom Modules</div>
  <div>Update custom Modules</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity</div>
  <div>Update an Opportunity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contacts by ID</div>
  <div>Finds a Contact by ID and returns all Contact information</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact Custom Connection</div>
  <div>Use a Contact ID and select the Connection Type to retrieve the Connection ID. Useful for updating a Contact custom Connection.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Individuals by Email</div>
  <div>Finds Individuals using an email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Module by ID</div>
  <div>Find and retrieve a custom module record by ID. Returns standard and custom data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Module File</div>
  <div>Find a file linked to a Module. Search files using the file label or name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Organisations by Name</div>
  <div>Finds Organisations by name. Useful if you want to create or update an Organisation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Custom Connection</div>
  <div>Use a Contact ID and select the Connection Type to retrieve the Connection ID. Useful for updating a Contact custom Connection.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create an Individual</div>
  <div>Finds Individuals using an email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create an Organisation</div>
  <div>Finds Organisations by name. Useful if you want to create or update an Organisation.</div>
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
          <title>Salpo CRM</title>
          <meta name="description" content="This is an easy to use tool, used to manage CRM" />
        </>
      ),
    },
  };
}
