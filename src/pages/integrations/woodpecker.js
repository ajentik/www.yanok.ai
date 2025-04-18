import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Woodpecker.co"
      description="Woodpecker.co helps B2B companies directly contact prospective clients by automated sending of personalized sales emails and follow-ups. Send emails and follow-up sequences automatically from your mailbox and have all the replies detected. Grow your business within the Predictable Revenue methodology by Aaron Ross in outbound, and nurture your inbound leads more personally to build valuable B2B relations."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/woodpecker.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Woodpecker.co Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(226, 16, 55, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Woodpecker.co helps B2B companies directly contact prospective clients by automated sending of personalized sales emails and follow-ups. Send emails and follow-up sequences automatically from your mailbox and have all the replies detected. Grow your business within the Predictable Revenue methodology by Aaron Ross in outbound, and nurture your inbound leads more personally to build valuable B2B relations.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Campaign Completed</div>
  <div>Triggers when a Woodpecker campaign status changes to COMPLETED.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Sent</div>
  <div>Triggers when Woodpecker sends an email to prospect from campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Opened</div>
  <div>Triggers when a prospect opens your email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Follow-Up After Autoreply</div>
  <div>Triggers when you set a date for resuming follow-ups after you got an autoreply from a prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Link Clicked</div>
  <div>Triggers when a prospect clicks on a link in your email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Autoreplied</div>
  <div>Triggers when you get an autoresponder from a prospect, or when you manually mark a prospect as AUTOREPLIED.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Blacklisted</div>
  <div>Triggers when a prospect status is changed to BLACKLISTED manually or when prospect unsubscribes from Woodpecker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Bounced</div>
  <div>Triggers when a prospect’s email address bounces your message and the prospect status gets changed to BOUNCED in Woodpecker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Interested</div>
  <div>Triggers when you mark a prospect who replied as INTERESTED.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Invalid</div>
  <div>Triggers when a prospect’s email address doesn\'t exist on an external server. This check happens when Woodpecker tries to send an email to this prospect. Status is changed to INVALID in Woodpecker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Maybe Later</div>
  <div>Triggers when you mark a prospect who replied as MAYBE LATER.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Not Interested</div>
  <div>Triggers when you mark a prospect who replied as NOT INTERESTED.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Opt Out</div>
  <div>Triggers when prospect unsubscribes from your emails or is marked as OPT-OUT manually.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Replied</div>
  <div>Triggers when a prospect replies to your email or is manually marked as REPLIED in Woodpecker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Saved</div>
  <div>Triggers when a Woodpecker prospect is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Secondary Reply</div>
  <div>Triggers when a secondary reply is found by Woodpecker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Manual Task Created</div>
  <div>Triggers when a manual task of any type is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Manual Task Done</div>
  <div>Triggers when a manual task is marked as done.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Manual Task Ignored</div>
  <div>Triggers when a manual task is marked as ignored.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Prospect in Campaign</div>
  <div>Adds a new prospect or updates existing prospect\'s data in a campaign of choice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Prospect</div>
  <div>Adds a new prospect or Updates existing prospect in the list of Prospects.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Prospect\'s Responses</div>
  <div>Fetch all prospect\'s responses from Woodpecker</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Stop Follow-Ups</div>
  <div>Stop follow-ups planned for this prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Prospect\'s Email</div>
  <div>Finds prospect by email address.</div>
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
          <title>Woodpecker.co</title>
          <meta name="description" content="Woodpecker.co helps B2B companies directly contact prospective clients by automated sending of personalized sales emails and follow-ups. Send emails and follow-up sequences automatically from your mailbox and have all the replies detected. Grow your business within the Predictable Revenue methodology by Aaron Ross in outbound, and nurture your inbound leads more personally to build valuable B2B relations." />
        </>
      ),
    },
  };
}
