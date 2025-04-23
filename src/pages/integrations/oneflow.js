import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Oneflow"
      description={`Oneflow is a digital platform that automates entire contract process from creating, signing and sending.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/oneflow.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Oneflow Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(12, 58, 76, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Oneflow is a digital platform that automates entire contract process from creating, signing and sending.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Participant</div>
  <div>Add a new participant to a Oneflow contract</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add an Attachment or Expanded PDF</div>
  <div>Add an attachment or expanded PDF to a Oneflow contract</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Contract Details</div>
  <div>Get details of an existing Oneflow contract</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Contract</div>
  <div>Send a contract to Oneflow contract participants</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contract</div>
  <div>Create a new Oneflow contract</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contract</div>
  <div>Delete an existing Oneflow contract</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Download Contract</div>
  <div>Download the Oneflow contract as a PDF</div>
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
          <title>Oneflow</title>
          <meta name="description" content={`Oneflow is a digital platform that automates entire contract process from creating, signing and sending.`} />
        </>
      ),
    },
  };
}
