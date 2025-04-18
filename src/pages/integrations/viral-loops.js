import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Viral Loops"
      description="Viral Loops is a referral marketing platform for busy marketers and founders."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/viral-loops.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Viral Loops Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Viral Loops is a referral marketing platform for busy marketers and founders.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Conversion</div>
  <div>Triggers when a participant from your campaign is converted. Available only for the Milestone Referral, and Altruistic Referral templates.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Conversion Count</div>
  <div>Triggers when the conversion count of a participant changes, eg. if they go from 5 conversions to 6. Available only for the Milestone Referral, and Altruistic Referral templates.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Milestone Reached</div>
  <div>Triggers when a participant reaches a milestone. Available for the Milestone Referral and Viral Loops for Shopify templates.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Participant</div>
  <div>Triggers when a new participant is added to your campaign. Available in all templates.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Referral Count</div>
  <div>Triggers when the referral count of a participant changes, eg. if they go from 5 referrals to 6. Available for all templates.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reward Redeemed</div>
  <div>Triggers when a reward is redeemed via the Campaign Dashboard or the API. Available only for the Milestone Referral, Refer a Friend and Viral Loops for Shopify templates.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Participant</div>
  <div>Adds a participant to your campaign</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Convert Participant</div>
  <div>Converts an existing participant in your campaign. Available only for the Milestone Referral, and Altruistic Referral templates.</div>
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
          <title>Viral Loops</title>
          <meta name="description" content="Viral Loops is a referral marketing platform for busy marketers and founders." />
        </>
      ),
    },
  };
}
