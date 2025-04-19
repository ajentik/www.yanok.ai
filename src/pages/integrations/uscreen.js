import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Uscreen"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/uscreen.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Uscreen Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(57, 182, 179, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Uscreen is a fully hosted video platform enabling you to sell and distribute your videos online.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Paid Order</div>
  <div>Triggers when a payment is processed for subscriptions, bundles, or content.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Canceled Subscription</div>
  <div>Triggers when a subscription is canceled for a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is added to your storefront.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Updated</div>
  <div>Triggers when a user is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Began to Play Video</div>
  <div>Triggers when a user plays a video for the first time.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new user and optionally sends them a welcome email to your storefront.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign User Access</div>
  <div>Assigns a bundle or subscription to a customer. Creates a new customer if one doesn\'t exist.</div>
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
          <title>Uscreen</title>
        </>
      ),
    },
  };
}
