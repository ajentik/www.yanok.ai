import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pixifi"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pixifi.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pixifi Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(63, 207, 177, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Pixifi is a business management app for creative professionals.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contract Signed and Accepted</div>
  <div>Triggers when a Contract is signed and Accepted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Workflow Custom Trigger</div>
  <div>Triggers when an Event Workflow Phase Action or Automatic Action has been triggered in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Workflow Custom Trigger</div>
  <div>Triggers when a Lead Workflow Phase Action or Automatic Action has been triggered in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product Workflow Custom Trigger</div>
  <div>Triggers when a Product Workflow Phase Action or Automatic Action has been triggered in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Workflow Custom Trigger</div>
  <div>Triggers when a Project Workflow Phase Action or Automatic Action has been triggered in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Start</div>
  <div>Triggers a specified time before an Event starts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Switches Status</div>
  <div>Triggers when the status of an Event is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Fully Paid</div>
  <div>Triggers when an Invoice is marked as "PAID" in Pixifi (either manually or automatically by checkout).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Converted</div>
  <div>Triggers when a Lead is Converted into a new Client + (Event or Project)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Switches Status</div>
  <div>Triggers when the status of a Lead is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new Client is created in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a New Event is Scheduled in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Expense Is Created</div>
  <div>Triggers when an Expense is created in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a New Invoice is sent in Pixifi. (invoices that are marked as in Draft won\'t be sent).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new Lead is created in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a New Project is created in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a New Task is added/assigned in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Is Paid</div>
  <div>Triggers when a Payment is marked as "PAID" in Pixifi (either manually or automatically by checkout).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product Switches Status</div>
  <div>Triggers when the status of a Product is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Switches Status</div>
  <div>Triggers when the status of a Project is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Accepted</div>
  <div>Triggers when a Proposal is accepted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Sent</div>
  <div>Triggers when a Proposal is sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Questionnaire Answered</div>
  <div>Triggers when a Questionnaire is filled out completely and submitted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">System Notification</div>
  <div>Triggers when a System Notification is generated in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Completed</div>
  <div>Triggers when a Task is marked as completed in Pixifi.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>This will create a new Client in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>This will create a new Event in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Switch Event Status</div>
  <div>This will Switch the status of an Event in Pixifi with the new Status passed in.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Expense</div>
  <div>This will create a new Expense in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>This will create a new Invoice in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attach Document to Lead</div>
  <div>This will create a new Document and attach it to a Lead in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>This will create a new Lead in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create "Project" Type Lead</div>
  <div>This will create a new Lead in Pixifi, but instead of having Event data, it will contain Project data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Switch Lead Status</div>
  <div>This will Switch the status of a Lead in Pixifi with the new Status passed in.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payment</div>
  <div>This will create a new Payment in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>This will create a new Project in Pixifi.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client by ID</div>
  <div>Find existing Clients from clientID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client by Info</div>
  <div>Find existing Client from client info (name, email), it will return back the first result found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Event Type by Name</div>
  <div>Find existing Event Type from Event Type Name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Staff Member by Info</div>
  <div>Find existing Staff Members from their personal info (name, email).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a new Client</div>
  <div>Find existing Client from client info (name, email), it will return back the first result found.</div>
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
          <title>Pixifi</title>
        </>
      ),
    },
  };
}
