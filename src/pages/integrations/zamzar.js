import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zamzar"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zamzar.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zamzar Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(50, 119, 186, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Zamzar is a file conversion tool supporting over 1,200 different conversion types including all the popular formats (Document, Images, Audio, Video).</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Conversion Job</div>
  <div>Triggers when a conversion job has completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File</div>
  <div>Triggers when a new file has been converted successfully.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Convert File</div>
  <div>Uploads a file for conversion.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Content File</div>
  <div>Creates a PDF file using content provided from any other app, for example from a form, spreadsheet, database or RSS Feed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Converted File</div>
  <div>Finds a file for a specific job id.</div>
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
          <title>Zamzar</title>
        </>
      ),
    },
  };
}
