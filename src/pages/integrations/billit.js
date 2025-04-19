import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Billit"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/billit.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Billit Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 75, 114, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Billit is an accounting app for entrepreneurs, with the support of the accountants.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>This action will create a customer in Billit</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>This action will create a new Order in Billit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>This action will create a new product in Billit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Quick Invoice</div>
  <div>This action wil create an invoice using the VAT Number of the client and Product ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Supplier</div>
  <div>This action will create a supplier in Billit</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update or Add Invoice</div>
  <div>This Action will update a existing invoice or create a new one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>This action wil return the customer information</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product</div>
  <div>This wil return product information</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Product</div>
  <div>This wil return product information</div>
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
          <title>Billit</title>
        </>
      ),
    },
  };
}
