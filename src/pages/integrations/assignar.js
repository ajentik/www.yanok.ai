import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Assignar"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/assignar.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Assignar Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(36, 46, 66, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Assignar is a workforce and asset management platform for construction sub contractor and self-perform general contractors.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new Task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Timesheet</div>
  <div>Triggers when a new Timesheet is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Timesheets Raw</div>
  <div>Triggers when a new timesheet is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Asset</div>
  <div>Triggers when a new Asset is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new Client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new Contanct is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Digital Docket</div>
  <div>Triggers when a new digital docket is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new Order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order Task</div>
  <div>When an Task is associated with an Order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new Project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Site Diary</div>
  <div>Triggers when a new Site Diary is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Skill</div>
  <div>Triggers when a new skill is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Supplier</div>
  <div>Triggers when a new Supplier is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new User is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated User</div>
  <div>Triggers when a new User is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Order</div>
  <div>Triggers when any attribute in Order is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Project</div>
  <div>Triggers when any attribute of project is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Creates an Activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Asset</div>
  <div>Creates an Asset.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a Client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Competency</div>
  <div>Creates a Competency</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Induction</div>
  <div>Creates an Induction</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Journal</div>
  <div>Creates a Journal entry in Assignar against a chosen object.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Creates an Order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order Task</div>
  <div>Creates a Task for a specific Work Order. This typically works best as an action immediately after Create Order is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Relational Contact</div>
  <div>Creates a contact and Associates it with a Client or Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Supplier</div>
  <div>Creates a new Supplier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Timesheet</div>
  <div>Creates a Timesheet</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a User.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User Competency</div>
  <div>Associates an existing Assignar Competency with a User.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User Induction</div>
  <div>Creates a User Induction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Work Item</div>
  <div>Creates a work item in Assignar</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Specific Charge Items</div>
  <div>Find attributes for a given Charge Item ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Email</div>
  <div>Sends an Email through Assignar Platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Activity</div>
  <div>Updates Activity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Asset</div>
  <div>Updates an Asset</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Client</div>
  <div>Creates a Client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Order</div>
  <div>Updates an existing Order in Assignar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Updates a Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Supplier</div>
  <div>Updates a Supplier</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Updates a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Updates a User.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User Competency</div>
  <div>Updates an existing User Competency</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User Induction</div>
  <div>Updates an existing User Induction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Work Item</div>
  <div>Update a work item description in Assignar</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Activity</div>
  <div>Finds an Activity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Asset</div>
  <div>Finds an Asset.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Asset by Id</div>
  <div>Finds an Asset by Assignar Identifier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Charge Items</div>
  <div>Finds all the charge items for a timesheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client</div>
  <div>Finds a Client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Competency</div>
  <div>Finds a Competency.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Digital Docket</div>
  <div>Finds a Digital Docket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Digital Docket Time Entries</div>
  <div>Finds Digital Docket Time Entries.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Digital Docket Worker Questions</div>
  <div>Finds Digital Docket Worker Questions.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Induction</div>
  <div>Finds an Induction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order</div>
  <div>Finds an Order using an id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order by WO</div>
  <div>Finds the order id using WO</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order Charge Items</div>
  <div>Finds a Order Charge Item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order Tasks</div>
  <div>Finds Tasks for a given Order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds a Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Relational Contact</div>
  <div>Finds a Contact that is associated with a Client or Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Supplier</div>
  <div>Finds a Supplier</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Tag</div>
  <div>Finds a Tag in Assignar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds a Task in Assignar</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Timesheet</div>
  <div>Finds a Timesheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Timesheet Work Item</div>
  <div>Finds work items for a given timesheet based on id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds a User in Assignar</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User Competency</div>
  <div>Finds an existing competency for a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User Induction</div>
  <div>Finds an existing induction for a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Work Item</div>
  <div>Finds a work item based on id or code.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Activities</div>
  <div>Finds an Activity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create an Asset</div>
  <div>Finds an Asset.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Client</div>
  <div>Finds a Client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Competency</div>
  <div>Finds a Competency.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Finds a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Induction</div>
  <div>Finds an Induction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Order</div>
  <div>Finds the order id using WO</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Finds a Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Relational Contact</div>
  <div>Finds a Contact that is associated with a Client or Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Task</div>
  <div>Finds a Task in Assignar</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Users</div>
  <div>Finds a User in Assignar</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create User Competency</div>
  <div>Finds an existing competency for a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create User Induction</div>
  <div>Finds an existing induction for a user.</div>
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
          <title>Assignar</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
