import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="e-shot"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/e-shot.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        e-shot Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 153, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">e-shot™ is an intuitive marketing automation platform offering intelligent automation & a team that cares. We help your email marketing deliver beyond the click.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Bounced</div>
  <div>Triggers when a contact Bounces.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Clicked</div>
  <div>Triggers when a contact clicks.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Deleted</div>
  <div>Triggers when a contact is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Displayed</div>
  <div>Triggers when a contact displays an email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Contact</div>
  <div>Triggers when a new contact is added or an existing contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Subscribed to Preference</div>
  <div>Triggers when a contact subscribes to a preference.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Unsubscribed From Email</div>
  <div>Triggers when a contact is unsubscribed from email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Unsubscribed From Preference</div>
  <div>Triggers when a contact unsubscribes from a preference.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Unsubscribed From SMS</div>
  <div>Triggers when a contact is unsubscribed from SMS.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Deletes the specified contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add an Existing Contact to an Existing Group</div>
  <div>Adds an existing contact to an existing group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove an Existing Contact From an Existing Group</div>
  <div>Removes an existing contact from an existing group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Save Contact</div>
  <div>Create a new contact or update an existing one. We work this out based on whether the specified details match a contact in your e-shot™ account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe Contact to Preference</div>
  <div>Subscribe a contact to a preference.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Contact From Email</div>
  <div>Unsubscribes a contact from email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Contact From Preference</div>
  <div>Unsubscribes a contact from a preference.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Contact From SMS</div>
  <div>Unsubscribes a contact from SMS.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Save Group</div>
  <div>Create a new group or update an existing one. We work this out based on whether the specified details match a group in your e-shot™ account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact</div>
  <div>Finds a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Group</div>
  <div>Finds a Group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create ContactResource</div>
  <div>Finds a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create GroupResource</div>
  <div>Finds a Group.</div>
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
          <title>e-shot</title>
        </>
      ),
    },
  };
}
