import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zinrelo"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zinrelo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zinrelo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(88, 169, 70, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Zinrelo is a modern-day loyalty rewards platform that helps maximize repeat sales and per-customer revenue through 360-degree customer engagement.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Loyalty Member Enrolment</div>
  <div>Triggers when a new loyalty member is enrolled in the loyalty program.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Points Awarded</div>
  <div>Triggers when points are awarded to a loyalty member. This will trigger only when the status of the points award transaction is approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Points Deducted</div>
  <div>Triggers when points are deducted from a loyalty member\'s account balance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Points Expired</div>
  <div>Triggers when points in the loyalty member\'s account expire.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Points Redeemed</div>
  <div>Triggers when a loyalty member redeems a reward against the points.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tier Downgrade</div>
  <div>Triggers when a loyalty member is downgraded to a lower tier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tier Upgrade</div>
  <div>Triggers when a loyalty member is upgraded to a higher tier.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Award Points for Non-Purchase Activity</div>
  <div>This action is used to award points for the non-purchase activities.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Award Points for Purchase</div>
  <div>This action awards points for the purchase made by a loyalty member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Block Loyalty Member</div>
  <div>This action blocks the loyalty member from accessing the loyalty program.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Loyalty Member</div>
  <div>This action creates a new loyalty member in the loyalty program. If the user is already present, this action can also be used to update the user information like - First Name, Last Name and tags.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deduct Points</div>
  <div>This action is used to deduct points from a loyalty member\'s account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deduct Points for Order Returns</div>
  <div>This action is used to deduct points from a loyalty member\'s account when they return a product they bought</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Loyalty Member</div>
  <div>This action unsubscribes a loyalty member from all the Zinrelo notifications.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Loyalty Member Email</div>
  <div>This action updates the email for the loyalty member with the new email provided.</div>
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
          <title>Zinrelo</title>
        </>
      ),
    },
  };
}
