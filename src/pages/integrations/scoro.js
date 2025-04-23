import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Scoro"
      description={`Scoro is a comprehensive work management software – an all-in-one solution to track your time, manage projects and bill for your work`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/scoro.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Scoro Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(236, 240, 244, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Scoro is a comprehensive work management software – an all-in-one solution to track your time, manage projects and bill for your work</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Bill</div>
  <div>Triggers when a bill is created or modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Bill</div>
  <div>Triggers when a new bill is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Calendar Event</div>
  <div>Triggers when a calendar event is created or modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar Event</div>
  <div>Triggers when a new calendar event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Company</div>
  <div>Triggers when a company is created or modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Custom Entry</div>
  <div>Triggers when a Custom entry is created or modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Expense</div>
  <div>Triggers when an expense is created or modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Invoice</div>
  <div>Triggers when an invoice is created or modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Order</div>
  <div>Triggers when an order is created or modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Person</div>
  <div>Triggers when a person is created or modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new person is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Project</div>
  <div>Triggers when a project is created or modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Purchase Order</div>
  <div>Triggers when an purchase order is created or modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase Order</div>
  <div>Triggers when a new purchase order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Quote</div>
  <div>Triggers when an quote is created or modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Quote</div>
  <div>Triggers when a new quote is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Task</div>
  <div>Triggers when a task is created or modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Bill</div>
  <div>Creates a new bill or updates an existing one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Calendar Event</div>
  <div>Creates a new calendar event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Company</div>
  <div>Creates a new company or updates an existing one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Custom Entry</div>
  <div>Creates a new custom entry or updates an existing one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Expense</div>
  <div>Creates a new expense.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Invoice</div>
  <div>Creates a new invoice or updates an existing one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Order</div>
  <div>Creates a new order or updates an existing one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Person</div>
  <div>Creates a new person or updates an existing one if e-mail address of the person match.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attach File to a Project</div>
  <div>Attach File to a Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment to a Project</div>
  <div>Adds a comment to a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Project</div>
  <div>Creates a new project or updates an existing one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Purchase Order</div>
  <div>Creates a new purchase order or updates an existing one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Quote</div>
  <div>Creates a new quote or updates an existing one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Receipt</div>
  <div>Creates a new receipt.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attach File to a Task</div>
  <div>Attach File to a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment to a Task</div>
  <div>Adds a comment to a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Task</div>
  <div>Creates a new task or updates an existing one.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Task as Done</div>
  <div>Marks an existing task as done.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task Under a Project</div>
  <div>Updates a specific task under a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Time Entry on Task</div>
  <div>Creates a time entry on an existing task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Bill</div>
  <div>Search for a bill by bill number and issuer ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Search for a company by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Custom Entry by Custom Field</div>
  <div>Search for a custom entry by custom field value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Invoice</div>
  <div>Search for an invoice by invoice number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order</div>
  <div>Search for a order by order number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Find person by full name or email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Search for a project by name or project number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Purchase Order</div>
  <div>Search for a purchase order by purchase order number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Quote</div>
  <div>Search for a quote by quote number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task by Custom Field</div>
  <div>Search for a task by custom field value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task by Name</div>
  <div>Search for a task by task name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Search for a User by email.</div>
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
          <title>Scoro</title>
          <meta name="description" content={`Scoro is a comprehensive work management software – an all-in-one solution to track your time, manage projects and bill for your work`} />
        </>
      ),
    },
  };
}
