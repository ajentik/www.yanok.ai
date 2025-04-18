import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Autoklose"
      description="Autoklose is a sales platform that automates email followup and outreach to boost your team’s productivity and performance."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/autoklose.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Autoklose Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(235, 98, 52, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Autoklose is a sales platform that automates email followup and outreach to boost your team’s productivity and performance.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Email Bounce</div>
  <div>Triggers when a bounce reply is detected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Open</div>
  <div>Triggers when a campaign email is opened.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Reply</div>
  <div>Triggers when a user replies to a campaign email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Send</div>
  <div>Triggers when an email is sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Unsubscribe</div>
  <div>Triggers when a recipients unsubscribes from a campaign email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Click</div>
  <div>Triggers when a user clicks a link in a campaign email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reply Tagged</div>
  <div>Triggers when a tag is applied to an existing reply.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tag Assigned</div>
  <div>Triggers when a tag is applied to an existing contact.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Campaign Recipient</div>
  <div>Adds a campaign recipient.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Recipient to Do Not Email List</div>
  <div>Adds a new recipient to a Do Not Email list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Campaign Recipient</div>
  <div>Removes a campaign recipient.</div>
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
          <title>Autoklose</title>
          <meta name="description" content="Autoklose is a sales platform that automates email followup and outreach to boost your team’s productivity and performance." />
        </>
      ),
    },
  };
}
