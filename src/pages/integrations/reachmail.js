import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ReachMail"
      description={`ReachMail is an Email Service Provider (ESP) that offers tools for managing and delivering marketing and transactional email messages.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/reachmail.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ReachMail Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(56, 118, 165, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ReachMail is an Email Service Provider (ESP) that offers tools for managing and delivering marketing and transactional email messages.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Bounce</div>
  <div>Triggers when a recipient email address bounces.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Click</div>
  <div>Triggers when a recipient clicks on an email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Open</div>
  <div>Triggers when a recipient opens an email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opt Out</div>
  <div>Triggers when a recipient Opts Out (unsubscribes).</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Schedule a Campaign</div>
  <div>Schedule a new Campaign. Create and Search Mailing will provide the necessary MailingId.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Transactional Email</div>
  <div>Send transactional (one-at-a-time) emails.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Mailing</div>
  <div>Creates a new Mailing which can later be used to create a Campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Recipient</div>
  <div>Add or update a recipient.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opt Out Recipient From List</div>
  <div>Opt out a recipient from a specified list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tag</div>
  <div>Creates a new Tag. Tags are added to recipients and used to filter recipients for Campaigns.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag a Recipient</div>
  <div>Add or Remove a Tag from a Recipient in a List</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Verify an Email Address</div>
  <div>Email Hygiene and Verification check for spam traps (honeypots) and invalid addresses.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Mailings</div>
  <div>Search for a Mailing using the name, folder, Modified Date, etc.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Recipient</div>
  <div>Searched for a Recipient by email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Tags</div>
  <div>Searches for a Tag by Name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Tags</div>
  <div>Searches for a Tag by Name.</div>
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
          <title>ReachMail</title>
          <meta name="description" content={`ReachMail is an Email Service Provider (ESP) that offers tools for managing and delivering marketing and transactional email messages.`} />
        </>
      ),
    },
  };
}
