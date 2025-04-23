import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Agiled"
      description={`Agiled is an all in one business management platform designed to help you manage employees, projects , tasks, track your time, create professional contracts, track expenses and send professional invoices that get you paid faster.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/agiled.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Agiled Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(52, 108, 176, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Agiled is an all in one business management platform designed to help you manage employees, projects , tasks, track your time, create professional contracts, track expenses and send professional invoices that get you paid faster.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contract Created</div>
  <div>Triggers when a contract is created inside app or through API call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Employee Created</div>
  <div>Triggers when an employee is created inside app or through API call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Estimate Created</div>
  <div>Triggers when an estimate is created inside app or through API call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Contacts</div>
  <div>Triggers when list of contacts needed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Contract Types</div>
  <div>Triggers when list of contract types required.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Currencies</div>
  <div>Triggers when new currency is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Departments</div>
  <div>Triggers when departments list required.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Designations</div>
  <div>Triggers when designations list required.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Expenses</div>
  <div>Triggers when list of expenses needed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Projects</div>
  <div>Triggers when projects list required.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Tasks</div>
  <div>Triggers when tasks list needed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Task Categories</div>
  <div>Triggers when task categories list required.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Ticket Agents</div>
  <div>Triggers when list of ticket agents required.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Users</div>
  <div>Triggers when users list required.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Created</div>
  <div>Triggers when an invoice is created inside app or through API call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggers when a new account is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New CRM Source</div>
  <div>Triggers when a new crm source is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New CRM Stage</div>
  <div>Triggers when a new crm stage is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New CRM Status</div>
  <div>Triggers when a new crm status is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sales Agent</div>
  <div>Triggers when a new sales agent is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product Created</div>
  <div>Triggers when a product is created inside app or through API call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Created</div>
  <div>Triggers when a project is created inside app or through API call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Created</div>
  <div>Triggers when a task is created inside app or through API call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Created</div>
  <div>Triggers when a ticket is created inside app or through API call.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Employee</div>
  <div>Creates an employee</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Invoice</div>
  <div>Use this action to add invoices in agiled.app</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Project</div>
  <div>Use this action to add projects in agiled.app</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Create a Contact with role Lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contract</div>
  <div>Creates a Contract</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Estimate</div>
  <div>Creates an Estimate</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Expense</div>
  <div>Creates an Expense</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Product</div>
  <div>Use this action to add products in agiled.app</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a task in agiled.app</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket</div>
  <div>Creates a ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Use this action to delete contact from Agiled.app</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contract</div>
  <div>Deletes a contract</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Employee</div>
  <div>Use this action to delete employee from agiled.app</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Estimate</div>
  <div>Deletes an Estimate</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Expense</div>
  <div>Deletes an Expense</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Invoice</div>
  <div>Deletes an Invoice</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Product</div>
  <div>Use this action to delete products from agiled.app</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Project</div>
  <div>Use this action to delete projects from agiled.app</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Task</div>
  <div>Deletes a task from agiled.app</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Ticket</div>
  <div>Deletes a ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Contact</div>
  <div>Edit an existing Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Contract</div>
  <div>Modifies a contract</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Employee</div>
  <div>Use this action to edit employee in agiled.app</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Estimate</div>
  <div>Modifies an Estimate</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Expense</div>
  <div>Modifies an Expense</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Invoice</div>
  <div>Use this action to edit invoices in agiled.app</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Product</div>
  <div>Use this action to edit products in agiled.app</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Project</div>
  <div>Use this action to edit projects in agiled.app</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Task</div>
  <div>Modifies a task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Ticket</div>
  <div>Modifies at ticket</div>
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
          <title>Agiled</title>
          <meta name="description" content={`Agiled is an all in one business management platform designed to help you manage employees, projects , tasks, track your time, create professional contracts, track expenses and send professional invoices that get you paid faster.`} />
        </>
      ),
    },
  };
}
