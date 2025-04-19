import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Spiro"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/spiro.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Spiro Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(240, 98, 35, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Spiro is an AI-Powered CRM that learns your sales process to increase effectiveness and deliver more accurate business insights.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Updated Company</div>
  <div>Triggers when company updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when a contact is updated on your selected fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opportunity Sales Stage Change</div>
  <div>Triggers when opportunity sales stage changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when new company created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when new Activity is created. Note that it would not trigger for new Notes, Emails, Events, SMS or Attachments</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Custom Entity</div>
  <div>Triggers when new custom entity created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when new opportunity created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reminder</div>
  <div>Triggers when new reminder is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when new ticket created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when new user created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Opportunity</div>
  <div>Triggers when an opportunity is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opportunity Won</div>
  <div>Triggers when opportunity closed won.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Company Update Related Entity List</div>
  <div>Triggers when a company is updated and pulls records for a custom entity associated to the company (with line items support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Update Related Entity List</div>
  <div>Triggers when a contact is updated and pulls records for a custom entity associated to the contact (with line items support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opportunity Update Related Entity List</div>
  <div>Triggers when an opportunity is updated and pulls records for a custom entity associated to the opportunity (with line items support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Quote</div>
  <div>Triggers when a quote is updated on your selected fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Ticket</div>
  <div>Triggers when a ticket is updated on your selected fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Custom Entity</div>
  <div>Triggers when custom entity updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated User</div>
  <div>Triggers when user updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Clone Opportunity</div>
  <div>Clones opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create List Entity Record (Under Company)</div>
  <div>Creates a new list entity record (under company).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create List Entity Record (Under Contact)</div>
  <div>Creates a new list entity record (under contact).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Record for Independent Custom Entity</div>
  <div>Creates a new list entity record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Interaction</div>
  <div>Creates interaction for contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity (Company)</div>
  <div>Creates a new company opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity (Contact)</div>
  <div>Creates new opportunity from a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create List Entity Record (Under Opportunity)</div>
  <div>Creates a new list entity record (under opportunity).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Reminder</div>
  <div>Creates reminder for contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Reminder (For Company)</div>
  <div>Creates reminder for company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Reminder (For Opportunity)</div>
  <div>Creates reminder for opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket</div>
  <div>Creates ticket for the contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Updates company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update List Entity Record</div>
  <div>Updates list entity record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity</div>
  <div>Updates opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Quote</div>
  <div>Updates quote.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Reminder</div>
  <div>Updates reminder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Section Entity Record</div>
  <div>Updates section entity record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Ticket</div>
  <div>Updates ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Updates user. Only admins are allowed to use this action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Find Company by a field and value you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company Related Entities</div>
  <div>Find company and return all custom objects for that company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact</div>
  <div>Find a Contact by a field and value you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact Related Entities</div>
  <div>Find contact and return all custom objects for that contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lookup Row in List Entities</div>
  <div>Lookup Row in List Entities.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Many Rows in List Entities</div>
  <div>Finds many matched entities (20 max.) With Line Items Support.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Opportunity</div>
  <div>Find Opportunity by a field and value you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Opportunity Related Entities</div>
  <div>Find opportunity and return all custom objects for that opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Quote</div>
  <div>Find a Quote by a field and value you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Ticket</div>
  <div>Find a Ticket by a field and value you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Find User by a field and value you choose.</div>
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
  <div class="font-semibold">Find or Create Opportunity</div>
  <div>Find or Create Opportunity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Ticket</div>
  <div>Find or Create Ticket</div>
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
          <title>Spiro</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
