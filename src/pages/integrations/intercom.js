import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Intercom"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/intercom.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Intercom Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(77, 157, 224, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Intercom is the Engagement OS, an open channel between customer and business that is in the product, in the moment, and on their terms. We break down silos, unifying data and systems to create an ongoing dialogue, so companies can make the most of every opportunity.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Lead Added Email</div>
  <div>Triggers when a Lead enters an email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Converted to User</div>
  <div>Triggers when a lead converts to a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new Lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to Lead</div>
  <div>Triggers when a lead is tagged.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to Conversation</div>
  <div>Triggers when a new tag is added to a conversation in Intercom.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Conversation</div>
  <div>Triggers when a new conversation is created by a user in Intercom.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Closed Conversation</div>
  <div>Triggers when you close a conversation. (Note: The "Reply and close" button won\'t trigger this. You must reply and then close the conversation separately).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new Company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to User</div>
  <div>Triggers when a user is tagged.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unsubscription</div>
  <div>Triggers when a user unsubscribes from Intercom.io emails.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Note</div>
  <div>Add a note to a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Event</div>
  <div>Tags a user with an event that occurred.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Incoming Message</div>
  <div>Send a message from a user into your Intercom app. Note: you must have a valid plan on Intercom to access this action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add/Remove Tag on Company</div>
  <div>Attach or remove a tag from a specific company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add/Remove Tag on Lead</div>
  <div>Attach or remove a tag on a specific lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add/Remove Tag on User</div>
  <div>Attach or remove a tag on a specific user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Updates a company within Intercom. If you\'d like to create a company, use this action in conjunction with a Find/Create step.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Lead</div>
  <div>Create or update an Intercom lead. If an ID is provided, the lead will be updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update User</div>
  <div>Update a user within Intercom given their e-mail address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new user in your Intercom app.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Finds an existing company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead</div>
  <div>Finds an existing Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds an existing user.</div>
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
  <div class="font-semibold">Find or Create Lead</div>
  <div>Find or Create Lead</div>
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
          <title>Intercom</title>
        </>
      ),
    },
  };
}
