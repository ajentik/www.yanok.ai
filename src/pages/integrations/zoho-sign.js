import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zoho Sign"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zoho-sign.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zoho Sign Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(48, 125, 209, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Zoho Sign is a complete digital signature app that allows you to securely sign, send, and manage business documents online. Build automated electronic signature workflows to close deals quickly.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Document Completed</div>
  <div>Triggers when a document is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Declined</div>
  <div>Triggers when a document is declined</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Expired</div>
  <div>Triggers when a document expires</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Recalled</div>
  <div>Triggers when a document is recalled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Signed</div>
  <div>Triggers when a document is Signed</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Document Details</div>
  <div>Get details of a particular document</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Template</div>
  <div>Send a template for signing</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Template (For Testing Purpose)</div>
  <div>Send a template for signing(for testing purposes), with testing credits. The documents sent using this action will not consume any additional Zoho Sign credits and the document will be watermarked as \'For testing purpose only\'.</div>
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
          <title>Zoho Sign</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
