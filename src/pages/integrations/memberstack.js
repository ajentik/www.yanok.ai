import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Memberstack"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/memberstack.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Memberstack Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(41, 98, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Simple Auth & Payments for Webflow Developers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Member</div>
  <div>Triggers when a new member is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Deleted</div>
  <div>Triggers when a member is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member\'s Plan Canceled</div>
  <div>Triggers when a member\'s plan is canceled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member\'s Plan Added</div>
  <div>Triggers when a plan is added to a member. Memberstack allows member\'s to have multiple plans, and this trigger fires each time a plan is added to a member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member\'s Plan Updated</div>
  <div>Triggers when a member\'s plan is updated. Any time the status of the plan updates or payment period updates (e.g. when a subscription renews, if the billing period is edited in the Stripe dashboard, etc.).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Updated</div>
  <div>Triggers when a member’s email, custom fields, or metadata are updated. Does not fire on password change.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Free Plan to Member</div>
  <div>Adds a free plan to a member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Member</div>
  <div>Creates a member with no plans or a free plan.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Member</div>
  <div>Deletes a member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Free Plan From Member</div>
  <div>Removes a free plan from a member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Member</div>
  <div>Updates a member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Member</div>
  <div>Lookup a member by id.</div>
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
          <title>Memberstack</title>
        </>
      ),
    },
  };
}
