import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Prefinery"
      description="More than just a landing page, Prefinery is a complete beta management launch platform that encourages social sharing and helps you learn from your users."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/prefinery.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Prefinery Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(252, 115, 35, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">More than just a landing page, Prefinery is a complete beta management launch platform that encourages social sharing and helps you learn from your users.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Reward Delivered</div>
  <div>Triggered when a reward is delivered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reward Earned</div>
  <div>Triggered when a user earns a reward.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reward Revoked</div>
  <div>Triggered when a reward is revoked.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Activated</div>
  <div>Triggered when a user is activated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Applied</div>
  <div>Triggered when a user applies.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Created</div>
  <div>Triggered when a new user is created, irrespective of their status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Invited</div>
  <div>Triggered when a user is invited.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Rejected</div>
  <div>Triggered when a user is rejected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Resubscribed</div>
  <div>Triggered when a user re-subscribes to receive emails.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Suspended</div>
  <div>Triggered when a user is suspended.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Unconfirmed</div>
  <div>Triggered when a user applies and is pending opt-in confirmation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Unsubscribed</div>
  <div>Triggered when a user unsubscribes from receiving emails.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Updated</div>
  <div>Triggered when a user is updated or modified. For example, when they change status or their profile is modified.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe User</div>
  <div>Unsubscribe a User and add their email address to the suppression list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Trigger Rewards</div>
  <div>Trigger rewards when a user performs a custom event.</div>
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
          <title>Prefinery</title>
          <meta name="description" content="More than just a landing page, Prefinery is a complete beta management launch platform that encourages social sharing and helps you learn from your users." />
        </>
      ),
    },
  };
}
