import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="FreshBooks"
      description="FreshBooks is a cloud accounting software designed exclusively for self-employed professionals and their teams. Send invoices, track expenses, manage your time, and collaborate on projects."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/freshbooks.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        FreshBooks Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(13, 131, 221, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">FreshBooks is a cloud accounting software designed exclusively for self-employed professionals and their teams. Send invoices, track expenses, manage your time, and collaborate on projects.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Client Hook</div>
  <div>Triggers when a new client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Estimate</div>
  <div>Triggers when a new estimate is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Expense Hook</div>
  <div>Triggers when a new expense is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice Hook</div>
  <div>Triggers when a new invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Expense</div>
  <div>Triggers when a new expense is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Filtered Invoice</div>
  <div>Triggers when a new invoice thats meets the condition is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice Payment</div>
  <div>Triggers when a new invoice payment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Trigger when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Staff Member</div>
  <div>Triggers when a new staff member completes their profile from the email they receive.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice Payment Hook</div>
  <div>Trigger when a new invoice payment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Time Entry</div>
  <div>Trigger when a new time entry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Estimate</div>
  <div>Triggers when an estimate is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Invoice</div>
  <div>Triggers when an invoice is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Project</div>
  <div>Triggers when a project is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Payment to Invoice</div>
  <div>Adds payment to invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a new client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Estimate</div>
  <div>Creates a new estimate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Expense</div>
  <div>Creates new expense.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>Creates an Invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice PDF</div>
  <div>Creates a PDF of an Invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Other Income</div>
  <div>Creates other income (i.e., income that doesn\'t require an invoice and is received through other means).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Recurring Invoice</div>
  <div>Creates a new recurring invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Time Entry</div>
  <div>Creates new time entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Estimate</div>
  <div>Sends an estimate by email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Invoice</div>
  <div>Sends an invoice to the email for the invoice client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Client</div>
  <div>Updates an existing client based on email. Optionally create a client if one is not found with matching email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Invoice</div>
  <div>Update an existing invoice based on invoice number. Optionally create a new invoice if one does not exist.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Finds an existing customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Invoice</div>
  <div>Finds an existing invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer</div>
  <div>Find or Create Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Invoice</div>
  <div>Find or Create Invoice</div>
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
          <title>FreshBooks</title>
          <meta name="description" content="FreshBooks is a cloud accounting software designed exclusively for self-employed professionals and their teams. Send invoices, track expenses, manage your time, and collaborate on projects." />
        </>
      ),
    },
  };
}
