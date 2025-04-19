import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Vero"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/vero.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Vero Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(1, 178, 208, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Vero is an event-based messaging platform. Increase conversions and customer satisfaction by sending more targeted emails.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Email Bounced</div>
  <div>Triggers when an email bounces.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Clicked</div>
  <div>Triggers when a link in an email is clicked.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Complained</div>
  <div>Triggers when an email bounces.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Converted</div>
  <div>Triggers when an email converts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Delivered</div>
  <div>Triggers when an email is delivered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Opened</div>
  <div>Triggers when an email is opened.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Resubscribe User</div>
  <div>Triggers when a user resubscribes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Sent</div>
  <div>Triggers when an email is sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe User</div>
  <div>Triggers when a user unsubscribes. We will send you specific user\'s data when a user unsubscribes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Triggers when a user\'s details are updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Alias a User</div>
  <div>This endpoint lets you change a user’s identifier (id).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete a User</div>
  <div>This endpoint lets you delete a single user. Danger: When deleting a user, all properties and activities will be lost forever. Deleted users are not recoverable.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Track an Event</div>
  <div>Track an event in Vero for a user when they take a specific action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Resubscribe a User</div>
  <div>Resubscribes a user</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User\'s Tags</div>
  <div>Add or remove tags for a user. Although both add and remove have been marked as optional, at least one is required.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe a User</div>
  <div>Unsubscribe a user in Vero so that they no longer receive any marketing emails (transactional emails will still be sent).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update a User</div>
  <div>Identify or update a user\'s profile in Vero. If you trigger this event and a user with the provided ID does not exist, Vero will create one. If a user with the ID already exists, we\'ll update that user and their properties.</div>
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
          <title>Vero</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
