import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PracticePanther Legal Software"
      description="PracticePanther is a practice management software used by numerous legal practitioners worldwide to automate their firms."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/practicepanther-legal-software.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PracticePanther Legal Software Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(54, 142, 224, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">PracticePanther is a practice management software used by numerous legal practitioners worldwide to automate their firms.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Bank Account</div>
  <div>Get Bank Accounts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Call Log</div>
  <div>Triggers when a new call log is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email</div>
  <div>Triggers when a new email is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Expense</div>
  <div>Triggers when a new expense is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Expense Category</div>
  <div>Triggers when a new expense category is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Item</div>
  <div>Triggers when a new item is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Matter</div>
  <div>Triggers when a new matter is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when a new note is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a new payment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Relationship</div>
  <div>New Relationship.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Time Entry</div>
  <div>Triggers when a new time entry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Bank Account</div>
  <div>Creates a bank account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Call Log</div>
  <div>Creates a call log.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Email</div>
  <div>Creates an email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates an event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Expense</div>
  <div>Creates an expense.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Expense Category</div>
  <div>Creates an expense category.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Item</div>
  <div>Creates an item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Matter</div>
  <div>Creates a matter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Creates a note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Time Entries</div>
  <div>Creates a time entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Searches for a contact by email address, name, contact number or phone number, and can create one if not found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Matter</div>
  <div>Searches for a matter by name or number, or create one if not found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Searches for a user by email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Find or Create Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Matter</div>
  <div>Find or Create Matter</div>
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
          <title>PracticePanther Legal Software</title>
          <meta name="description" content="PracticePanther is a practice management software used by numerous legal practitioners worldwide to automate their firms." />
        </>
      ),
    },
  };
}
