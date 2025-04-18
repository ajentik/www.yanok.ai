import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="InvoiceXpress"
      description="InvoiceXpress is online invoicing software that helps all businesses issue invoices in seconds, hassle free."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/invoicexpress.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        InvoiceXpress Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 187, 128, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">InvoiceXpress is online invoicing software that helps all businesses issue invoices in seconds, hassle free.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Invoice</div>
  <div>Cancels a</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Invoice-Receipt</div>
  <div>Cancels an</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel VAT MOSS Invoice</div>
  <div>Cancels a</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>Creates a new</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice-Receipt</div>
  <div>Creates a new</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create VAT MOSS Invoice</div>
  <div>Creates a new</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Draft Invoice</div>
  <div>Deletes a</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Draft Invoice-Receipt</div>
  <div>Deletes a</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Draft VAT MOSS Invoice</div>
  <div>Deletes a</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finalize Invoice</div>
  <div>Finalizes an existing</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finalize Invoice-Receipt</div>
  <div>Finalizes an existing</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finalize VAT MOSS Invoice</div>
  <div>Finalizes an existing</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate PDF</div>
  <div>Generates a PDF from a specified</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark as Paid</div>
  <div>Marks an existing</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark as Paid</div>
  <div>Marks an existing</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sends Invoice by Email</div>
  <div>Sends an</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Invoice</div>
  <div>Updates an</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Invoice-Receipt</div>
  <div>Updates an</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update VAT MOSS Invoice</div>
  <div>Updates a</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get a Client</div>
  <div>Returns a specific client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get a Invoice</div>
  <div>Returns a specific invoice.</div>
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
          <title>InvoiceXpress</title>
          <meta name="description" content="InvoiceXpress is online invoicing software that helps all businesses issue invoices in seconds, hassle free." />
        </>
      ),
    },
  };
}
