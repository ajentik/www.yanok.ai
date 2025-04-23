import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Invoice Ninja"
      description={`Create. Send. Get Paid. Invoice Ninja is a free, code-available suite of apps to invoice clients, accept payments, track expenses & time billable-tasks. Designed for freelancers and small to medium-sized businesses to increase efficiency, Invoice Ninja will help you get paid!`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/invoice-ninja.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Invoice Ninja Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(58, 195, 91, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Create. Send. Get Paid. Invoice Ninja is a free, code-available suite of apps to invoice clients, accept payments, track expenses & time billable-tasks. Designed for freelancers and small to medium-sized businesses to increase efficiency, Invoice Ninja will help you get paid!</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new client is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a new payment is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Quote</div>
  <div>Triggers when a new quote is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Client</div>
  <div>Triggers when a client is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Invoice</div>
  <div>Triggers when an invoice is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Quote</div>
  <div>Triggers when a quote is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a new client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Invoice</div>
  <div>Emails an invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Quote</div>
  <div>Emails a quote.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>Creates a new invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payment</div>
  <div>Creates a new payment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a new product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Quote</div>
  <div>Creates a new qoute.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Recurring Invoice</div>
  <div>Creates a new recurring invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client</div>
  <div>Finds a client by their email or id number</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Invoice</div>
  <div>Finds an invoice by it\'s invoice number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product</div>
  <div>Finds a product by its ...</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds a project by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Quote</div>
  <div>Finds an quote by it\'s quote number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Client</div>
  <div>Finds a client by their email or id number</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Invoice</div>
  <div>Finds an invoice by it\'s invoice number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Product</div>
  <div>Finds a product by its ...</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Finds a project by searching.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Quote</div>
  <div>Finds an quote by it\'s quote number.</div>
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
          <title>Invoice Ninja</title>
          <meta name="description" content={`Create. Send. Get Paid. Invoice Ninja is a free, code-available suite of apps to invoice clients, accept payments, track expenses & time billable-tasks. Designed for freelancers and small to medium-sized businesses to increase efficiency, Invoice Ninja will help you get paid!`} />
        </>
      ),
    },
  };
}
