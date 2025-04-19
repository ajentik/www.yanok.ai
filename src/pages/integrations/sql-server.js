import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SQL Server"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sql-server.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SQL Server Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(213, 46, 6, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SQL server (or MS SQL) is a top of the line database geared for the cloud</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Column</div>
  <div>Triggered when you add a new column.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Row</div>
  <div>Triggered when you add a new row.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Row (Custom Query)</div>
  <div>Triggered when new rows are returned from a custom query that you provide.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Table</div>
  <div>Triggered when you add a new table.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Row</div>
  <div>Triggered when a new row is added or modified.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Row</div>
  <div>Adds a new row.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Row</div>
  <div>Updates an existing row.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Row</div>
  <div>Finds a row in a table via a lookup column.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Row via Custom Query</div>
  <div>Finds a row in a table via a custom query you control.</div>
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
          <title>SQL Server</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
