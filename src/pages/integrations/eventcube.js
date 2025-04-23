import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Eventcube"
      description={`Eventcube is a white label event platform for virtual and ticketed events.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/eventcube.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Eventcube Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(63, 8, 47, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Eventcube is a white label event platform for virtual and ticketed events.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Event Created</div>
  <div>Triggers when a new event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Updated</div>
  <div>Triggers when an event is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Category Created</div>
  <div>Triggers when a new membership category is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Category Updated</div>
  <div>Triggers when a membership category is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Customer Cancelled</div>
  <div>Triggers when a membership customer is cancelled the subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Customer Created</div>
  <div>Triggers when a membership customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Customer Payment Failed</div>
  <div>Triggers when payment membership customer subscription is failed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Customer Updated</div>
  <div>Triggers when a membership customer is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Plan Created</div>
  <div>Triggers when a membership plan is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Plan Updated</div>
  <div>Triggers when a membership plan is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Price Point Created</div>
  <div>Triggers when a membership price point is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Price Point Updated</div>
  <div>Triggers when a membership price point is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Tier Created</div>
  <div>Triggers when a membership tier is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Tier Updated</div>
  <div>Triggers when a membership tier is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Created</div>
  <div>Triggers when a new order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Deleted</div>
  <div>Triggers when an order is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Updated</div>
  <div>Triggers when an Order is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Promoter Created</div>
  <div>Triggers when a new promoter is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Promoter Updated</div>
  <div>Triggers when a promoter is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Created</div>
  <div>Triggers when a new ticket is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Updated</div>
  <div>Triggers when a ticket is updated.</div>
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
          <title>Eventcube</title>
          <meta name="description" content={`Eventcube is a white label event platform for virtual and ticketed events.`} />
        </>
      ),
    },
  };
}
