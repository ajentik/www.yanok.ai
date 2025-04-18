import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Alkymi"
      description="Alkymi is an intelligent data extraction and process automation application for the financial services industry."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/alkymi.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Alkymi Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(242, 110, 33, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Alkymi is an intelligent data extraction and process automation application for the financial services industry.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">When an Alkymi Event Triggers (Return Document Information)</div>
  <div>Triggers when the selected Alkymi user events occur. Sends document level data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">When an Alkymi Event Triggers (Return Record Information)</div>
  <div>Triggers when the selected Alkymi user events occur. Sends record level data.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Upload Document File</div>
  <div>Uploads a file to a Data Inbox tenant for processing.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get General API Response</div>
  <div>Provide an API url to get the API response.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Document Information</div>
  <div>Retrieve a specific document instance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Document File (Original Format)</div>
  <div>Downloads a copy of the document file posted to Data Inbox in its original format.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Document File (PDF Format)</div>
  <div>Downloads a copy of the document file posted to Data Inbox in a converted PDF format.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Record Information</div>
  <div>Retrieve a specific record instance. The returned record object may require additional parsing before using downstream in the workflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Record Field Data</div>
  <div>Pass in a record UUID to get an object containing underlying field data</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Record Field Names</div>
  <div>Pass in a record UUID to get a list of field names</div>
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
          <title>Alkymi</title>
          <meta name="description" content="Alkymi is an intelligent data extraction and process automation application for the financial services industry." />
        </>
      ),
    },
  };
}
