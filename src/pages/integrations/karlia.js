import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Karlia"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/karlia.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Karlia Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 47, 116, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Karlia is the first CRM software to integrate your complete mailboxes with tracking, scheduled mailings, templates and predefined responses. Be twice as productive !</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Triggers when a customer is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Customer</div>
  <div>Triggers when a customer is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Supplier</div>
  <div>Trigger when a new supplier is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Supplier</div>
  <div>Triggers when a supplier is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Supplier</div>
  <div>Triggers when a supplier is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Triggers when a contact is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Triggers when a contact is delete.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when a new opportunity is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity</div>
  <div>Triggers when an opportunity is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity Status</div>
  <div>Triggers when an opportunity status is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity Column Number</div>
  <div>Triggers when a column number of an opportunity is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Opportunity</div>
  <div>Triggers when an opportunity is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Quote</div>
  <div>Triggers when a new quote is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Quote</div>
  <div>Triggers when a quote is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Quote</div>
  <div>Triggers when a quote is deleted</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Order</div>
  <div>Triggers when a order is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Order</div>
  <div>Triggers when an order is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Delivery</div>
  <div>Triggers when a new delivery is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Delivery</div>
  <div>Triggers when a delivery is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Delivery</div>
  <div>Triggers when a delivery is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Invoice</div>
  <div>Triggers when an invoice is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Invoice</div>
  <div>Triggers when an invoice is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a new product is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product</div>
  <div>Triggers when a product is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Product</div>
  <div>Triggers when a product is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Equipment</div>
  <div>Triggers when a new equipment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Equipment</div>
  <div>Triggers when an equipment is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Equipment</div>
  <div>Triggers when an equipement is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase</div>
  <div>Triggers when a new purchase is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Purchase</div>
  <div>Triggers when a purchase is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Purchase</div>
  <div>Triggers when a purchase is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Supplier Order</div>
  <div>Triggers when a new supplier order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Supplier Order</div>
  <div>Triggers when a supplier order is updated..</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Supplier Order</div>
  <div>Triggers when a supplier order is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Suppler Delivery</div>
  <div>Triggers when a new supplier delivery is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Supplier Delivery</div>
  <div>Triggers when a supplier delivery is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Supplier Delivery</div>
  <div>Triggers when a supplier delivery is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Supplier Invoice</div>
  <div>Triggers when a new supplier invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Supplier Invoice</div>
  <div>Triggers when a supplier invoice is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Supplier Invoice</div>
  <div>Triggers when a supplier invoice is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Event</div>
  <div>Triggers when an event is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Event</div>
  <div>Triggers when an event is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when a new note is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Note</div>
  <div>Triggers when a note is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Note</div>
  <div>Triggers when a note is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Triggers when a task is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Task</div>
  <div>Triggers when a task is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Time</div>
  <div>Triggers when a new time is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Time</div>
  <div>Triggers when a time is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Time</div>
  <div>Triggers when a time is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Triggers when a project is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Project</div>
  <div>Triggers when a project is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project Task</div>
  <div>Triggers when a new project task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project Task</div>
  <div>Triggers when a project task is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project Task Status</div>
  <div>Triggers when a project task status is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project Task Column Number</div>
  <div>Triggers when a column number of a project task is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Project Task</div>
  <div>Triggers when a project task is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project Subtask</div>
  <div>Triggers when a new project subtask is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project Subtask</div>
  <div>Triggers when a project subtask is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project Subtask Status</div>
  <div>Triggers when a project subtask status is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Project Subtask</div>
  <div>Triggers when a project subtask is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a new ticket is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Ticket</div>
  <div>Triggers when a ticket is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Ticket Status</div>
  <div>Triggers when a ticket status is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Ticket</div>
  <div>Triggers when a ticket is deleted.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Create a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Create a Customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document</div>
  <div>Create a Document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Equipment</div>
  <div>Create a Equipment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Create an Event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Expense</div>
  <div>Create an Expense.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Create a Note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity</div>
  <div>Create an Opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Create a Product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Create a Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project Subtask</div>
  <div>Create a Project Subtask.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project Task</div>
  <div>Create a Project Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Supplier</div>
  <div>Create a Supplier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Create a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket</div>
  <div>Create a Ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Time</div>
  <div>Create a Time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Contact Custom Field</div>
  <div>Create or Update a new custom field to a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Customer Custom Field</div>
  <div>Create or Update a new custom field to a Customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Equipement Custom Field</div>
  <div>Create or Update a new cusotm field to an Equipment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Opportunity Custom Field</div>
  <div>Create or Update a new custom field to an Opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Product Custom Field</div>
  <div>Create or Update a new custom field to a Product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Supplier Custom Field</div>
  <div>Create or Update a new custom field to a Supplier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Ticket Custom Field</div>
  <div>Create or Update a new custom field to a Ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update/Create Customer</div>
  <div>Update a Customer or Create one if it doesn\'t exist.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Update a Customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Document</div>
  <div>Update a Document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Equipment</div>
  <div>Update a Equipment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Event</div>
  <div>Update an Event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Expense</div>
  <div>Update an Expense.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Note</div>
  <div>Update a Note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity</div>
  <div>Update an Opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product</div>
  <div>Update a Product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Update a Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project Subtask</div>
  <div>Update a Project Subtask.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project Task</div>
  <div>Update a Project Tasks.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Supplier</div>
  <div>Update a Supplier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Update a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Ticket</div>
  <div>Update a Ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Find a Customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Opportunity</div>
  <div>Find an Opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Supplier</div>
  <div>Find a Supplier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Contact</div>
  <div>Show contact details</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Customer</div>
  <div>Show customer details</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Document</div>
  <div>Show document details</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Equipment</div>
  <div>Show equipment details</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Event</div>
  <div>Show event details</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Expense</div>
  <div>Show expense details</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Note</div>
  <div>Show note details</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Opportunity</div>
  <div>Show opportunity details</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Product</div>
  <div>Show product details</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Project</div>
  <div>Show project details</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Project Subtask</div>
  <div>Show project subtask details</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Project Task</div>
  <div>Show project task details</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Supplier</div>
  <div>Show supplier details</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Task</div>
  <div>Show task details</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Ticket</div>
  <div>Show ticket details</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact.</div>
  <div>Find a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer</div>
  <div>Find a Customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Opportuntiy</div>
  <div>Find an Opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Supplier</div>
  <div>Find a Supplier.</div>
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
          <title>Karlia</title>
        </>
      ),
    },
  };
}
