import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="QuickBooks Online"
      description="QuickBooks Online is the web version of the popular accounting packages QuickBooks. Use any Zapier integration to connect QuickBooks Online to hundreds of other apps."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/quickbooks.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        QuickBooks Online Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(36, 162, 5, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">QuickBooks Online is the web version of the popular accounting packages QuickBooks. Use any Zapier integration to connect QuickBooks Online to hundreds of other apps.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggered when you add a new account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Bill</div>
  <div>Triggers when a new bill is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggered when you add a new customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Estimate</div>
  <div>Triggered when you add a new estimate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Expense</div>
  <div>Triggers when a new expense is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggered when you add a new invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggered when you add a new invoice (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sales Receipt</div>
  <div>Triggered when a new sales receipt is added (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggered when a payment is received (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase Order</div>
  <div>Triggers when a new purchase order is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sales Receipt</div>
  <div>Triggered when a new sales receipt is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Customer</div>
  <div>Triggered when an existing customer is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Vendor</div>
  <div>Triggered when a new vendor is added.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Bill (Item Based)</div>
  <div>Create a new bill, optionally tied to a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Bill (Account Based)</div>
  <div>Create a new bill, optionally tied to a customer (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Bill (Item Based)</div>
  <div>Create a new bill, optionally tied to a customer (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Credit Memo</div>
  <div>Creates a new credit memo.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Adds a new customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Estimate</div>
  <div>Create a new estimate (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Expense</div>
  <div>Creates a new expense using check, cash, or credit card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product/Service</div>
  <div>Creates a new product or service.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Journal Entry</div>
  <div>Creates a new journal entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>Adds a new invoice (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sales Receipt</div>
  <div>Adds a new sales receipt (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payment</div>
  <div>Creates a new payment, optionally linked to an invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Purchase Order</div>
  <div>Creates a new purchase order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Refund Receipt</div>
  <div>Creates a new refund receipt.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Invoice</div>
  <div>Send an existing invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Sales Receipt</div>
  <div>Send an existing sales receipt.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Time Activity</div>
  <div>Creates a new single time activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Updates an existing customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Invoice</div>
  <div>Updates an existing invoice (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Vendor</div>
  <div>Adds a new vendor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Account</div>
  <div>Find an account by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Find a customer by name or email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Invoice</div>
  <div>Find an invoice by number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product(s)</div>
  <div>Find a product by name (with line item support)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Vendor</div>
  <div>Find a vendor by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer</div>
  <div>Finds or creates a specific customer v2.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Vendor</div>
  <div>Finds or creates a specific vendor.</div>
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
          <title>QuickBooks Online</title>
          <meta name="description" content="QuickBooks Online is the web version of the popular accounting packages QuickBooks. Use any Zapier integration to connect QuickBooks Online to hundreds of other apps." />
        </>
      ),
    },
  };
}
