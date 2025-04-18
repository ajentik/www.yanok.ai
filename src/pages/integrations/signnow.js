import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SignNow"
      description="SignNow provides a secure and easy electronic signature solution that enables you to sign, send and manage documents anywhere while using any device."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/signnow.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SignNow Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 118, 190, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SignNow provides a secure and easy electronic signature solution that enables you to sign, send and manage documents anywhere while using any device.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Document Completed</div>
  <div>Triggers when all signers have filled in and signed the document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Deleted</div>
  <div>Triggers when a document has been deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Updated</div>
  <div>Triggers when a document has been updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Document</div>
  <div>Triggers when a document has been uploaded to SignNow.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Invite to Sign and Delete Document</div>
  <div>Revokes an invite to sign. Optionally can delete a document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document From Template & Send Free Form Invite</div>
  <div>Creates a new document without fillable fields from a selected template and sends an invite to a signer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document From Template & Send Role-Based Invite</div>
  <div>Creates a new document with fillable fields from a selected template and sends an invite to one or multiple signers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invite to Sign</div>
  <div>Sends an email with the invite to sign a document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Document</div>
  <div>Uploads a new document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Document & Extract Fields</div>
  <div>Creates a new document and converts field tags to SignNow fillable fields.</div>
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
          <title>SignNow</title>
          <meta name="description" content="SignNow provides a secure and easy electronic signature solution that enables you to sign, send and manage documents anywhere while using any device." />
        </>
      ),
    },
  };
}
