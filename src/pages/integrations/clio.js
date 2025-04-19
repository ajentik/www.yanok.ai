import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Clio"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/clio.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Clio Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 138, 220, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Clio is a practice management platform that helps lawyers work more efficiently by making it easy to do tasks like tracking time, managing matters, and generating invoices.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when a new activity is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Bill</div>
  <div>Triggers when a new bill is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Bill State Updated</div>
  <div>Triggers when the state of a bill has changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar Entry</div>
  <div>Triggers when a new calendar entry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Communication</div>
  <div>Triggers when a new communication is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Document</div>
  <div>Triggers when a new document is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Matter</div>
  <div>Triggers when a new matter is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Matter Status Updated</div>
  <div>Triggers when the status of a matter has changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Matter Note</div>
  <div>Triggers when a new matter note is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Status Updated</div>
  <div>Triggers when the status of a task has changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assign Task Template List</div>
  <div>Assign a Task Template List.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company Contact</div>
  <div>Updates an existing company contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Calendar Entry</div>
  <div>Creates a new calendar entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Communication</div>
  <div>Creates a new communication.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company Contact</div>
  <div>Creates a company contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Expense Entry (Activity)</div>
  <div>Creates a new expense entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Matter Folder</div>
  <div>Creates a new folder in a matter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Matter</div>
  <div>Creates a new matter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Matter Note</div>
  <div>Creates a new matter note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person Contact</div>
  <div>Creates a person contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Time Entry (Activity)</div>
  <div>Creates a new time entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person Contact</div>
  <div>Updates an existing person contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Matter</div>
  <div>Update an existing matter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Updates a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Document to Matter</div>
  <div>Upload document to matter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Bill</div>
  <div>Finds a Bill by Client ID, Matter ID or Invoice number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company Contact</div>
  <div>Find a Company Contact, by name, email or phone number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact by Custom Field</div>
  <div>Find newest contact by custom field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Matter</div>
  <div>Find a matter by number, display number, description, or client name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Newest Matter by Client Email</div>
  <div>Find newest matter by client email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Matter by Custom Field</div>
  <div>Find newest matter by custom field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person Contact</div>
  <div>Find a person contact by first name, last name, email or phone number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Find a user by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Company Contact</div>
  <div>Find or Create Company Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Matter</div>
  <div>Find or Create a Matter</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Person Contact</div>
  <div>Find or Create Person Contact</div>
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
          <title>Clio</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
