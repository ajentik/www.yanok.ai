import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="tuGerente"
      description={`tuGerente is an administrative, financial, and accounting software whose purpose is to make our customers' lives easier`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/tugerente.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        tuGerente Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(115, 17, 22, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">tuGerente is an administrative, financial, and accounting software whose purpose is to make our customers\' lives easier</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a new product or service is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Provider</div>
  <div>Triggers when a new provider is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase</div>
  <div>Triggers when a new purchase is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sale</div>
  <div>Triggers when a new sale is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Pending Sale</div>
  <div>Triggers when a new pending sale is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Update Sale</div>
  <div>Updates a pending sale.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sale</div>
  <div>Creates a Sale.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Invoice</div>
  <div>Finds an invoice based on a Sale id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Stock Transfer</div>
  <div>Transfers stock from one warehouse to another</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Sale State</div>
  <div>Updates de current state of a Sale.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Sale</div>
  <div>Retrieves a Sale based on its unique identifier.</div>
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
          <title>tuGerente</title>
          <meta name="description" content={`tuGerente is an administrative, financial, and accounting software whose purpose is to make our customers' lives easier`} />
        </>
      ),
    },
  };
}
