import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="QuoteCloud"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/quotecloud.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        QuoteCloud Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(225, 91, 2, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">QuoteCloud is a proposal building platform that guarantees your sales team are communicating in a: consistent, compliant, accurate and efficient way, ensuring respectively that marketing, legal, product and sales departments are happy !</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Document Approved</div>
  <div>This triggers when a document is approved within your account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Created</div>
  <div>Triggers when a document is created within QuoteCloud</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Lost</div>
  <div>Triggers when the document is set to lost status</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Read</div>
  <div>Triggers when a document is opened and read within QuoteCloud</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Sent</div>
  <div>Triggers when a document is sent from your QuoteCloud account</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create New Contact</div>
  <div>Adds a new contact into the QuoteCloud contacts module.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Product</div>
  <div>Delete a product in your account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Product</div>
  <div>Adds or updates a product in the QuoteCloud product module.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document</div>
  <div>Creates a document with user details and proposal template and pricing information all potentially supplied.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Document Status</div>
  <div>Update the status of a document</div>
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
          <title>QuoteCloud</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
