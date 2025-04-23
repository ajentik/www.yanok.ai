import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Mindee OCR"
      description={`Mindee OCR extracts data from the documents you use most. Included in this package are Receipt, Invoice and Passport text extraction APIs.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mindee-ocr.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Mindee OCR Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 125, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Mindee OCR extracts data from the documents you use most. Included in this package are Receipt, Invoice and Passport text extraction APIs.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Mindee API Builder Parsing</div>
  <div>Extract data from a custom document using the Mindee API Builder made API</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mindee Expense Receipt Parsing</div>
  <div>Extract data from an receipt using the Mindee Receipt Parsing API</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mindee French ID Parsing</div>
  <div>Extract data from an French ID Card using the Mindee Carte Nationale d\'Identité Parsing API</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mindee Invoice Parsing</div>
  <div>Extract data from an Invoice using the Mindee Invoice Parsing API</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mindee International Passport Parsing</div>
  <div>Instantly extract data from any passport using the Mindee Passport Extraction API</div>
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
          <title>Mindee OCR</title>
          <meta name="description" content={`Mindee OCR extracts data from the documents you use most. Included in this package are Receipt, Invoice and Passport text extraction APIs.`} />
        </>
      ),
    },
  };
}
