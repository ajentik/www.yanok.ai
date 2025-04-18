import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Call Tools PCC"
      description="Call Tools is a multi-channel cloud contact center and hosted pbx with a data centric focus."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/call-tools-pcc.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Call Tools PCC Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(15, 53, 78, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Call Tools is a multi-channel cloud contact center and hosted pbx with a data centric focus.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar Event</div>
  <div>Triggers when a new calendar event is created by an agent in Call Tools.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Phone Call</div>
  <div>Triggers when a new phone call is created (after the call ends). Note that depending how fast the agent saves a call disposition, the agent selected call disposition might not be available on the Call object. Use the "Created Call Disposition" trigger instead of the agent call disposition id is needed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Call Disposition Event</div>
  <div>Triggers when a new call disposition is created by an agent in Call Tools.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Support Case</div>
  <div>Triggers when an agent in Call Tools creates a new support case with one of your callers. This is not a case opened with Call Tools support.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a individual new contact is created by an user or over the API. Does not trigger for bulk contact creation processes such as CSV imports of contacts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Disposition Event</div>
  <div>Triggers when a contact disposition is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email</div>
  <div>Triggers when a new email is sent by a agent in Call Tools.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Address</div>
  <div>Triggers when a new email address is added to a contact. Does not trigger for bulk processes such as CSV contact imports.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Goal Achievement</div>
  <div>Triggers when a new goal achievement is created by an agent or an automation in Call Tools.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when an agent in Call Tools saves a new note on a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when a new opportunity is created by an agent or automation in Call Tools.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Phone Number</div>
  <div>Triggers when a new phone number is created and added to a contact. Does not trigger for bulk phone number creation on processes such as CSV import of contacts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New SMS</div>
  <div>Triggers when a SMS message is sent or received within Call Tools.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Tag Event</div>
  <div>Triggers when an agent adds or removes a tag on a contact. Does not trigger for bulk tag operations during a CSV contact import or a bulk update/tagging of contacts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Connector Button Click</div>
  <div>Triggers when an agent clicks a connector button on the agent dashboard in Call Tools.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Bucket a Contact</div>
  <div>Adds a contact to a bucket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Do Not Contact Entry</div>
  <div>Creates a new do not contact entry and optionally updates existing phone numbers and email addresses accordingly. Check Call Tools account settings "DNC Phone Number cascades to Contact" and "DNC Email Address cascades to Contact" if you want a do not call update on a phone number or email address to cause a DNC status on the whole contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag a Contact</div>
  <div>Add a single tag to a existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update a existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact Do Not Contact</div>
  <div>Updates a contact and sets do not contact to true to prevent calls and messages.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact Set Ready</div>
  <div>Updates a contact and sets it as ready to contact. This is a setting that live filters can filter by</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Calendar Event Type by ID</div>
  <div>Gets the calendar event type object by ID so you can check details like its name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Call Disposition by ID</div>
  <div>Gets a single call disposition object by ID so you can get details such as name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Contact by ID</div>
  <div>Retrieve a single contact using a Contact ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Contact Disposition by ID</div>
  <div>Gets a Contact Disposition object by ID to see details such as name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Last Note by Contact ID</div>
  <div>Get only the most recent note for a specific contact ID. This will only return 1 note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get All Notes by Contact ID</div>
  <div>Return all the notes for a specific contact ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get All Notes Summarized by Contact Id</div>
  <div>Get a single text value that summarizes all notes for a single contact ID. This string includes utc time stamps for each note</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Phone Number Object by ID</div>
  <div>Gets a phone number object by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Tag by ID</div>
  <div>Gets a Tag object by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User by ID</div>
  <div>Gets a user object by ID to view details such as name or email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User Custom Settings</div>
  <div>Gets a users custom settings which can be used to store api keys, external CRM IDs, or user specific values to be used in automations and Zaps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Contacts</div>
  <div>Search for Contacts by multiple fields. Make sure the user that owns the API token used for this Zap has the appropriate permissions to query all contacts ("contacts_read_all").</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Contacts by Phone Number</div>
  <div>Search for Contacts by phone number. Depending on your Call Tools account settings multiple contacts may have the same phone number. Make sure the user that owns the API token used for this Zap has the appropriate permissions to query all contacts ("contacts_read_all").</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Phone Number Objects by Phone Number</div>
  <div>Finds a phone number object by phone number and optionally contact id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Search for Contacts by multiple fields. Make sure the user that owns the API token used for this Zap has the appropriate permissions to query all contacts ("contacts_read_all").</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Search for Contacts by phone number. Depending on your Call Tools account settings multiple contacts may have the same phone number. Make sure the user that owns the API token used for this Zap has the appropriate permissions to query all contacts ("contacts_read_all").</div>
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
          <title>Call Tools PCC</title>
          <meta name="description" content="Call Tools is a multi-channel cloud contact center and hosted pbx with a data centric focus." />
        </>
      ),
    },
  };
}
