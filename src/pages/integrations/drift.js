import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Drift"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/drift.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Drift Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(45, 136, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Drift is a messaging app that makes it easy for businesses to talk to their website visitors and customers in real-time, from anywhere.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Conversation Manual Push</div>
  <div>Triggers when a conversation is ready for consumption by third-party systems. This can occur in the following situations: - A conversation has not been active for a specified period of time (customizable by each organization) - A conversation had its status changed to \'closed\' - A conversation was manually push to third-parties by a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Conversation Pushed</div>
  <div>Triggers when a conversation is ready for consumption by third-party systems. This can occur in the following situations: - A conversation has not been active for a specified period of time (customizable by each organization) - A conversation had its status changed to \'closed\' - A conversation was manually push to third-parties by a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when an email address is collected from a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Conversation</div>
  <div>Triggers when a conversation is started.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message</div>
  <div>Triggers each time a new message in a conversation is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created through drift.identify. Unless specified by the Drift team, use the "new lead" trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Reached Goal</div>
  <div>Triggers when a User has hit a goal within a playbook.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Reached Goal With Lead Stage</div>
  <div>Triggers when a User reaches a Goal with a specific Lead Stage.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact From External</div>
  <div>Creates or updates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Log Event for Contact</div>
  <div>Logs an event for a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Known Contact</div>
  <div>Updates an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User by Anonymous Id</div>
  <div>Lookup data for an existing user by their anonymous id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User by End User Id</div>
  <div>Lookup User information by their end user id.</div>
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
          <title>Drift</title>
        </>
      ),
    },
  };
}
