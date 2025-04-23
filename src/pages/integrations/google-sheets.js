import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Google Sheets"
      description={`Create, edit, and share spreadsheets wherever you are with Google Sheets, and get automated insights from your data.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/google-sheets.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Google Sheets Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 162, 86, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Create, edit, and share spreadsheets wherever you are with Google Sheets, and get automated insights from your data.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Spreadsheet Row (Team Drive)</div>
  <div>Triggered when a new row is added to the bottom of a spreadsheet - works best with Team Drives.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Spreadsheet Row</div>
  <div>Triggered when a new row is added to the bottom of a spreadsheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Spreadsheet</div>
  <div>Triggered when you create a new spreadsheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Spreadsheet Row (Team Drive)</div>
  <div>Triggered when a new row is added or modified in a spreadsheet - works best with Team Drives.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Spreadsheet Row</div>
  <div>Triggered when a new row is added or modified in a spreadsheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Worksheet</div>
  <div>Triggered when you create a new worksheet in a spreadsheet.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Spreadsheet Column</div>
  <div>Create a new column in a specific spreadsheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Spreadsheet Row</div>
  <div>Create a new row in a specific spreadsheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Multiple Spreadsheet Rows</div>
  <div>Create one or more new rows in a specific spreadsheet (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Copy Worksheet</div>
  <div>Create a new worksheet by copying an existing worksheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Spreadsheet</div>
  <div>Create a blank spreadsheet or duplicate an existing spreadsheet. Optionally, provide headers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Worksheet</div>
  <div>Create a blank worksheet with a title. Optionally, provide headers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Spreadsheet Row</div>
  <div>Deletes the content of a row in a specific spreadsheet. Deleted rows will appear as blank rows in your spreadsheet. Please use with caution.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Format Spreadsheet Row</div>
  <div>Format a row in a specific spreadsheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Spreadsheet Row</div>
  <div>Update a row in a specific spreadsheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Spreadsheet Row(s)</div>
  <div>Update one or more new rows in a specific spreadsheet (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Spreadsheet Rows (output as Line Items)</div>
  <div>Finds many matched rows (500 max.) by a column and value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Worksheet</div>
  <div>Finds a worksheet by title.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Many Spreadsheet Rows (Advanced, output as Line Items)</div>
  <div>Returns many rows (500 max.) as a single JSON value and flat rows (line items).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Spreadsheet Row</div>
  <div>Finds a row by a column and value. Returns the entire row if one is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Worksheet</div>
  <div>Finds or creates a specific find worksheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Row</div>
  <div>Finds or creates a specific lookup row.</div>
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
          <title>Google Sheets</title>
          <meta name="description" content={`Create, edit, and share spreadsheets wherever you are with Google Sheets, and get automated insights from your data.`} />
        </>
      ),
    },
  };
}
