import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Superpeer"
      description="Superpeer is an all-in-one video platform that gives you the tools you need to engage with your audience through video and connect in a more authentic way."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/superpeer.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Superpeer Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 211, 56, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Superpeer is an all-in-one video platform that gives you the tools you need to engage with your audience through video and connect in a more authentic way.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">[Payout] Withdrawal</div>
  <div>Triggers when you withdraw your available balance on Superpeer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Bookings] Call Cancelled</div>
  <div>Triggers when a new Superpeer call is cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Bookings] Call Ended</div>
  <div>Triggers when your Superpeer call is ended.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Bookings] Call Rescheduled</div>
  <div>Triggers when a new Superpeer call is rescheduled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Bookings] Call Scheduled</div>
  <div>Triggers when a new Superpeer call is scheduled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Subscription] New Subscriber</div>
  <div>Triggers when you have a new subscriber for your Superpeer channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Payout] Available</div>
  <div>Triggers when we add an earning to your ready to withdraw balance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Series] Published</div>
  <div>Triggers when you create and publish a new Superpeer series.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Series] Registration</div>
  <div>Triggers when someone registers to your Superpeer series.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Streams] Ended</div>
  <div>Triggers when your Superpeer streams ended.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Streams] Published</div>
  <div>Triggers when you create and publish a new Superpeer stream.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Streams] Registration</div>
  <div>Triggers when someone registers to your Superpeer streams.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Subscription] Renewed</div>
  <div>Triggers when you have a new subscriber for your Superpeer channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">[Subscription] Unsubscribed</div>
  <div>Triggers when one of your subscribers unsubscribed from your Superpeer channel</div>
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
          <title>Superpeer</title>
          <meta name="description" content="Superpeer is an all-in-one video platform that gives you the tools you need to engage with your audience through video and connect in a more authentic way." />
        </>
      ),
    },
  };
}
