import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Projectworks"
      description="Projectworks is an intelligent business management software for your entire professional services company."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/projectworks.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Projectworks Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 170, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Projectworks is an intelligent business management software for your entire professional services company.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Budgets</div>
  <div>Triggers when a user requests a list of budgets.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Clients</div>
  <div>Triggers when a user requests a list of clients.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Custom Fields</div>
  <div>Triggers when a user requests a list of Custom Fields</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Leave Statuses</div>
  <div>Triggers when a user requests a list of leave statuses.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Offices</div>
  <div>Triggers when a user requests a list of offices.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Projects</div>
  <div>Triggers when a user requests a list of projects.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Timecodes</div>
  <div>Triggers when a user requests a list of timecodes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Timesheet Entries</div>
  <div>Triggers when a user requests a list of timesheet entries</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Users</div>
  <div>Triggers when a user requests a list of users.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Leave Request</div>
  <div>Triggers when a new leave request is created</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assign Timecode</div>
  <div>Assigns a user to a timecode</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Budget</div>
  <div>Creates a Budget</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Timecode</div>
  <div>Creates a Timecode</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Timesheet Entry</div>
  <div>Creates a Timesheet entry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Resourcing</div>
  <div>Sets the resourcing for a given person and project on a given day.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Budget</div>
  <div>Updates a budget</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Updates a company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update CustomFieldValue</div>
  <div>Updates the value of a custom field for a specific entity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Updates a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Timecode</div>
  <div>Updates a timecode</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Timesheet Entry</div>
  <div>Updates a timesheet entry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find ClientID</div>
  <div>Finds a company by name or external reference.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find CurrencyID</div>
  <div>Finds a currency by its name or code.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find CustomFieldID</div>
  <div>Finds a custom field by entity type and label</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find GLCode ID</div>
  <div>Finds a GL Code by its code or description</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find ModuleID</div>
  <div>Finds a Module by external reference.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find OfficeID</div>
  <div>Finds an Office by name or external reference.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find ProjectID</div>
  <div>Finds a project by name or external reference</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find TaskID</div>
  <div>Finds an existing task by external reference.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find UserID</div>
  <div>Finds an existing user by name, email address, or external reference.</div>
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
          <title>Projectworks</title>
          <meta name="description" content="Projectworks is an intelligent business management software for your entire professional services company." />
        </>
      ),
    },
  };
}
