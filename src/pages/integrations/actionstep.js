import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Actionstep"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/actionstep.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Actionstep Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(123, 184, 56, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Actionstep is a Legal Practice Management Solution for Law firms.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Matter</div>
  <div>Triggers when an action/matter is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Matter Participant</div>
  <div>Triggers when a participant/contact is added to an action/matter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File Note</div>
  <div>Triggers when a new file note is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a participant/contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Matter Step Changed</div>
  <div>Triggers when a step change occurs on an action/matter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Matter</div>
  <div>Triggers when an existing Matter is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Participant to Matter</div>
  <div>Adds a participant to an action/matter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Matter</div>
  <div>Creates a new action/matter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company Contact</div>
  <div>Creates a company contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create File Note</div>
  <div>Creates a new file note for an action/matter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Individual Contact</div>
  <div>Creates an individual contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a task for an action/matter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Disbursement</div>
  <div>Create a disbursement.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Time Entry</div>
  <div>Creates a time entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company Contact</div>
  <div>Update company contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update File Note</div>
  <div>Updates an existing file note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Individual Contact</div>
  <div>Update an individual contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Matter</div>
  <div>Updates a matter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Matter Custom Field Value</div>
  <div>Updates a matter custom field value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Updates a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Matter Custom Field</div>
  <div>Find a matter custom field based on the supplied custom field name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Tax Code</div>
  <div>Finds a tax code record based on the supplied code.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Matter Custom Field Value</div>
  <div>Retrieve a matter custom field value based on the supplied custom field id and matter id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find a contact/participant by name or ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Matter</div>
  <div>Finds a matter/action by name or ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Contact</div>
  <div>Find a contact based on different search criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Matter</div>
  <div>Find a matter based on different search criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Find or Create Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Matter</div>
  <div>Find or Create Matter</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Participant</div>
  <div>Find or Create Participant</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Contact</div>
  <div>Find a contact based on different search criteria.</div>
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
          <title>Actionstep</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
