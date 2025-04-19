import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ExpertConnect"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/expertconnect.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ExpertConnect Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(54, 124, 43, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ExpertConnect is a customer service platform for John Deere dealers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket Created</div>
  <div>Triggers when a new ticket is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Archived</div>
  <div>Triggers when a ticket is archived.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Closed</div>
  <div>Triggers when a ticket is closed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Created or Updated</div>
  <div>Triggers when a ticket is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Deleted</div>
  <div>Triggers when a ticket is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Note Created</div>
  <div>Triggers when a new message is sent or received on a ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Reassigned</div>
  <div>Triggers when a ticket is reassigned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Any Ticket Trigger (Advanced)</div>
  <div>Triggers when a ticket is created, updated, closed, archived, unarchived, reassigned, deleted, or ticket note created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Unarchived</div>
  <div>Triggers when a ticket is unarchived.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Updated</div>
  <div>Triggers when a ticket is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Apply Segment to Contact</div>
  <div>Applies an existing segment to a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Apply Tag to Ticket</div>
  <div>Applies an existing tag to an existing ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Close a Ticket</div>
  <div>Closes an existing ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Contact</div>
  <div>Creates a new Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Message</div>
  <div>Sends a message to the contact associated with a ticket. The message is sent as an SMS, WhatsApp message, email, or push notification depending on how the ticket was created and the settings on your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Private Note</div>
  <div>Creates a private (internal) note that\'s only visible to other ExpertConnect users</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Ticket</div>
  <div>Creates a new Ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete a Contact</div>
  <div>Deletes a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Contact by Id</div>
  <div>Gets a single Contact by Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get a List of Contacts</div>
  <div>Gets a list of your contacts</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Ticket Note by Id</div>
  <div>Gets a single Ticket Note by Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Ticket by Id</div>
  <div>Gets a single Ticket by Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Ticket Notes</div>
  <div>Gets public and private ticket notes, status changes, and files for a given ticket. Audio recordings are not returned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get a List of Tickets</div>
  <div>Gets a list of your tickets</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reassign to Advisor</div>
  <div>Reassigns a ticket to an advisor</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reassign to Team</div>
  <div>Reassigns a ticket to a team</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Segment From Contact</div>
  <div>Removes a segment from a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag From Ticket</div>
  <div>Removes a Tag from a Ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Contact</div>
  <div>Updates a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Ticket</div>
  <div>Updates a Ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact by Email</div>
  <div>Finds a contact by their email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Segment by Name</div>
  <div>Find a Segment Id by searching by Segment name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Tag by Name</div>
  <div>Find a Tag Id by searching by Tag Name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact by Phone Number</div>
  <div>Finds a single Contact by their phone number</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Finds a contact by their email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Finds a single Contact by their phone number</div>
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
          <title>ExpertConnect</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
