import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SmartReach"
      description="SmartReach.io is a sales automation platform that helps you automate sending cold-emails and follow-ups from your mailbox and running email outreach campaigns with built-in tools."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/smartreach.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SmartReach Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 225, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SmartReach.io is a sales automation platform that helps you automate sending cold-emails and follow-ups from your mailbox and running email outreach campaigns with built-in tools.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Link Click</div>
  <div>Triggers when a prospect clicks a link (if click tracking is enabled on the campaign).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Campaign Completed for Prospect</div>
  <div>Triggers when a campaign is completed for a prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invalid Email</div>
  <div>Triggers when a prospect\'s email is found to be invalid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Sent</div>
  <div>Triggers when an email is sent to a prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opened Email</div>
  <div>Triggers when a prospect opens an email from a campaign (if open tracking is enabled on the campaign).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Prospect Category</div>
  <div>Triggers when a prospect\'s category is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reply</div>
  <div>Triggers when a new reply is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opt Out From Campaign</div>
  <div>Triggers when a prospect opts out of a campaign via opt-out link.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Prospect</div>
  <div>Creates a prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags to Prospect</div>
  <div>Add tags to an existing prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign Prospect to Campaign</div>
  <div>Assigns prospect to a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Domain to "Do Not Contact" List</div>
  <div>Adds a new domain to Do Not Contact List.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Email to "Do Not Contact" List</div>
  <div>Adds a new email to Do Not Contact List.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Prospect as Completed</div>
  <div>Marks a prospect as Completed and pauses any active campaign for them.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tags From Prospect</div>
  <div>Remove tags from an existing prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unassign Prospect From Campaign</div>
  <div>Unassigns prospect from current campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Prospect</div>
  <div>Updates an existing prospect based on email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Prospect</div>
  <div>Finds a prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Prospect</div>
  <div>Finds or Creates a prospect.</div>
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
          <title>SmartReach</title>
          <meta name="description" content="SmartReach.io is a sales automation platform that helps you automate sending cold-emails and follow-ups from your mailbox and running email outreach campaigns with built-in tools." />
        </>
      ),
    },
  };
}
