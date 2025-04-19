import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Visma eAccounting"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/visma-eaccounting.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Visma eAccounting Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 122, 202, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Visma eAccounting is a financial software for small and medium sized businesses.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Article</div>
  <div>Triggers when a new article is registered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is registered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sales Invoice</div>
  <div>Triggers when a new sales invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is placed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Supplier</div>
  <div>Triggers when a new supplier is registered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase Invoice</div>
  <div>Triggers when a new purchase invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase Invoice Draft</div>
  <div>Triggers when a new purchase invoice draft is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Article</div>
  <div>Creates an article.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Attachment</div>
  <div>Upload an image to source document images from a public url.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sales Invoice Draft</div>
  <div>Creates a customer invoice draft (With Line Item Support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order Draft</div>
  <div>Creates an order draft (With Line Item Support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Supplier</div>
  <div>Creates a supplier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Purchase Invoice Draft</div>
  <div>Creates a purchase invoice draft (With Line Item Support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Article</div>
  <div>Finds an article by name or number or creates one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Article</div>
  <div>Finds an article by name or number (With Line Item Support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer</div>
  <div>Finds a customer by name or number or creates one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Sales Invoice</div>
  <div>Finds a sales invoice by invoice number or invoice customer name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order</div>
  <div>Finds a order by number or invoice customer name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Supplier</div>
  <div>Finds a supplier by name or number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Article</div>
  <div>Find or Create an Article</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer</div>
  <div>Find or Create a Customer</div>
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
          <title>Visma eAccounting</title>
        </>
      ),
    },
  };
}
