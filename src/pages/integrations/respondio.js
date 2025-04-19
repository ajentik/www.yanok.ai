import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="respond.io"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/respondio.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        respond.io Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(62, 130, 247, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">respond.io unifies customer communication across instant messaging, web chat, and email for organizations that market, sell, and support.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Assignee Updated</div>
  <div>Triggers when the assignee of a Contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Tag Updated</div>
  <div>Triggers when Tag(s) are removed or added on a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when any Contact Fields of a Contact are updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Conversation Closed</div>
  <div>Triggers when a conversation is closed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Conversation Opened</div>
  <div>Triggers when a conversation is opened.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when a new comment is posted to a conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when new Contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Incoming Message</div>
  <div>Triggers when a message is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Outgoing Message</div>
  <div>Triggers when a message is sent.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment</div>
  <div>Adds a comment to a conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags</div>
  <div>Adds Tag(s) for a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a Contact. Leave the contact field empty if you want to store an empty value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Custom Field</div>
  <div>Creates a Custom Field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Creates or updates a Contact. Leave the contact field empty if you want to store an empty value or remain the existing value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Deletes a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tags</div>
  <div>Removes Tag(s) for a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message</div>
  <div>Sends a message to a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates Contact Field(s) of a Contact. Leave the contact field empty if you want to remain the existing value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign or Unassign Conversation</div>
  <div>Updates the assignee of a conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Open or Close Conversation</div>
  <div>Updates the status of a conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get All Channels</div>
  <div>Return all the channels of a Workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get All Closing Notes</div>
  <div>Return all the Closing Notes of a Workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get All Custom Fields</div>
  <div>Return all the Custom Fields of a Workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get All Users</div>
  <div>Return all the users of a Workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds a specific Contact by identifier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact Channels</div>
  <div>Find connected Channels of a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Message</div>
  <div>Finds a specific message by identifier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Custom Field</div>
  <div>Finds a specific Contact Field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Many Contacts</div>
  <div>Return multiple Contacts that matches with the search condition.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds a specific user by identifier.</div>
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
          <title>respond.io</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
