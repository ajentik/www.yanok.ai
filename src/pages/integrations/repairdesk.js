import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="RepairDesk"
      description={`RepairDesk is an all-in-one repair shop management platform that helps cell phone repair shops easily manage repair jobs, inventory, customers, and much more.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/repairdesk.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        RepairDesk Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(28, 161, 240, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">RepairDesk is an all-in-one repair shop management platform that helps cell phone repair shops easily manage repair jobs, inventory, customers, and much more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Employee Commission</div>
  <div>Triggers when commission is assigned to an employee</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Inventory Updated</div>
  <div>Triggers when Inventory stock or prices updated on RepairDesk</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is created on RepairDesk.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inventory Item</div>
  <div>Triggers when a new inventory item is created on RepairDesk</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is created on RepairDesk.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is created on RepairDesk.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a new ticket is created on RepairDesk.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment Added</div>
  <div>Triggers when a new payment is added on RepairDesk.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Status Change</div>
  <div>Triggers when ticket status is changed on RepairDesk.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Payment</div>
  <div>Add a payment to the Invoice</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Create a customer on RepairDesk.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Invoice</div>
  <div>Create a new Invoice on RepairDesk</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Create a new lead on RepairDesk</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Ticket</div>
  <div>Create a new Ticket on RepairDesk</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Ticket</div>
  <div>Update Ticket Status</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Finds an existing customer.</div>
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
          <title>RepairDesk</title>
          <meta name="description" content={`RepairDesk is an all-in-one repair shop management platform that helps cell phone repair shops easily manage repair jobs, inventory, customers, and much more.`} />
        </>
      ),
    },
  };
}
