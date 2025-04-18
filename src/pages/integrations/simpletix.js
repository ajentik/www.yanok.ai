import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Simpletix"
      description="SimpleTix is an e-commerce company that offers turn-key solutions for event websites and online ticketing."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/simpletix.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Simpletix Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(37, 134, 183, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SimpleTix is an e-commerce company that offers turn-key solutions for event websites and online ticketing.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Attendee Check-In</div>
  <div>Triggers when a new attendee check in.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attendee Check-Out</div>
  <div>Triggers when a new attendee check out.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attendee Updated</div>
  <div>Triggers when the attendee or buyer edits attendee information</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Attendee</div>
  <div>Triggers when a new Attendee is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new Event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Membership Purchased</div>
  <div>Triggers when a new membership is purchased or new member is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is placed for tickets to an event. This contains only the top level financial and transaction information.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Updated</div>
  <div>Triggers when the buyer edits order information or staff make edits in the manager panel.</div>
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
          <title>Simpletix</title>
          <meta name="description" content="SimpleTix is an e-commerce company that offers turn-key solutions for event websites and online ticketing." />
        </>
      ),
    },
  };
}
