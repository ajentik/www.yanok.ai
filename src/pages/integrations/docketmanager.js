import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="DocketManager"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/docketmanager.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        DocketManager Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 119, 168, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">DocketManager is a complete print business management system offering a fully integrated cloud based MIS and Web to Print platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Created</div>
  <div>Triggers when a new Contact is Created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when a Contact is modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Created</div>
  <div>Triggers when a new Customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Updated</div>
  <div>Triggers when a Customer is modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Placed Online</div>
  <div>Triggers when an Online Order is placed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Posted</div>
  <div>Triggers when an Order is Posted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Created</div>
  <div>Triggers when a Payment is Created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proof Status Updated</div>
  <div>Triggers when a Proof Status is Created or Changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Queue Changed</div>
  <div>Triggers when and Order Item moves into a new Queue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Quote Converted</div>
  <div>Triggers when a Quote is converted to an Order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Quote Email</div>
  <div>Triggers when a Quote Email is sent</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Shipping Email</div>
  <div>Triggers when a Shipping Email is sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Supplier Created</div>
  <div>Triggers when a new Supplier is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Supplier Updated</div>
  <div>Triggers when a Supplier is modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sync Item</div>
  <div>Triggers when the "Sync Item" button is clicked on the Item View page.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sync Order</div>
  <div>Triggers when the "Sync Order" button is clicked on the Order View page.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Completed</div>
  <div>Triggers when a Task is marked as completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Vendor Created</div>
  <div>Triggers when a new Vendor is Created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Vendor Updated</div>
  <div>Triggers when a Vendor is modified.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact Note</div>
  <div>Creates a Contact Note</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact Task</div>
  <div>Creates a Contact Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer Note</div>
  <div>Creates a Customer Note</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer Task</div>
  <div>Creates a Customer Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order Item Note</div>
  <div>Creates an Order Item Note</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order Item Task</div>
  <div>Creates an Order Item Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order Note</div>
  <div>Creates an Order Note</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order Task</div>
  <div>Creates an Order Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payment</div>
  <div>Creates a Payment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Quote Item Note</div>
  <div>Creates a Quote Item Note</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Quote Item Task</div>
  <div>Creates a Quote Item Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Quote Note</div>
  <div>Creates a Quote Note</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Quote Task</div>
  <div>Creates a Quote Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Shipment</div>
  <div>Creates a Shipment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a Task with no association to an Order, Quote, Item, Customer, or Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Queue Move</div>
  <div>Moves an Order Item to a specified Queue</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Creates a Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Finds a Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Employee</div>
  <div>Finds an Employee</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order</div>
  <div>Finds a DocketManager Order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order Item</div>
  <div>Finds an Order Item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Quote</div>
  <div>Finds a DocketManager Quote</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Quote Item</div>
  <div>Finds a Quote Item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Finds a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer</div>
  <div>Finds a Customer</div>
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
          <title>DocketManager</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
