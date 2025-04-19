import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Kartra"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/kartra.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Kartra Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(55, 146, 188, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Kartra is an all-in-one solution to manage your online business: checkout, automated email campaigns, site builder, membership portals, etc.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Affiliate Signs Up for Product</div>
  <div>Triggers when an affiliate signs up for a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Is Assigned Tag</div>
  <div>Triggers when a lead is assigned a tag.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Buys Product</div>
  <div>Triggers when a customer buys product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Cancels a Calendar</div>
  <div>Triggers when a lead is cancels a calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Completes a Calendar</div>
  <div>Triggers when a lead is completes a calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Registers to a Calendar</div>
  <div>Triggers when a lead is registered to a calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Cancels Subscription</div>
  <div>Triggers when a customer cancels subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Fills an Optin Form</div>
  <div>Triggers when a lead fills in an optin form.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">JV Signs Up for Product</div>
  <div>Triggers when an jv signs up for a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Is Granted Access to Membership</div>
  <div>Triggers when a lead is granted access to membership.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Is Revoked Access to Membership</div>
  <div>Triggers when a lead is revoked access to membership.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Clicks on a Page Split Test Link</div>
  <div>Triggers when a lead clicks on a page split test link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Partial Refunds Product</div>
  <div>Triggers when a customer partial refunds product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Reaches Score for the First Time</div>
  <div>Triggers when a lead reaches score for the first time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Refunds Product</div>
  <div>Triggers when a customer refunds product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Completes a Sequence</div>
  <div>Triggers when a lead completes a sequence.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Is Added to Sequence</div>
  <div>Triggers when a lead is added to a sequence.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Is Removed From Sequence</div>
  <div>Triggers when a lead is removed from sequence.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Subscribes to List</div>
  <div>Triggers when a lead is subscribed to a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Clicks on a Tracking Link</div>
  <div>Triggers when a lead clicks on a tracking link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Is Unssigned Tag</div>
  <div>Triggers when a lead is unassigned a tag.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Is Unsubscribed From List</div>
  <div>Triggers when a lead is unsubscribed from a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Completes a Kartra Video</div>
  <div>Triggers when a lead completes a kartra video.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Plays a Kartra Video</div>
  <div>Triggers when a lead plays a kartra video.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Visits External Page</div>
  <div>Triggers when a lead visits an external page.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Visits a Kartra Page</div>
  <div>Triggers when a lead visits a kartra page.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assign Tag to Lead</div>
  <div>Assign a lead to tags in your Kartra account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Lead Subscription to Calendar</div>
  <div>Cancels a lead subscription to a Kartra calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Suscribe Lead to Calendar</div>
  <div>Subscribes a lead to a Kartra calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel a Subscription</div>
  <div>Cancels a Kartra subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Custom Field</div>
  <div>Creates a custom field in your Kartra account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Lead</div>
  <div>Creates a new lead in your Kartra account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Lead</div>
  <div>Edit an existing lead from your Kartra account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Points to a Lead</div>
  <div>Add points to a lead in your Kartra account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Refund a Transaction</div>
  <div>Refunds a Kartra transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Points From a Lead</div>
  <div>Remove points from a lead in your Kartra account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve All the Lists in Your Account</div>
  <div>Get all the lists in your Kartra account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve All the Pages in Your Account</div>
  <div>Get all the pages in your Kartra account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve All the Sequences in Your Account</div>
  <div>Get all the sequences from your Kartra account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve All the Tags in Your Account</div>
  <div>Get all the tags from the your account in Kartra.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve All the Custom Fields in Your Account</div>
  <div>Get all the custom fields from your account in Kartra.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe Lead to List</div>
  <div>Subscribe a lead to lists in your Kartra account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe Lead to Sequence</div>
  <div>Subscribe a lead to a sequence at a particular step in your Kartra account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unassign Tag From Lead</div>
  <div>Remove tags from a lead of your choosing.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Lead From List</div>
  <div>Unsubscribe a lead from lists in your Kartra account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Lead From Sequence</div>
  <div>Unsubscribe lead from sequences in your Kartra account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Lead Details</div>
  <div>Get the details of the lead, including transactions made, subscriptions to lists, tags and sequences.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Lead</div>
  <div>Search for a lead in your Kartra account.</div>
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
          <title>Kartra</title>
        </>
      ),
    },
  };
}
