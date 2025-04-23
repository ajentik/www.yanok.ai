import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Snov.io"
      description={`Snov.io is an easy and powerful CRM. Find leads, manage your database, and send converting automated emails.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/snovio.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Snov.io Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Snov.io is an easy and powerful CRM. Find leads, manage your database, and send converting automated emails.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Prospect</div>
  <div>Triggers when a new prospect is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Link Clicked</div>
  <div>Triggers when a prospect clicks a link in an email (once per email).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Opened</div>
  <div>Triggers when a prospect opens your email (once per email).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reply</div>
  <div>Triggers when a new reply from a prospect is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Completed Campaign</div>
  <div>Triggers when a campaign is completed for a prospect.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Email for Verification</div>
  <div>This action adds an email for verification. You can receive the results of the verification through Collect Verification Results.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Email</div>
  <div>This action launches a search of emails by first name, last name, and domain name; collect search results through Collect Email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Recipient\'s Status</div>
  <div>Change recipient\'s status in an email drip campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create / Update Prospect</div>
  <div>Creates / updates a prospect</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Collect Email</div>
  <div>Collects found emails</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Collect Verification Results</div>
  <div>Collect email verification results after Add Email For Verification through this action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Prospect by Email</div>
  <div>Finds a prospect by their email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Prospect by ID</div>
  <div>Finds a prospect by their ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Prospect</div>
  <div>Finds a prospect by their email.</div>
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
          <title>Snov.io</title>
          <meta name="description" content={`Snov.io is an easy and powerful CRM. Find leads, manage your database, and send converting automated emails.`} />
        </>
      ),
    },
  };
}
