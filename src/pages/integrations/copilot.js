import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Copilot"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/copilot.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Copilot Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(9, 170, 108, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Create a client portal to combine messaging, payments, and other modules to offer clients a branded, streamlined experience.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Client Activated</div>
  <div>Triggers when a client authenticates in the Portal for the first time</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Created</div>
  <div>Triggers when a new client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Clients</div>
  <div>Lists the clients.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Updated</div>
  <div>Triggers when a client user is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Company Created</div>
  <div>Triggers when a company gets created in the Portal for the first time</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Companies</div>
  <div>Lists the companies.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Form Response Completed</div>
  <div>Triggers when a form response has been completed by a recipient</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a new client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Client</div>
  <div>Update a client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Folder</div>
  <div>Creates a folder in a specified file channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Form Response</div>
  <div>Asks a Recipient (a Client) to fill out a form. One recipient can be assigned one form.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Client</div>
  <div>Search for a client by ID, email, or company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Company</div>
  <div>Search for a company by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a File Channel</div>
  <div>Search for a file channel by group type and member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Client</div>
  <div>Search for a client by ID, email, or company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Company</div>
  <div>Search for a company by name.</div>
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
          <title>Copilot</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
