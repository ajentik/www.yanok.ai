import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PandaDoc"
      description={`PandaDoc is an all-in-one software that streamlines your sales workflows. Create, send, track, and eSign client-facing documents designed to win more business.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pandadoc.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PandaDoc Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(104, 182, 120, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">PandaDoc is an all-in-one software that streamlines your sales workflows. Create, send, track, and eSign client-facing documents designed to win more business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Document Completed</div>
  <div>Triggers when a document is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Status Changed</div>
  <div>Triggers when a document status changes to draft, sent, viewed, completed, paid, etc.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Paid</div>
  <div>Triggers when a document is paid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Sent</div>
  <div>Triggers when a document is sent.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Attachment</div>
  <div>Create an attachment for a document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact [Deprecated]</div>
  <div>Create a new contact in PandaDoc.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document</div>
  <div>Create a document from a template.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Create a new contact or update an existing one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Document</div>
  <div>Find a document by name, status, and other parameters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Document Attachments</div>
  <div>Get files attached to a document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Document by ID</div>
  <div>Get detailed data about a document.</div>
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
          <title>PandaDoc</title>
          <meta name="description" content={`PandaDoc is an all-in-one software that streamlines your sales workflows. Create, send, track, and eSign client-facing documents designed to win more business.`} />
        </>
      ),
    },
  };
}
