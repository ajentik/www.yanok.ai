import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Airtable"
      description="Organize anything with Airtable, a modern database created for everyone. Airtable is a fast and flexible way to create tables to keep track of anything, from sales leads to vacation planning to inventory management."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/airtable.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Airtable Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 80, 93, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Organize anything with Airtable, a modern database created for everyone. Airtable is a fast and flexible way to create tables to keep track of anything, from sales leads to vacation planning to inventory management.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Record</div>
  <div>Triggers when a new record is created. Optionally: triggers when any record (new or existing) is first added to a selected view.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Record</div>
  <div>Triggers when a record is created or updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Record</div>
  <div>Creates a new record with auto-populating fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Records (With Line Item Support)</div>
  <div>Creates up to 10 multiple new records with line item input</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Record</div>
  <div>Update the values of specific cells in an Airtable record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Many Records (With Line Item Support)</div>
  <div>Finds multiple rows (10 max) using Airtable\'s search syntax. Returned as line items.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Record</div>
  <div>Use simple field search or Airtable\'s powerful formula syntax to find a matching Airtable record. Learn more at</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Record(s) (With Line Item Support)</div>
  <div>Find or Create Record(s)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Record</div>
  <div>Find or Create Record</div>
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
          <title>Airtable</title>
          <meta name="description" content="Organize anything with Airtable, a modern database created for everyone. Airtable is a fast and flexible way to create tables to keep track of anything, from sales leads to vacation planning to inventory management." />
        </>
      ),
    },
  };
}
