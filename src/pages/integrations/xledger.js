import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Xledger"
      description={`Xledger is cloud based accounting platform. It leverages automation to save users time and use complex worflows.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/xledger.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Xledger Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(32, 65, 154, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Xledger is cloud based accounting platform. It leverages automation to save users time and use complex worflows.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Newly Modified AP Transactions.</div>
  <div>Triggers when an AP transaction is modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newly Modified AR Transactions.</div>
  <div>Triggers when an AR transaction is modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newly Modified Customers</div>
  <div>Triggers when a customer is modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newly Modified Donors</div>
  <div>Triggers when a donor is modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newly Modified Journal Entries</div>
  <div>Triggers when a journal entry is modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newly Modified Projects</div>
  <div>Triggers when a project is modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newly Modified Purchase Orders</div>
  <div>Triggers when a purchase order is modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newly Modified Suppliers</div>
  <div>Triggers when a supplier is modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newly Modified Timesheets</div>
  <div>Triggers when a timesheet is modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newly Reconciled Customer Invoices</div>
  <div>Triggers when a customer invoice is reconciled and its remaining amount is zero.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Donation Deposit</div>
  <div>Creates a donation deposit along with one row of details.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Double Entry GL Item</div>
  <div>Creates both credit and debit GL import items, The debit amount will always be the original amount while the credit will be its negative value. For example, is a transaction with a gross value of £100 is processed the DR line amount will be 100 while the credit line will be -100.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Employee</div>
  <div>Creates an employee in Xledger. This include user, contact and supplier creation. The new employee and user will have the employee role by default.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Expense Detail</div>
  <div>Creates an expense detail line.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create GL Import Item</div>
  <div>Creates a GL import item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice Base Line</div>
  <div>Creates an invoice line in the invoice base.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Customer</div>
  <div>Creates a new customer, if the code is already used in Xledger, the existing customer is updated instead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Donor</div>
  <div>Creates a new donor, if the code is already used in Xledger, the existing donor is updated instead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update a Project</div>
  <div>Creates a new project, if the code is already used in Xledger, the existing project is updated instead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Supplier</div>
  <div>Creates a new supplier, if the code is already used in Xledger, the existing supplier is updated instead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Purchase Order Detail</div>
  <div>Creates a purchase order detail, i.e a purchase order line.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Purchase Order Header</div>
  <div>Creates a purchase order header, use this before creating PO details.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sales Order Detail</div>
  <div>Creates a sales order detail i.e a sales order line.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sales Order Header</div>
  <div>Creates a sales order header, use this before creating SO details.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Timesheet Entry</div>
  <div>Creates a timesheet entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Purchase Order Status</div>
  <div>Updates the PO status to transferred.</div>
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
          <title>Xledger</title>
          <meta name="description" content={`Xledger is cloud based accounting platform. It leverages automation to save users time and use complex worflows.`} />
        </>
      ),
    },
  };
}
