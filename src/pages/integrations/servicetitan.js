import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ServiceTitan"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/servicetitan.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ServiceTitan Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ServiceTitan is a mobile, cloud-based software platform that helps home services companies streamline operations, improve customer service, and increase sales.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when there\'s a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Appointment</div>
  <div>Triggers when there\'s a new appointments.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Business Unit</div>
  <div>Triggers when there\'s a new Business Unit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when there\'s a new customers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Estimate</div>
  <div>Triggers when there\'s a new estimate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when there\'s a new invoices.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Job</div>
  <div>Triggers when there\'s a new job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Location</div>
  <div>Triggers when there\'s a new location.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Apply Tag Types</div>
  <div>Apply Tag Types to customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Booking</div>
  <div>Creates a new booking</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a new customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Creates Estimate</div>
  <div>Creates a new estimate</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Job</div>
  <div>Creates a new job</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Job Attachments</div>
  <div>Add attachments to a job</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Job Note</div>
  <div>Creates a new note in a job</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Creates Location</div>
  <div>Creates a new location</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Non Job Appointments</div>
  <div>Creates a new non job appointments</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Creates Project</div>
  <div>Creates a new project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sub Task</div>
  <div>Creates a new sub task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Timesheet</div>
  <div>Creates a new Timesheet</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Invoice</div>
  <div>Updates an invoice by id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Job</div>
  <div>Updates a job by id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Updates a project by id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Appointment</div>
  <div>Finds an Appointment by it\`s id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Business Unit</div>
  <div>Find Business Units</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Campaign</div>
  <div>Finds a Campaign by id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds Contacts by Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds Customer</div>
  <div>Finds a customer by Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer Contact</div>
  <div>Finds Customer Contacts by Customer Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Estimates</div>
  <div>Find Estimates by status</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Invoices</div>
  <div>Find Invoices by status</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Job by ID</div>
  <div>Finds a job by it\`s id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Job Type</div>
  <div>Finds a job type by id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Location</div>
  <div>Finds a Location by id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Location Contact</div>
  <div>Finds Contacts by Location Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds a Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Tag Types</div>
  <div>Find Tag Types</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Technician</div>
  <div>Find Technician</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Customers</div>
  <div>Search for customers that match a query.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Jobs by Status</div>
  <div>Finds jobs by it\`s status.</div>
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
          <title>ServiceTitan</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
