import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Moloni"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/moloni.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Moloni Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(153, 204, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Moloni is an online invoicing software, that allows each entrepreneur to effectively control business, automate billing, deliver documents quickly and intuitively.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Document</div>
  <div>Get all documents since a given date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Maturity Date</div>
  <div>Triggers when a document reaches it\'s payment maturity date</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Minimum Stock</div>
  <div>Triggers when a product reaches minimum stock</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new client is created in Moloni</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a new product is inserted in Moloni</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Client</div>
  <div>Triggers when a client is updated in Moloni</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Product</div>
  <div>Triggers when a product is updated in Moloni</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a new client in Moloni</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a new item in Moloni</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Document via Email</div>
  <div>Send a document via email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Updates a customer in Moloni</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Finds a customer in Moloni through a client_id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Client</div>
  <div>Finds a customer in Moloni through a client_id</div>
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
          <title>Moloni</title>
        </>
      ),
    },
  };
}
