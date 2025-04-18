import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Daylite"
      description="Daylite is a CRM for macOS & iOS that helps you and your team manage more clients, close more deals, and finish more projects. It works with many of the built-in Apple features you know and love like Apple Mail, Contacts, Calendar, Siri, and more!"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/daylite.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Daylite Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 154, 1, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Daylite is a CRM for macOS & iOS that helps you and your team manage more clients, close more deals, and finish more projects. It works with many of the built-in Apple features you know and love like Apple Mail, Contacts, Calendar, Siri, and more!</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Appointment</div>
  <div>Triggers when a Daylite appointment is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Company</div>
  <div>Triggers when a Daylite company is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Person</div>
  <div>Triggers when a Daylite person is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Form</div>
  <div>Triggers when a Daylite form is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Opportunity</div>
  <div>Triggers when a Daylite opportunity is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Project</div>
  <div>Triggers when a Daylite project is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Task</div>
  <div>Triggers when a Daylite task is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Appointment</div>
  <div>Triggers when a new appointment is created in Daylite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company is created in Daylite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new person is created in Daylite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Form</div>
  <div>Triggers when a new form is created in Daylite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when a new note is created in Daylite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when a new opportunity is created in Daylite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created in Daylite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is created in Daylite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Trashed Person</div>
  <div>Triggers when a person is sent to the Trash in Daylite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Updated</div>
  <div>Triggers when an appointment is updated in Daylite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Company Updated</div>
  <div>Triggers when a company is updated in Daylite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Updated</div>
  <div>Triggers when a person is updated in Daylite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Form Updated</div>
  <div>Triggers when a Daylite form is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Note</div>
  <div>Triggers when a note is updated in Daylite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opportunity Updated</div>
  <div>Triggers when an opportunity is updated in Daylite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Updated</div>
  <div>Triggers when a project is updated in Daylite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Updated</div>
  <div>Triggers when a task is updated in Daylite.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Object</div>
  <div>Creates a new object.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Appointment</div>
  <div>Creates a new appointment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person</div>
  <div>Creates a new person and optionally an associated company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Email</div>
  <div>Creates a new Email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Form</div>
  <div>Creates a new form.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Creates a new Note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity</div>
  <div>Creates a new Opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity for Person</div>
  <div>Creates a new opportunity associated with a person or company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Object</div>
  <div>Removes an existing Daylite person, company, opportunity, project, note, task, form, or appointment by its reference ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Link Objects</div>
  <div>Links a Daylite object (Contact, Company, Opportunity, Project, Note, Task, Appointment, Group, Form) to other Daylite objects.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Object</div>
  <div>Updates an existing object.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Appointment</div>
  <div>Modifies an appointment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Modifies a company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person</div>
  <div>Modifies a person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity</div>
  <div>Modifies an opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Modifies a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Modifies a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Object</div>
  <div>Finds an existing object.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Appointment</div>
  <div>Finds an existing appointment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Finds an existing company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Finds an existing person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Note</div>
  <div>Finds an existing note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Opportunity</div>
  <div>Finds an existing opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds an existing project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds an existing task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Object by ID</div>
  <div>Retrieves an existing Daylite person, company, opportunity, project, note, task, or appointment by its reference ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Object</div>
  <div>Finds an existing object.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Appointment</div>
  <div>Finds an existing appointment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Company</div>
  <div>Find or Create Company</div>
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
  <div class="font-semibold">Find or Create Contact</div>
  <div>Find or Create Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Person</div>
  <div>Find or Create Person</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Person</div>
  <div>Find or Create Person</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Note</div>
  <div>Find or Create Note</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Note</div>
  <div>Find or Create Note</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Opportunity</div>
  <div>Find or Create Opportunity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Opportunity</div>
  <div>Find or Create Opportunity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Opportunity</div>
  <div>Find or Create Opportunity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Find or Create Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Find or Create Project</div>
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
          <title>Daylite</title>
          <meta name="description" content="Daylite is a CRM for macOS & iOS that helps you and your team manage more clients, close more deals, and finish more projects. It works with many of the built-in Apple features you know and love like Apple Mail, Contacts, Calendar, Siri, and more!" />
        </>
      ),
    },
  };
}
