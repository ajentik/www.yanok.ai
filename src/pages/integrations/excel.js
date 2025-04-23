import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Microsoft Excel"
      description={`Microsoft's Excel is a spreadsheet application used by millions of users across the world. It is part of the Office ecosystem and is considered the industry standard for spreadsheets. Only files on OneDrive for Business (available with Office 365 and Sharepoint server) are supported at this time with Zapier.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/excel.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Microsoft Excel Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(32, 114, 69, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Microsoft\'s Excel is a spreadsheet application used by millions of users across the world. It is part of the Office ecosystem and is considered the industry standard for spreadsheets. Only files on OneDrive for Business (available with Office 365 and Sharepoint server) are supported at this time with Zapier.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Row</div>
  <div>Triggers when a new row is added to a worksheet in a spreadsheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Row in Table</div>
  <div>Triggers when a new row is added to a table in a spreadsheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Worksheet</div>
  <div>Triggers when a new worksheet is added to a spreadsheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Row</div>
  <div>Triggers when a row is added or updated in a worksheet.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Row</div>
  <div>Adds a new row to the end of a worksheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Row to Table</div>
  <div>Adds a new row to the end of a specific table.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Spreadsheet</div>
  <div>Creates a new spreadsheet</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Row</div>
  <div>Updates a row in a specific worksheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Row</div>
  <div>Finds a row by a column and value. Returns the entire row if one is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Row</div>
  <div>Finds or creates a specific find row.</div>
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
          <title>Microsoft Excel</title>
          <meta name="description" content={`Microsoft's Excel is a spreadsheet application used by millions of users across the world. It is part of the Office ecosystem and is considered the industry standard for spreadsheets. Only files on OneDrive for Business (available with Office 365 and Sharepoint server) are supported at this time with Zapier.`} />
        </>
      ),
    },
  };
}
