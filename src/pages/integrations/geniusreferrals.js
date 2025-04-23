import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="GeniusReferrals"
      description={`Referral Marketing Platform that helps businesses to acquire new customers using word of mouth and recommendation techniques.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/geniusreferrals.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        GeniusReferrals Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 191, 191, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Referral Marketing Platform that helps businesses to acquire new customers using word of mouth and recommendation techniques.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Tiggers when a new account (program) is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Advocate</div>
  <div>Triggers when a new advocate is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Bonus</div>
  <div>Triggers when a new bonus is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member</div>
  <div>Triggers when a new member (advocate, referral, or lead) is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payout Request</div>
  <div>Triggers when a new payout request is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Referral</div>
  <div>Triggers when a new referral is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Manual Bonus</div>
  <div>Add a manual bonus to a member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Member</div>
  <div>Creates a member in the Genius Referrals platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payout Request</div>
  <div>Creates a Payout Request to redeem members\' bonuses. Bonuses can be redeemed as PayPal cash, E-Gift Cards, Vouchers, Products, Account Credit, and Shopify Discount Codes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Referral</div>
  <div>Creates a new connection between an Advocate and Referral to add a Referral under an Advocate. Assigns a Referral to an Advocate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Process Referral to Trigger Bonuses</div>
  <div>Process the referral and attempts to reward the advocate taking into account the rules defined in your campaign. All restrictions set on the campaign will be checked before triggering bonuses.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Redeem Payout Request</div>
  <div>Redeems a Payout Request. After the Payout Request is created you can redeem it using this action. This will deduct the amount of the member\'s unclaimed balance and move the request to the Completed status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Bonus</div>
  <div>Updates a bonus in the Genius Referrals platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Member</div>
  <div>Updates a member in the Genius Referrals platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Bonus</div>
  <div>Finds an existing bonus by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Bonuses</div>
  <div>Finds Bonuses by parameters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Member</div>
  <div>Finds an existing member by email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Members</div>
  <div>Finds Members by parameters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Advocate\'s Share Links</div>
  <div>Finds the advocate\'s share links.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Payout Request</div>
  <div>Find a Payout Request by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Payout Requests</div>
  <div>Finds Payout Requests by parameters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Member</div>
  <div>Finds an existing member by email address.</div>
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
          <title>GeniusReferrals</title>
          <meta name="description" content={`Referral Marketing Platform that helps businesses to acquire new customers using word of mouth and recommendation techniques.`} />
        </>
      ),
    },
  };
}
