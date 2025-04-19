import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Precisely"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/precisely.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Precisely Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(20, 124, 189, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Precisely provides contract automation, e-signatures, streamlined approvals, digital archiving and smart reminders for all your contracts, all in the cloud.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contract Created</div>
  <div>Triggers when a new contract is created for an organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contract Project Created</div>
  <div>Triggers when a new contract project is created for an organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contract Signed</div>
  <div>Triggers when a contract is signed by all signees.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Document</div>
  <div>Adds a document to a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Metadata Point to a Document</div>
  <div>Adds a metadata point to a document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload PDF to Project</div>
  <div>Upload PDF to Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contract From Template</div>
  <div>Creates a contract project from a template.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Project for Signing</div>
  <div>Sends every contract in a project out for signing to all signees.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Signee to Project</div>
  <div>Adds a signee to all contracts for a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Contract for Signing</div>
  <div>Sends a contract out for signing to all signees.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Signee to a Contract</div>
  <div>Adds a signee to a contract.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Document</div>
  <div>Finds a document for an organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Metadata Points for a Document</div>
  <div>Finds metadata points for a document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contract Project</div>
  <div>Finds a contract project for an organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Template</div>
  <div>Finds a template for an organization.</div>
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
          <title>Precisely</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
