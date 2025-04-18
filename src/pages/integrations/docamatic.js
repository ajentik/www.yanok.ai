import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Docamatic"
      description="Docamatic allows you to generate PDF documents."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/docamatic.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Docamatic Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(31, 158, 245, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Docamatic allows you to generate PDF documents.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Document</div>
  <div>Triggers when a new document is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Convert URL or HTML to Image</div>
  <div>Generates an image from a URL or HTML</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Convert URL or HTML to PDF</div>
  <div>Generates a PDF document from a URL or HTML</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate a PDF From a Template</div>
  <div>Generates a PDF document from a predefined template</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Password Protect PDF</div>
  <div>Password protects a PDF document</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Write to an Existing PDF</div>
  <div>Adds text, images or barcodes to an existing PDF document</div>
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
          <title>Docamatic</title>
          <meta name="description" content="Docamatic allows you to generate PDF documents." />
        </>
      ),
    },
  };
}
