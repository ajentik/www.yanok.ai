import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ezidox"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ezidox.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ezidox Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(2, 125, 187, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Ezidox is a cloud-based platform for automating and simplifying the collection and exchange of documents required for transactions.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Application Created</div>
  <div>Triggers when a new application is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Application Status Updated</div>
  <div>Triggers when an application status has been updated (not via B2B services).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Accepted</div>
  <div>Triggers when a document is accepted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Not Relevant</div>
  <div>Triggers when a document is marked as not relevant.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Rejected</div>
  <div>Triggers when a document is rejected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Uploaded</div>
  <div>Triggers when a new document is uploaded.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Accept Document</div>
  <div>Accept document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Stakeholder</div>
  <div>Add Stakeholder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Comment Document</div>
  <div>Add comment to document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Application</div>
  <div>Creates a new application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Collector</div>
  <div>Creates a new collector.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reject Document</div>
  <div>Reject document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Stakeholder</div>
  <div>Remove Stakeholder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Document</div>
  <div>Upload document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Application</div>
  <div>Finds an application with given filters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Template</div>
  <div>Finds a Document Template by its name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Template Set</div>
  <div>Finds a Document Template Set.</div>
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
          <title>ezidox</title>
        </>
      ),
    },
  };
}
