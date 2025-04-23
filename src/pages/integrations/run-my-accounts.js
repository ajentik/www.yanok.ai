import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Run my Accounts"
      description={`Bookkeeping service for Swiss SME. Scan your documents and you are done.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/run-my-accounts.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Run my Accounts Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 158, 217, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Bookkeeping service for Swiss SME. Scan your documents and you are done.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Customers</div>
  <div>Triggers new customers in Run my Accounts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoices</div>
  <div>Trigger to fetch newly created invoices.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payments</div>
  <div>Payments on accounts receivables.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create AP Payments With Line Items</div>
  <div>Creates AP payments with multiple items</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create AP Invoice With Line Items</div>
  <div>Creates an Accounts Receivable Invoice with Line Items</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create AR Invoice With Line Items</div>
  <div>Create an AR Invoice with Line Items</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Create new customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create GL Transaction</div>
  <div>Creates a simple general ledger transaction, with one credit and one debit account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create AR Invoice</div>
  <div>A new accounts receivables invoice with one part and full customer information.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create AR Invoice With Multiple Parts</div>
  <div>A new accounts receivables invoice with multiple parts and full customer information.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create AR Payment</div>
  <div>Creates a payment for an AR position. Please never use to book an account that is connected to a live bank feed - double entries could create chaos...</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create AR Payments With Line Items</div>
  <div>Creates AR Payments with multiple items</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create AR Transaction</div>
  <div>New accounts receivable transaction with full customer information.</div>
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
          <title>Run my Accounts</title>
          <meta name="description" content={`Bookkeeping service for Swiss SME. Scan your documents and you are done.`} />
        </>
      ),
    },
  };
}
