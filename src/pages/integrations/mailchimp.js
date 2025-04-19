import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Mailchimp"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mailchimp.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Mailchimp Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 224, 27, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Share your ideas with Mailchimp email newsletters—then use its landing page and form builders to grow your lists and take marketing further with drip and transactional emails.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign</div>
  <div>Triggers when a new campaign is created or sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Opened</div>
  <div>Triggers when a recipient opens an e-mail in a specific campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Link Clicked</div>
  <div>Triggers when a recipient clicks a pre-specified link in your campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Audience</div>
  <div>Triggers when a new audience is added to your MailChimp accounts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is added to a selected store.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber</div>
  <div>Triggers when a new subscriber is added to an audience.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unsubscriber</div>
  <div>Triggers when any current subscriber unsubscribes from an audience.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber in Segment or Tag</div>
  <div>Triggers when a subscriber is added to a segment or tag within an audience.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Subscriber</div>
  <div>Triggers when a subscriber is added or updated in an audience.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Campaign</div>
  <div>Creates a campaign draft.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tag</div>
  <div>Creates a new tag.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Custom Event</div>
  <div>Creates a custom event for an existing subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add/Update Subscriber</div>
  <div>Add a new subscriber to an audience of your choosing. Can be used to update an existing subscriber too.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Email</div>
  <div>Unsubscribe an email address from an audience of your choosing.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Subscriber from Tag</div>
  <div>Removes an existing subscriber by email address from a tag within an audience. Note: the email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Campaign</div>
  <div>Sends a campaign draft. PLEASE NOTE: This action sends an email to</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note to Subscriber</div>
  <div>Adds a new note to an existing subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Subscriber to Tag</div>
  <div>Add an email address to a tag within an audience. Note: the email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Campaign</div>
  <div>Finds an existing campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Finds a customer by an email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Tag</div>
  <div>Find a tag.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Subscriber</div>
  <div>Searches for a new subscriber on your MailChimp audience.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Campaign</div>
  <div>Finds an existing campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Tag</div>
  <div>Find or Create Tag</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Subscriber</div>
  <div>Searches for a new subscriber on your MailChimp audience.</div>
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
          <title>Mailchimp</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
