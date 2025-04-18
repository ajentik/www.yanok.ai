import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ActiveCampaign"
      description="ActiveCampaign is a customer experience automation (CXA) platform that helps businesses meaningfully engage customers. Access pre-built automations that combine transactional email and email marketing, marketing automation, ecommerce marketing, and CRM for powerful segmentation and personalization across social, email, messaging, chat, and text."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/activecampaign.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ActiveCampaign Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(52, 99, 163, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ActiveCampaign is a customer experience automation (CXA) platform that helps businesses meaningfully engage customers. Access pre-built automations that combine transactional email and email marketing, marketing automation, ecommerce marketing, and CRM for powerful segmentation and personalization across social, email, messaging, chat, and text.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Custom Object Record</div>
  <div>Triggers when a Custom Object record is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Custom Object Record Deleted</div>
  <div>Triggers when a custom object record is deleted in ActiveCampaign</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Task Completed</div>
  <div>Triggers when a deal task has been completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Account</div>
  <div>Triggers when a new account is added or an existing account\'s details are updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Automation Webhook</div>
  <div>Triggers when an automation sends out webhook data. To add a webhook in ActiveCampaign, navigate to your Automations section, add or edit an automation, and create a new "Webhook" action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign Bounce</div>
  <div>Triggers when a contact email address bounces from a sent campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign Link Click</div>
  <div>Triggers when a contact clicks a link in a campaign message (will only run once for each unique link).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign Open</div>
  <div>Triggers when a contact opens a campaign (will trigger once per contact per campaign).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign Starts Sending</div>
  <div>Triggers when a new campaign starts sending.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign Unsubscribe</div>
  <div>Triggers when a contact unsubscribes as a result of a campaign email sent to them.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Note</div>
  <div>Triggers when a new contact note is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Task</div>
  <div>Triggers when a new contact task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal Note</div>
  <div>Triggers when a new deal note is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal Task</div>
  <div>Triggers when a new deal task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal Added or Updated</div>
  <div>Triggers when a new deal is created or existing deal is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Added to List</div>
  <div>Triggers when a new contact is added to a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when an existing contact details are updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Contact</div>
  <div>Triggers when a new contact is added or existing contact\'s details are updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added or Removed From Contact</div>
  <div>Triggers when a a Tag is added or removed from a Contact</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Creates a new account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Account</div>
  <div>Updates an account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Creates a new contact, or updates an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal (Deprecated)</div>
  <div>Creates a new deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Existing Contact to Automation</div>
  <div>Adds an existing contact into any automation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Contact From Automation</div>
  <div>The contact will be removed from this active automation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Campaign</div>
  <div>Creates and sends a new campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to Account</div>
  <div>Adds a contact to an ActiveCampaign account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact Note</div>
  <div>Adds new contact note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add/Remove Tag From Contact</div>
  <div>Add or remove a tag from a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact Task</div>
  <div>Creates or updates a contact task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update a Custom Object Record</div>
  <div>Creates a new custom object record or update an existing record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Secondary Contact to Deal</div>
  <div>With a deal ID and a contact ID set the corresponding contact as a secondary on the deal. Optionally set the role. If the Deal has no Primary contact set, this contact will be set as Primary if you DO NOT select a role.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a new deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note to Deal</div>
  <div>Adds a note to a deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Deal Task</div>
  <div>Creates or updates a deal task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal</div>
  <div>Updates an existing deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe or Unsubscribe Contact From List</div>
  <div>Subscribes a Contact to a List it is not currently associated with, or Unsubscribes a Contact from a list is currently associated with.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tracked Event</div>
  <div>Creates a custom website or application event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Account</div>
  <div>Finds account by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds a contact by email address or ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact Task</div>
  <div>Finds a contact task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Deal</div>
  <div>Finds an existing deal by title or email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Deal Owner</div>
  <div>Looks for a Deal and if found, returns the User that owns the Deal</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Deal Task</div>
  <div>Finds a deal task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds a user by email address.</div>
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
          <title>ActiveCampaign</title>
          <meta name="description" content="ActiveCampaign is a customer experience automation (CXA) platform that helps businesses meaningfully engage customers. Access pre-built automations that combine transactional email and email marketing, marketing automation, ecommerce marketing, and CRM for powerful segmentation and personalization across social, email, messaging, chat, and text." />
        </>
      ),
    },
  };
}
