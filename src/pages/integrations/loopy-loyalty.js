import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Loopy Loyalty"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/loopy-loyalty.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Loopy Loyalty Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(84, 45, 128, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Loopy Loyalty is a platform for businesses to create and manage digital loyalty stamp cards in Apple Wallet and Android Pay.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Enrollment</div>
  <div>Triggers when a customer enrols into a loyalty card programme.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reward Forfeited</div>
  <div>Triggers every time a reward is forfeit by deducting stamps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reward Redeemed</div>
  <div>Triggers every time a reward is redeemed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reward Earned</div>
  <div>Triggers every time a reward is earned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Stamp(s) Added</div>
  <div>Triggers every time a stamp is added.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Enroll Customer</div>
  <div>Adds a customer to your program.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Stamp(s)</div>
  <div>Add stamp(s) to a customer\'s card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Push Messages</div>
  <div>Send messages to all holders of the card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Redeem Reward</div>
  <div>Redeems a reward from a customer\'s card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Stamp(s) With Unique Id</div>
  <div>Add stamp(s) to a customer\'s card with customer\'s unique id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Redeem Reward With Unique Id</div>
  <div>Redeems a reward from a customer\'s card with customer\'s unique id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Customer</div>
  <div>Finds a customer by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Customer by Unique Id</div>
  <div>Finds a customer by Unique Id</div>
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
          <title>Loopy Loyalty</title>
        </>
      ),
    },
  };
}
