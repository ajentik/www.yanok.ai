import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Scrive"
      description="Scrive is a eSigning service that lets you sign anywhere and anytime to speed up and streamline your contract flows."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/scrive.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Scrive Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(73, 82, 89, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Scrive is a eSigning service that lets you sign anywhere and anytime to speed up and streamline your contract flows.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Rejected Delivery</div>
  <div>Triggers when a document fails to deliver by email or mobile.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Rejected Document</div>
  <div>Triggers when a document is rejected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Signed Document</div>
  <div>Triggers when a document is signed and sealed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add New Party</div>
  <div>Add a new party to a document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create From PDF</div>
  <div>Create a new document from a PDF.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start Signing Process From Template</div>
  <div>Start a new signing process from a template in Scrive.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start Signing</div>
  <div>Start the signing process for a document.</div>
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
          <title>Scrive</title>
          <meta name="description" content="Scrive is a eSigning service that lets you sign anywhere and anytime to speed up and streamline your contract flows." />
        </>
      ),
    },
  };
}
