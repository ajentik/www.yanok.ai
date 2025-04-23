import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="KiSSFLOW"
      description={`KiSSFLOW is a Business Process Workflow Automation Software. KiSSFLOW empowers normal users to build workflow automation on their own on a self-service basis without requiring sophisticated technical knowledge. KiSSFLOW is used by department heads of finance, operations and human resources to streamline their functions.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/kissflow.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        KiSSFLOW Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(67, 160, 71, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">KiSSFLOW is a Business Process Workflow Automation Software. KiSSFLOW empowers normal users to build workflow automation on their own on a self-service basis without requiring sophisticated technical knowledge. KiSSFLOW is used by department heads of finance, operations and human resources to streamline their functions.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Change of Workflow Step</div>
  <div>Triggers when a request in a particular workflow process moves from one step to another step. The action performed to initiate this move like Approve or Reject will be provided as an additional input to the trigger.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Approve a Request</div>
  <div>Approve a request to move it to its next step in the workflow process.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Submit a New Request</div>
  <div>Initiates a new request for a chosen process , populates requisite fields and then submits the request for processing.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Draft Request</div>
  <div>Creates a new request for a chosen process , populates requisite fields and saves it in the \'Draft\' folder of KiSSFLOW.</div>
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
          <title>KiSSFLOW</title>
          <meta name="description" content={`KiSSFLOW is a Business Process Workflow Automation Software. KiSSFLOW empowers normal users to build workflow automation on their own on a self-service basis without requiring sophisticated technical knowledge. KiSSFLOW is used by department heads of finance, operations and human resources to streamline their functions.`} />
        </>
      ),
    },
  };
}
