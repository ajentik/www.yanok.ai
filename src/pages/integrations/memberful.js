import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Memberful"
      description={`Memberful makes it easy to sell memberships to your audience.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/memberful.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Memberful Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(239, 80, 40, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Memberful makes it easy to sell memberships to your audience.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Custom Fields Updated</div>
  <div>Triggers when a member updates their custom fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Deleted</div>
  <div>Triggers when a member is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member</div>
  <div>Triggers when a new member account is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Updated</div>
  <div>Triggers when a member\'s profile information is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Purchased</div>
  <div>Triggers when a member completes an order or when staff manually adds a new order. Not sent for subscription renewal orders.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Refunded</div>
  <div>Triggers when an order is refunded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Reactivated</div>
  <div>Triggers when a member\'s suspended order is marked completed and the subscription becomes active again.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Created</div>
  <div>Triggers when a member\'s subscription is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Deactivated</div>
  <div>Triggers when a member\'s subscription is suspended, expires, or becomes inactive.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Deleted</div>
  <div>Triggers when a member\'s subscription is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Renewed</div>
  <div>Triggers when a member\'s subscription is renewed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Updated</div>
  <div>Triggers when a member\'s subscription is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tax ID Updated</div>
  <div>Triggers when a member adds, changes or removes their tax ID.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Memberful</title>
          <meta name="description" content={`Memberful makes it easy to sell memberships to your audience.`} />
        </>
      ),
    },
  };
}
