import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Tarvent"
      description="Tarvent marketing automation platform empowers businesses of all sizes by providing a great depth of features and customization to control every aspect of your customer's experience."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/tarvent.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Tarvent Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(10, 98, 171, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Tarvent marketing automation platform empowers businesses of all sizes by providing a great depth of features and customization to control every aspect of your customer\'s experience.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Campaign Send Finished</div>
  <div>Triggers when a campaign has finished sending to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Campaign Send Started</div>
  <div>Triggers when a campaign has started sending to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Added to an Audience</div>
  <div>Triggers when a new contact is added to an audience via import and manually.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Campaign or Transactional Email Bounced</div>
  <div>Triggers when a campaign or transactional email bounces (is rejected) for a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Campaign or Transactional Link Clicked</div>
  <div>Triggers when a link within a campaign or transactional email is clicked by a recipient.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Replied to a Conversation</div>
  <div>Triggers when a contact replies to a conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Added or Removed From a Group</div>
  <div>Triggers when a contact is added or removed from a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Note Added</div>
  <div>Triggers when a note is added to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Campaign or Transactional Email Opened</div>
  <div>Triggers when a campaign or transactional email is opened by a recipient.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Status Changed</div>
  <div>Triggers when a contact\'s status changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Tag Added or Removed</div>
  <div>Triggers when a tag is added or removed from a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Unsubscribe</div>
  <div>Triggers when a contact unsubscribes from an audience.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Profile Updated</div>
  <div>Triggers when a contact\'s profile is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Form Submission Received</div>
  <div>Triggers when a known or unknown contact submits a sign up, profile update, or other form.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Landing Page CTA Performed</div>
  <div>Triggers when a known or unknown contact performs a Call-To-Action within a landing page.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Survey Submission Received</div>
  <div>Triggers when a known or unknown contact submits a survey.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Created</div>
  <div>Triggers when a transactional email is created for a known or unknown contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Sent</div>
  <div>Triggers when a transactional email is processed and sent to one or more recipients.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create an Audience Group</div>
  <div>Creates an audience group in the selected audience.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note to Contact</div>
  <div>Adds a note to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add/Remove Contact From Audience Group</div>
  <div>Adds or removes a contact from an audience group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add/Remove a Contact From a Journey</div>
  <div>Adds or removes the contact from a journey.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe/Unsubscribe Contact From Audience</div>
  <div>Subscribes or unsubscribe a contact in an audience.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add/Remove Contact Tag</div>
  <div>Adds or removes a tag from contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Contact</div>
  <div>This action is used to create or update a contact in an audience.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate a Custom Event</div>
  <div>Generate a custom event in your Tarvent account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start/Stop Journey</div>
  <div>Starts or stops a journey.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Campaign</div>
  <div>Sends a copy of a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to Suppression List</div>
  <div>Creates a suppression filter in your account to suppress a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Transactional Email</div>
  <div>Sends a transactional email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Audience</div>
  <div>Finds an audience by name or tags.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Audience Group</div>
  <div>Finds an audience group by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Campaign</div>
  <div>Finds a campaign by name, status or tags.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds a contact by your custom key data field (typically this is by email).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Custom Event</div>
  <div>Finds a custom event by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Journey</div>
  <div>Finds a journey by name, status or tags.</div>
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
          <title>Tarvent</title>
          <meta name="description" content="Tarvent marketing automation platform empowers businesses of all sizes by providing a great depth of features and customization to control every aspect of your customer's experience." />
        </>
      ),
    },
  };
}
