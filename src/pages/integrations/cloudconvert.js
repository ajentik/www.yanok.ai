import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CloudConvert"
      description={`CloudConvert converts files between more than 200 supported formats: documents, image, spreadsheet, presentation, audio, video and more!`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/cloudconvert.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CloudConvert Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(181, 56, 54, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">CloudConvert converts files between more than 200 supported formats: documents, image, spreadsheet, presentation, audio, video and more!</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Job</div>
  <div>Triggers when a new job is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Failed</div>
  <div>Triggers when a job failed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Finished</div>
  <div>Triggers when a job finished.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Watermark to a File</div>
  <div>Add a watermark to a PDF file, to an image or to a video.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Archive</div>
  <div>Create a ZIP, RAR... archive.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Capture a Website</div>
  <div>Creates job to capture a website as PDF or create a website screenshot as JPG or PNG.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Convert a File</div>
  <div>Creates job to convert a file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Merge Files to PDF</div>
  <div>Merge multiple files into one single PDF.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Optimize a File</div>
  <div>Creates job to optimize a file.</div>
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
          <title>CloudConvert</title>
          <meta name="description" content={`CloudConvert converts files between more than 200 supported formats: documents, image, spreadsheet, presentation, audio, video and more!`} />
        </>
      ),
    },
  };
}
