import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PDF Blocks"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pdf-blocks.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PDF Blocks Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(240, 0, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">PDF actions for your zaps: Merge PDF documents, protect PDFs with a password, watermark PDF documents, and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Password to PDF</div>
  <div>Protect a PDF document with a password. Encrypt the PDF document to prevent unauthorized access.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Image Watermark to PDF</div>
  <div>Add an image watermark to each page of a PDF document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Text Watermark to PDF</div>
  <div>Add a text watermark to each page of a PDF document. Choose from several watermark templates.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Extract Pages From PDF</div>
  <div>Extract one or more pages from a PDF document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Merge PDF Documents</div>
  <div>Combine multiple PDF documents into a single PDF document.</div>
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
          <title>PDF Blocks</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
