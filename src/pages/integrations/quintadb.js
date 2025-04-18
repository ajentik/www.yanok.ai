import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="QuintaDB"
      description="QuintaDB is a relational online database, CRM and Web-form Builder. It's an easy web-based application with drag and drop interface."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/quintadb.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        QuintaDB Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(124, 13, 198, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">QuintaDB is a relational online database, CRM and Web-form Builder. It\'s an easy web-based application with drag and drop interface.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get All Applications</div>
  <div>Triggers to get a projects list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get All Form Fields</div>
  <div>Triggers to get all form fields</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get All Application Forms</div>
  <div>Triggers to get all project forms</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Record</div>
  <div>Triggers when a new record is added to a certain project and form.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get All Table Records</div>
  <div>Triggers to get all table/form records</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get All Table Reports</div>
  <div>Triggers to get all table reports</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Record</div>
  <div>Triggers when once a record has been changed in a table.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Record</div>
  <div>Creates a new record in QuintaDB for a form and data you select</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Record</div>
  <div>Deleted the records in the chosen table</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Cell</div>
  <div>Updated the cell value for the chosen record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Record</div>
  <div>Updated a record in QuintaDB for a form and data you select</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Records</div>
  <div>Gets All Table Records</div>
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
          <title>QuintaDB</title>
          <meta name="description" content="QuintaDB is a relational online database, CRM and Web-form Builder. It's an easy web-based application with drag and drop interface." />
        </>
      ),
    },
  };
}
