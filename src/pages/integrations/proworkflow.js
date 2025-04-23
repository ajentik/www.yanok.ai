import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ProWorkflow"
      description={`Interact with Companies, Contacts, Projects, Tasks, Time, Quotes & Invoices. Take full control of integrating with ProWorkflow to build a better team.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/proworkflow.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ProWorkflow Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 102, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Interact with Companies, Contacts, Projects, Tasks, Time, Quotes & Invoices. Take full control of integrating with ProWorkflow to build a better team.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Accept Project Request</div>
  <div>Triggered when a Project Request is accepted in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Complete Project</div>
  <div>Triggered when a Project is completed in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Completed Task</div>
  <div>Triggered when a Task is completed in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Project Request</div>
  <div>Triggered when a Project Request is declined in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Triggered when a Company is edited in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Triggered when a Contact is edited in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact Location</div>
  <div>Triggered when a Contact Location is edited in ProWorkflow. Please update the location of the contact connected to Zapier, to test.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Invoice</div>
  <div>Triggered when an Invoice is edited in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Message</div>
  <div>Triggered when a Message is edited in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Triggered when a Project is edited in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project Request</div>
  <div>Triggered when a Project Request is edited in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Quote</div>
  <div>Triggered when a new Quote is added in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Shared Note</div>
  <div>Triggered when a Shared Note is edited in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Triggered when a Task is edited in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Time</div>
  <div>Triggered when a Time is edited in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggered when a Company is added to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggered when a Contact is added to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File</div>
  <div>Triggered when a File is added to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when an Invoice is added to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message</div>
  <div>Triggered when a Message is added to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Pending Company</div>
  <div>Triggered when a Pending Company is added to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Pending Contact</div>
  <div>Triggered when a Pending Contact is added to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggered when a Project is added to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project Request</div>
  <div>Triggered when a Project Request is added to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Quote</div>
  <div>Triggered when a Quote is added to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Shared Note</div>
  <div>Triggers when a new Shared Note is added to a Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggered when a Task is added to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Time</div>
  <div>Triggered when a Time is added to ProWorkflow. Please check that you have recorded at least one time record in the last 2 weeks.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Make Project Active</div>
  <div>Triggered when a Project is reactivated in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Make Task Active</div>
  <div>Triggered when a Task is reactivated in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Timer</div>
  <div>Triggered when a Timer is started in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finish Timer</div>
  <div>Triggered when a Timer is stopped in ProWorkflow.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Bookmark</div>
  <div>This action adds a single Bookmark.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Client to Project</div>
  <div>Adds a Client to a Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Company</div>
  <div>Add a Company to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact</div>
  <div>Add a Contact to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to Task</div>
  <div>Add a Contact who has already been assigned to a Project, to a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contractor to Project</div>
  <div>Adds a Contractor to a Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Expense</div>
  <div>Adds an expense to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add File</div>
  <div>Add a File to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add General Task</div>
  <div>Add a General Task in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Invoice Line Item</div>
  <div>Add an Invoice Line Item in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Invoice</div>
  <div>Add an Invoice in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Message</div>
  <div>This adds a single message. A new discussion can be started by using the Project Id or Task Id field, a reply can be added by using the Original Message Id field. One of these is required.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Project</div>
  <div>Add a Project to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Project Request</div>
  <div>Add a Project Request to ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Quote Line Item</div>
  <div>Add a Quote Line Item in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Quote</div>
  <div>Add a Quote in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Project Shared Note</div>
  <div>Adds a Shared note to a Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Staff to Project</div>
  <div>Adds staff to a Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag</div>
  <div>Adds a tag to your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag to Contact</div>
  <div>Add an existing tag to a ProWorkflow Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Project Task</div>
  <div>Add a Project Task in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Time</div>
  <div>Add a Time in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Accept Project Request</div>
  <div>Approve a Project Request in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Complete Project</div>
  <div>Complete a Project in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Complete Task</div>
  <div>Complete a Task in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Project Request</div>
  <div>Decline a Project Request in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Bookmark</div>
  <div>Deletes an existing Bookmark.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Company</div>
  <div>Delete a Company in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Delete a Contact in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete File</div>
  <div>Delete a File in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Invoice</div>
  <div>Delete an Invoice in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Message</div>
  <div>Delete a Message in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Project</div>
  <div>Delete a Project in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Project Request</div>
  <div>Delete a Project Request in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Quote</div>
  <div>Delete a Quote in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Tag</div>
  <div>Removes a tag from your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Task</div>
  <div>Delete a Task in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Time</div>
  <div>Delete a Time Record in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Bookmark</div>
  <div>Edits an existing Bookmark.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Edit a Company in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Edit a Contact in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact Location</div>
  <div>Edit a Contact Location in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Invoice</div>
  <div>Edit an Invoice in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Message</div>
  <div>Edit a Message in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Edit a Project in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project Request</div>
  <div>Edit a Project Request in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Quote</div>
  <div>Edit a Quote in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Tag</div>
  <div>Edit an existing tag on your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Edit a Task in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Time</div>
  <div>Edit a Time in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Make Project Active</div>
  <div>Reactivate a Project in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Make Task Active</div>
  <div>Reactivate a Task in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag From Contact</div>
  <div>Removes an existing tag from a ProWorkflow Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Timer</div>
  <div>Start a Timer in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finish Timer</div>
  <div>Stop a Timer in ProWorkflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client</div>
  <div>Finds an existing client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Finds an existing company/companies.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds an existing contact, not limited by contact type. If you would like to find a specific contact based on type, please use "Find Client", "Find Staff" or "Find Contractor".</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contractor</div>
  <div>Finds an existing contractor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Invoice</div>
  <div>Finds an existing Invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Message</div>
  <div>Finds an existing Message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds an existing Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Quote</div>
  <div>Finds an existing Quote.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Staff</div>
  <div>Finds an existing staff member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds an existing Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Client</div>
  <div>Find or Create Client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Company</div>
  <div>Find or Create Company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Find or Create Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contractor</div>
  <div>Find or Create Contractor</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Invoice</div>
  <div>Find or Create Invoice</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Find or Create Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Quote</div>
  <div>Find or Create Quote</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Staff</div>
  <div>Find or Create Staff</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Task</div>
  <div>Find or Create Task</div>
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
          <title>ProWorkflow</title>
          <meta name="description" content={`Interact with Companies, Contacts, Projects, Tasks, Time, Quotes & Invoices. Take full control of integrating with ProWorkflow to build a better team.`} />
        </>
      ),
    },
  };
}
