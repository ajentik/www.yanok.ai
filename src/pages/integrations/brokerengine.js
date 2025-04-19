import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="BrokerEngine"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/brokerengine.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        BrokerEngine Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(37, 158, 113, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">BrokerEngine is the first and only mortgage broker software guaranteed to grow your revenue while working fewer hours, with push-button automation and workflows that free you up to focus on your highest-value activities.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Card Date Changed</div>
  <div>Triggers when a card date field has changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Financevault Document Request Done</div>
  <div>Triggers when client clicks "Done" in a FinanceVault document request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Card on Board</div>
  <div>Triggers when a new card on a specific board or regardless of board is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Created</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal Created</div>
  <div>Triggers when a new deal is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Financevault Document Request</div>
  <div>Triggers when a new FinanceVault document request is created. This Zap will only be triggered when the Financevault request is created for the very first time. Subsequent updates to the same Financevault portal will not trigger the Zap.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Created</div>
  <div>Triggers when a new lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Tagged</div>
  <div>Triggers when a contact is tagged.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task Created</div>
  <div>Triggers when a new task is created for a loan or a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Stage Changed</div>
  <div>Triggers when an application\'s stage has changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Untagged</div>
  <div>Triggers when a Tag is removed from a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when a contact is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Card</div>
  <div>Creates a new card on the board that you choose.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Referrer</div>
  <div>Searches for a referrer in BrokerEngine based on their email address.</div>
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
          <title>BrokerEngine</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
