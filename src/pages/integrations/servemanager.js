import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ServeManager"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/servemanager.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ServeManager Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(66, 98, 153, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ServeManager provides process servers with the tools they need run their business, while giving their law firm clients a dashboard to track the status and activity associated with service of process.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Issued</div>
  <div>Triggers when an invoice is issued.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Affidavit</div>
  <div>Triggers when a new affidavit document is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Attempt</div>
  <div>Triggers when a new attempt is logged.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Job</div>
  <div>Triggers when new job is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Court Case</div>
  <div>Creates a Court Case.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload File</div>
  <div>Upload a file to an existing job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Job</div>
  <div>Creates a new job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Create a new note on a job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Find an existing company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Court Case</div>
  <div>Find an existing court case.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Job</div>
  <div>Finds an existing job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Company</div>
  <div>Find or Create Company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Court Case</div>
  <div>Find or Create Court Case</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Job</div>
  <div>Find or Create Job</div>
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
          <title>ServeManager</title>
        </>
      ),
    },
  };
}
