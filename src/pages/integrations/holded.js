import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Holded"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/holded.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Holded Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(97, 149, 248, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">The cloud-based tool that has everything you need to manage your company — wherever you are, whenever you need.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a new CRM Deal is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sales Invoice</div>
  <div>Triggers when a new sales invoice is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase Invoice</div>
  <div>Triggers when a new Purchase invoice is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sales Order</div>
  <div>Triggers when a new sales order is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sales Receipt</div>
  <div>Triggers when a new sales receipt has been created</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a Contact in Holded</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Credit Note</div>
  <div>Creates a credit note</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a new CRM Deal</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Employee</div>
  <div>Creates an Employee</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates a CRM Event in Holded</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sales Invoice</div>
  <div>Creates a sales invoice</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payment</div>
  <div>Creates a Payment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a new Product</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Purchase Invoice</div>
  <div>Creates a purchase invoice</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Purchase Order</div>
  <div>Creates a purchase order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Quote</div>
  <div>Creates a quote</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sales Order</div>
  <div>Creates a new Sales Order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sales Receipt</div>
  <div>Creates a Sales Receipt</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Credit Note as Paid</div>
  <div>Updates the status of the selected Credit Note to Paid</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Invoice as Paid</div>
  <div>Marks the selected invoice as paid</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Invoice</div>
  <div>Sends an invoice to the assigned contact email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates the information of a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find an existing Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Find an existing Contact</div>
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
          <title>Holded</title>
        </>
      ),
    },
  };
}
