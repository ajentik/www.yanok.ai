import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Spreadsheet.com"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/spreadsheetcom.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Spreadsheet.com Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(30, 113, 237, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Spreadsheet.com is the all-in-one spreadsheet for teams</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Column Value Changed</div>
  <div>Triggers when a column value is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Row Created</div>
  <div>Triggers when data is entered in to a row.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Row Created Using Form</div>
  <div>Triggers when a new row is created using a specific form.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Row Updated</div>
  <div>Triggers when a row is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Select Field Changes (A -> B)</div>
  <div>Triggers when a select column value changes from a specific value to another specific value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Select Field Changes (Specific Value)</div>
  <div>Triggers when a select column value changes to a specific value.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Row</div>
  <div>Creates a new row.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Row</div>
  <div>Updates an existing row.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Worksheet Row</div>
  <div>Find a worksheet row by looking up a field value.</div>
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
          <title>Spreadsheet.com</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
