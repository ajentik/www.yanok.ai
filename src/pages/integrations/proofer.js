import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Proofer"
      description="Proofer is a Shopify app that lets you manage your custom order proofs"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/proofer.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Proofer Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(244, 114, 33, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Proofer is a Shopify app that lets you manage your custom order proofs</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Proof Approved</div>
  <div>Triggers when a customer approves a proof.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proof Rejected</div>
  <div>Triggers when a customer rejects a proof.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proof Sent</div>
  <div>Triggers when you send out a new revision in Proofer.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create New Proof</div>
  <div>Creates a new proof and automatically sends it to the customer based on the filename. This first part of the filename has to contain the order number, followed by an underscore (e.g. "#1024_proof_1.png").</div>
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
          <title>Proofer</title>
          <meta name="description" content="Proofer is a Shopify app that lets you manage your custom order proofs" />
        </>
      ),
    },
  };
}
