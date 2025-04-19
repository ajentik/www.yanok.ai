import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Foxit esign"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/foxit-esign.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Foxit esign Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 110, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Foxit eSign is an end-to-end cloud-based esignature solution that is cost-effective, comprehensive, and legally binding with Templates, Bulk Signing, Online Forms, APIs. Foxit eSign also offers convenience of signing from within Foxit Desktop and Cloud PDF.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Document Cancelled</div>
  <div>Triggers when a Party has declined to sign or cancels a Document. Required reason for cancelling and Party who cancelled included in this trigger. Available for our Paid or Trial Business Premium accounts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Deleted</div>
  <div>Triggers when a Document has been Deleted from your Account. Available for our Paid or Trial Business Premium accounts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Executed</div>
  <div>Triggers when ALL PARTIES have signed the Document. Triggers for a Single Party Document as well. Available for our Paid or Trial Business Premium accounts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Sent</div>
  <div>Triggers when a Document has been sent for signature. Available for our Paid or Trial Business Premium accounts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Signed</div>
  <div>Triggers when a Party has signed a Document. In case of a multiparty Documents: You get a separate trigger when each Party Signs the Document. Available for our Paid or Trial Business Premium accounts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Viewed</div>
  <div>Triggers whenever a signer has opened and viewed the Document for the first time. You get a separate trigger when each Party Views the Document. Available for our Paid or Trial Business Premium accounts.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Folder From Template</div>
  <div>Create a Folder from Template.</div>
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
          <title>Foxit esign</title>
        </>
      ),
    },
  };
}
