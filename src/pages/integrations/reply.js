import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Reply"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/reply.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Reply Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(78, 159, 227, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Reply is a sales automation platform that puts outreach on autopilot, while still making each communication personal.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Inbox Category Set for Reply</div>
  <div>Triggers when reply marked with a new inbox category.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person Bounce</div>
  <div>Triggers when an email address bounce (soft &amp; hard).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Link Clicked</div>
  <div>Triggers when a person clicks your link in email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Emails Sent</div>
  <div>Triggers when new email sent (first step or follow-up).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Opened</div>
  <div>Triggers when a person opens your email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person Opt Out</div>
  <div>Triggers when a person clicks opt out link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Replied</div>
  <div>Triggers when a person replied.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Finished</div>
  <div>Triggers when a prospect finishes in terms of campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add or Update Contact</div>
  <div>Triggers when new contacts are created manually or existing contacts are updated manually.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Zapier Step Launched</div>
  <div>Triggers when a Sequence\'s Zapier step is launched</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create\Update Person and Push to Campaign</div>
  <div>Create/Update a person and push it to campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create\Update Person</div>
  <div>Creates\Updates a person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark as Finished</div>
  <div>Mark as Finished a person in the campaign</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark as Replied</div>
  <div>Marks prospects as replied in some campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move to the Next Step</div>
  <div>Move a person to the next step in sequence from Zapier step</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Person From Campaign</div>
  <div>Remove person from concrete campaign</div>
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
          <title>Reply</title>
        </>
      ),
    },
  };
}
