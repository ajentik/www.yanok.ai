import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="BoldSign"
      description="BoldSign is an electronic signature solution that lets you collect legally binding eSignatures online from any device."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/boldsign.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        BoldSign Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 72, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">BoldSign is an electronic signature solution that lets you collect legally binding eSignatures online from any device.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Document Completed</div>
  <div>Triggers when the document has been completed by all the signers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Declined</div>
  <div>Triggers when the document is declined.</div>
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
  <div class="font-semibold">Send Document From Template</div>
  <div>Create and send a document out for signature based on a BoldSign template.</div>
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
          <title>BoldSign</title>
          <meta name="description" content="BoldSign is an electronic signature solution that lets you collect legally binding eSignatures online from any device." />
        </>
      ),
    },
  };
}
