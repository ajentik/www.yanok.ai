import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Gift Up!"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/gift-up.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Gift Up! Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(103, 58, 183, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Gift Up! is a digital gift card system for your website or Facebook page.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Gift Card</div>
  <div>Trigger when a new gift card is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Gift Card Redeemed</div>
  <div>Trigger when a gift card is redeemed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Gift Card Updated</div>
  <div>Triggers on any changes to a gift card, including redemptions.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Trigger when a new order is placed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Creates a order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Redeem Gift Card</div>
  <div>Will deduct the specified amount of remaining credit from a gift card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Gift Card</div>
  <div>Finds a gift card.</div>
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
          <title>Gift Up!</title>
        </>
      ),
    },
  };
}
