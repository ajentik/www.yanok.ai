import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Revv Documents"
      description="Revv Documents is intended for individuals and teams looking to automate everyday paperwork accurately and smartly, all-in-one tool. Use Revv Documents to manage proposals, quotes, contracts and agreements."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/revv-documents.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Revv Documents Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(5, 19, 111, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Revv Documents is intended for individuals and teams looking to automate everyday paperwork accurately and smartly, all-in-one tool. Use Revv Documents to manage proposals, quotes, contracts and agreements.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Document Accepted</div>
  <div>Triggers when the document is accepted</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Stage Changed</div>
  <div>Triggers when a document stage changes from Draft to Sent or Signed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Signed</div>
  <div>Triggers when a document is signed by all signees.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Document and Send for Acceptance</div>
  <div>Create a document and send it for acceptance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Create a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document</div>
  <div>Create a document using templates.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity</div>
  <div>Create an opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document and Send for Esign Deprecated</div>
  <div>Create a document and send it for eSignature.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document and Send for Esign</div>
  <div>Create a document and send it for eSignature.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Share Document</div>
  <div>Give view/ edit access to recipient for document</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Share Folder</div>
  <div>Give view/ edit access to recipient for folder</div>
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
          <title>Revv Documents</title>
          <meta name="description" content="Revv Documents is intended for individuals and teams looking to automate everyday paperwork accurately and smartly, all-in-one tool. Use Revv Documents to manage proposals, quotes, contracts and agreements." />
        </>
      ),
    },
  };
}
