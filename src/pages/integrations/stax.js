import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Stax"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/stax.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Stax Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(185, 59, 228, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Stax makes it easy to accept payments in-person and online and provides businesses with the tools they need to grow.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Dispute</div>
  <div>Triggers when a new dispute is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Catalog Item</div>
  <div>Triggers when a new catalog item is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Scheduled Invoice</div>
  <div>Triggers when a new scheduled invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a new payment (transaction) is posted to your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Catalog Item</div>
  <div>Triggers when a catalog item has been deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Scheduled Invoice</div>
  <div>Triggers when a scheduled invoice has been deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Payment</div>
  <div>Lists your Payments.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Customer</div>
  <div>Triggers when a an existing customer is updated. Note that the API does not highlight which field(s) have updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Dispute</div>
  <div>Triggers when an existing dispute is updated. Note that the API does not highlight which field(s) have updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Invoice</div>
  <div>Triggers when a new invoice is updated. Note that the API does not highlight which field(s) have updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Catalog Item</div>
  <div>Triggers when an existing catalog item has been updated. Note that the API does not highlight which field(s) have updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Scheduled Invoice</div>
  <div>Triggers when an existing scheduled invoice is updated. Examples: occurence dates changed, amount changes. Note that the API does not highlight which field(s) have updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Payment</div>
  <div>Triggers when a payment (transaction) is updated. Example, a payment is linked to a new customer. Note that a refund is considered a new transaction.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a new Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>Creates a new Invoice</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Item</div>
  <div>Creates a new Item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Scheduled Invoice</div>
  <div>Creates a new Scheduled Invoice</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Make a Payment</div>
  <div>Charges an existing card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Catalog Item</div>
  <div>Update an existing catalog item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customers</div>
  <div>Finds customer record(s) given the provided search criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Invoices</div>
  <div>Finds record(s) given the provided search criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Items</div>
  <div>Finds record(s) given the provided search criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Payment Methods</div>
  <div>Finds record(s) given the provided search criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Scheduled Invoices</div>
  <div>Finds record(s) given the provided search criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Payments</div>
  <div>Finds record(s) given the provided search criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer</div>
  <div>Finds customer record(s) given the provided search criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Invoice</div>
  <div>Finds record(s) given the provided search criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Item</div>
  <div>Finds record(s) given the provided search criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Scheduled Invoice</div>
  <div>Finds record(s) given the provided search criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Payment</div>
  <div>Finds record(s) given the provided search criteria.</div>
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
          <title>Stax</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
