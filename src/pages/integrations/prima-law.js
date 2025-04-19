import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Prima.Law"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/prima-law.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Prima.Law Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(41, 75, 113, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Prima.Law is an immigration forms platform to collect data, generate forms and manage immigration cases for immigration attorneys.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assigned Task</div>
  <div>Trigger when a task is assigned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Case Checklist Completed</div>
  <div>Trigger when a checklist item is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Case Flows Completed</div>
  <div>Trigger when a flow item is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Case Status Change</div>
  <div>Trigger when case status change (from open to closed or from closed to open).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Commented Task</div>
  <div>Trigger when a task is commented.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Completed Task</div>
  <div>Trigger when a task is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Address</div>
  <div>Trigger when a new address is added</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Advance Parole</div>
  <div>Trigger when a new Advance Parole is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar Event</div>
  <div>Trigger when a new calendar event is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Case</div>
  <div>Trigger when a new case is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Trigger when a new contact is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Criminal History</div>
  <div>Trigger when a new Criminal History is added</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New EAD</div>
  <div>Trigger when a new EAD is added</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Educational History</div>
  <div>Trigger when a new Educational History is added</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Family Member</div>
  <div>Trigger when a new Family Member is added</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Marriage History</div>
  <div>Trigger when a new Marriage History is added</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Trigger when a note is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Passport</div>
  <div>Trigger when a new passport is added</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Phone Number</div>
  <div>Trigger when a new phone is added</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Phone Call</div>
  <div>Trigger when a new phone call is added</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Trigger when a new task is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Transaction</div>
  <div>Trigger when a new transaction is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Travel History</div>
  <div>Trigger when a new travel history is added</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New US Entry</div>
  <div>Trigger when a new US Entry is added</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Visa History</div>
  <div>Trigger when a new visa history is added</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reassigned Task</div>
  <div>Trigger when a task is reassigned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Travel History</div>
  <div>Trigger when a new travel history is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Address</div>
  <div>Trigger when a new address is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Case</div>
  <div>Trigger when a case is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Trigger when a contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Criminal History</div>
  <div>Trigger when a new Criminal History is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update EAD</div>
  <div>Trigger when a new EAD is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Educational History</div>
  <div>Trigger when a new Educational History is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Family Member</div>
  <div>Trigger when a new Family Member is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Marriage History</div>
  <div>Trigger when a new Marriage History is update</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Note</div>
  <div>Trigger when a note is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Passport</div>
  <div>Trigger when a new passport is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Phone Number</div>
  <div>Trigger when a phone is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Phone Call</div>
  <div>Trigger when phone call is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update US Entry</div>
  <div>Trigger when a new US Entry is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Visa History</div>
  <div>Trigger when a new visa history is updated</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Calendar Event</div>
  <div>Create a calendar event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Address</div>
  <div>Creates a new address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Case</div>
  <div>Creates a new case.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Note</div>
  <div>Creates a new note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Phone Call</div>
  <div>Creates a new phone call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Phone Number</div>
  <div>Creates a new phone number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Calendar Event</div>
  <div>Update a calendar event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Calendar Event</div>
  <div>Search calendar event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Contact</div>
  <div>search contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Calendar Event</div>
  <div>Searches for a calendar event matching the provided query, or creates one if it does not exist.</div>
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
          <title>Prima.Law</title>
        </>
      ),
    },
  };
}
