import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Mailshake"
      description="Mailshake is a simple outreach tool that works with any Google account."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mailshake.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Mailshake Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 90, 172, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Mailshake is a simple outreach tool that works with any Google account.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Click</div>
  <div>Triggers when a recipient clicks on a link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Status</div>
  <div>Triggers when the status of a lead changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message Sent</div>
  <div>Triggers when an email is sent to a recipient from one of the campaign sequence messages.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Open</div>
  <div>Triggers when a recipient opens an email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reply</div>
  <div>Triggers when a recipient replies to one of your messages.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Recipient by Email Address</div>
  <div>Adds a single recipient to a campaign. NOTE: This can cause emails to immediately be sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Recipients by Email Addresses</div>
  <div>Adds multiple recipients to a campaign. NOTE: this can cause emails to be immediately sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Recipients From CSV</div>
  <div>Adds a list of recipients to a campaign via a CSV file. Each column can be used as a text replacement. NOTE: This can cause emails to immediately be sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Leads</div>
  <div>Creates leads from existing recipients that match the given email addresses.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pause/Unpause Campaign</div>
  <div>Pauses or unpauses all sending for a campaign. When pausing, emails currently being sent will not be stopped. When unpausing, the sending calendar will be rescheduled to account for any pending emails.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pause/Unpause Recipient</div>
  <div>Pauses or unpauses a recipient from receiving pending emails. WARNING: When unpausing, this may cause emails to be sent immediately.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Recipients</div>
  <div>Unsubscribes one or more recipients from all current and future campaigns for your team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead Status</div>
  <div>Updates lead status to Won, Lost, Ignored, or Reopened.</div>
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
          <title>Mailshake</title>
          <meta name="description" content="Mailshake is a simple outreach tool that works with any Google account." />
        </>
      ),
    },
  };
}
