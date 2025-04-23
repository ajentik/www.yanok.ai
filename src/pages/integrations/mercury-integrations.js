import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Mercury Integrations"
      description={`Mercury is an online financial platform that helps startups grow and manage their capital.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mercury-integrations.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Mercury Integrations Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(65, 101, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Mercury is an online financial platform that helps startups grow and manage their capital.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Account Balance</div>
  <div>Triggers when an account\'s balance changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancelled Transaction</div>
  <div>Triggers when a transaction is cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Failed Transaction</div>
  <div>Triggers when a transaction fails.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Transaction</div>
  <div>Triggers when a new transaction is created. This trigger fires before the transaction settles.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Settled Transaction</div>
  <div>Triggers when a transaction settles.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Update</div>
  <div>Triggers when a transaction changes status. This will trigger on any update to a transaction, including revisions to the amount following settlement, such as in the case of tips for service staff.</div>
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
          <title>Mercury Integrations</title>
          <meta name="description" content={`Mercury is an online financial platform that helps startups grow and manage their capital.`} />
        </>
      ),
    },
  };
}
