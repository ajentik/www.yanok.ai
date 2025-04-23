import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PEX"
      description={`PEX is the only spend management platform that combines a cloud-based application with a Visa prepaid card.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pex.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PEX Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(54, 167, 221, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">PEX is the only spend management platform that combines a cloud-based application with a Visa prepaid card.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Purchase Is Made</div>
  <div>Fires when a new purchase is made</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Fund Card</div>
  <div>Add funds to a card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Card</div>
  <div>Create cardholder account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Zero Card</div>
  <div>Remove all funds (zero) a card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Download Receipts</div>
  <div>Downloads receipts for a transaction</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag Option</div>
  <div>Adds an option to a dropdown tag</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Cardholder</div>
  <div>Find a cardholder by account ID, name, or custom ID</div>
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
          <title>PEX</title>
          <meta name="description" content={`PEX is the only spend management platform that combines a cloud-based application with a Visa prepaid card.`} />
        </>
      ),
    },
  };
}
