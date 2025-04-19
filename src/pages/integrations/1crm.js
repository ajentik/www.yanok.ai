import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="1CRM"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/1crm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        1CRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(56, 140, 156, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">1CRM allows you to organize a large part of your business within a single web application, and access that information at any time or place.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Account</div>
  <div>Triggers when an account is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Contact</div>
  <div>Triggers when a contact is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Invoice</div>
  <div>Triggers when an invoice is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Lead</div>
  <div>Triggers when a lead is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Opportunity</div>
  <div>Triggers when an opportunity is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Payment</div>
  <div>Triggers when a payment is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Quote</div>
  <div>Triggers when a quote is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated SalesOrder</div>
  <div>Triggers when a salesorder is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Task</div>
  <div>Triggers when a task is created or updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create / Update Account</div>
  <div>Creates a new account or updates an existing account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create / Update Contact</div>
  <div>Creates a new contact or updates an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create / Update Invoice</div>
  <div>Creates a new invoice or updates an existing invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create / Update Lead</div>
  <div>Creates a new lead or updates an existing lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create / Update Opportunity</div>
  <div>Creates a new opportunity or updates an existing opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create / Update Payment</div>
  <div>Creates a new payment or updates an existing payment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create / Update Quote</div>
  <div>Creates a new quote or updates an existing quote.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create / Update SalesOrder</div>
  <div>Creates a new salesorder or updates an existing salesorder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create / Update Task</div>
  <div>Creates a new task or updates an existing task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Account</div>
  <div>Finds an account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Invoice</div>
  <div>Finds an invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead</div>
  <div>Finds a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Opportunity</div>
  <div>Finds an opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Payment</div>
  <div>Finds a payment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Quote</div>
  <div>Finds a quote.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find SalesOrder</div>
  <div>Finds a salesorder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds a task.</div>
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
          <title>1CRM</title>
        </>
      ),
    },
  };
}
