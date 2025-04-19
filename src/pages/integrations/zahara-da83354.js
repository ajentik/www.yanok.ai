import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zahara"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zahara-da83354.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zahara Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(42, 104, 236, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Zahara is a complete purchase management platform enabling paperless approvals for supplier invoices and purchase requisition.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Approval Comment</div>
  <div>Triggers when a new approval comment is added at a step.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Cost Code</div>
  <div>Triggers when a new cost code is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Document Approved</div>
  <div>Triggers when a new document is approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice Set as Exported</div>
  <div>Triggers when a new invoice is set as exported.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Nominal Code</div>
  <div>Triggers when a new nominal code is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase Order</div>
  <div>Triggers when a new purchase order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase Order Sent to Supplier</div>
  <div>Triggers when a new purchase order is sent to supplier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase Requsition</div>
  <div>Triggers when a new purchase requsition is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Supplier</div>
  <div>Triggers when a new supplier is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tax Code</div>
  <div>Triggers when a new tax code is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice PDF Created</div>
  <div>Triggers when a PDF is added to invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Supplier Amended</div>
  <div>Triggers when an existing supplier is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Draft Invoice</div>
  <div>Creates a new draft invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>Creates a new invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Purchase Order</div>
  <div>Creates a new purchase order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Supplier</div>
  <div>Updates an existing supplier or creates the supplier if it doesn\'t exist</div>
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
          <title>Zahara</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
