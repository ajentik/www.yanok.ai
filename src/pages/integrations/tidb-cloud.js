import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TiDB Cloud"
      description="TiDB Cloud is a fully-managed Database-as-a-Service (DBaaS) that brings TiDB, a MySQL-Compatible serverless HTAP database, to your business."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/tidb-cloud.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TiDB Cloud Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 74, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">TiDB Cloud is a fully-managed Database-as-a-Service (DBaaS) that brings TiDB, a MySQL-Compatible serverless HTAP database, to your business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Cluster</div>
  <div>Triggers when a new cluster is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Row</div>
  <div>Triggers when new rows are created. Only fetch the recently 10000 new rows.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Row (Custom Query)</div>
  <div>Triggers when new rows are returned from a custom query that you provide.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Table</div>
  <div>Triggers when a new table is created in a given database.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Cluster</div>
  <div>Creates a new cluster. Only support create a free serverless tier now.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Database</div>
  <div>Creates a new database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Row</div>
  <div>Creates a new row.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Row</div>
  <div>Updates an existing row.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Table</div>
  <div>Creates a new table.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Cluster</div>
  <div>Finds an existing Serverless tier or Dedicated tier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Database</div>
  <div>Finds an existing Database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Row</div>
  <div>Finds a row in a table via a lookup column.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Row (Custom Query)</div>
  <div>Finds a Row in a table via a custom query in your control.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Table</div>
  <div>Finds an existing table.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Cluster</div>
  <div>Finds an existing Serverless tier or Dedicated tier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Database</div>
  <div>Finds an existing Database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Table</div>
  <div>Finds an existing table.</div>
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
          <title>TiDB Cloud</title>
          <meta name="description" content="TiDB Cloud is a fully-managed Database-as-a-Service (DBaaS) that brings TiDB, a MySQL-Compatible serverless HTAP database, to your business." />
        </>
      ),
    },
  };
}
