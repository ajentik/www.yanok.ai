import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PartnerStack"
      description={`PartnerStack (formerly GrowSumo) is a growth automation platform that helps your company automatically manage and reward partners for promoting your business. Fully equip your partners for marketing, referral, and sales success with custom referral links and company pages. Engage partners through automated email campaigns and challenges, and then track partner performance with detailed analytics. Use the centralized dashboard to support all of your partner channels, including reseller, marketing, and referral partner programs. You can even ensure global compliance by funnelling all rewards through PartnerStack.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/partnerstack.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PartnerStack Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(103, 114, 229, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">PartnerStack (formerly GrowSumo) is a growth automation platform that helps your company automatically manage and reward partners for promoting your business. Fully equip your partners for marketing, referral, and sales success with custom referral links and company pages. Engage partners through automated email campaigns and challenges, and then track partner performance with detailed analytics. Use the centralized dashboard to support all of your partner channels, including reseller, marketing, and referral partner programs. You can even ensure global compliance by funnelling all rewards through PartnerStack.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Application Event</div>
  <div>Triggers when a new Application event occurs. (eg. Application Created, Updated, Approved, Declined).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer Event</div>
  <div>Triggers when a customer event occurs (eg. Customer Created, Updated, Deleted).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal Event</div>
  <div>Triggers when a deal event occurs (eg. Deal Created, Updated, Stage Updated, Close Date Updated, Amount Updated) Note: Meta fields are set in</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Event</div>
  <div>Triggers when a lead event occurs (eg. Lead Created, Updated, Closed, Approved, Declined).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message Event</div>
  <div>Triggers whenever a partner sends a message through the Messages Tab (</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Offer Event</div>
  <div>Triggers when an offer event occurs (eg. Offer Created, Updated, Deleted).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Partnership Event</div>
  <div>Triggers when a partnership event occurs (eg. Partnership Created, Updated, Deleted).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reward Event</div>
  <div>Triggers when a reward event occurs (eg. Reward Created, Declined, Restored, Updated).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Transaction Event</div>
  <div>Triggers when a transaction event occurs (eg. Transaction Created, Deleted).</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Action</div>
  <div>Logs an action that a partner or customer has performed. If a reward is set for the action, it will be created. (e.g. partner posted in forum).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a new Deal attributed to the partner that owns it.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new Lead attributed to the partner that drove it.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Partner</div>
  <div>Creates a new partner.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Transaction</div>
  <div>Creates a new Transaction attributed to a partner.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a new customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Updates an existing customer. You can use this to connect a customer to a provider key.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal</div>
  <div>Updates a Deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Updates a Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Partnership</div>
  <div>Update a partnership.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Finds a customer by email address or customer key.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead</div>
  <div>Find lead by email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Partner</div>
  <div>Finds a partner by email address or partner key.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer</div>
  <div>Find or Create Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Lead</div>
  <div>Find or Create Lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Partner</div>
  <div>Find or Create Partner</div>
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
          <title>PartnerStack</title>
          <meta name="description" content={`PartnerStack (formerly GrowSumo) is a growth automation platform that helps your company automatically manage and reward partners for promoting your business. Fully equip your partners for marketing, referral, and sales success with custom referral links and company pages. Engage partners through automated email campaigns and challenges, and then track partner performance with detailed analytics. Use the centralized dashboard to support all of your partner channels, including reseller, marketing, and referral partner programs. You can even ensure global compliance by funnelling all rewards through PartnerStack.`} />
        </>
      ),
    },
  };
}
