import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Explara"
      description="Explara is an integrated event technology platform offering everything you need to make your event, membership, and meeting management successful."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/explara.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Explara Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(221, 78, 78, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Explara is an integrated event technology platform offering everything you need to make your event, membership, and meeting management successful.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Attendee</div>
  <div>Triggers when a new attendee is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Buyer</div>
  <div>Triggers when a new order is placed for an event ticket/registration.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Cancelation</div>
  <div>Triggers when an attendee cancels their ticket/registration for an event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Check-In</div>
  <div>Triggers when an attendee checks into an event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new event is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when you purchase tickets (free or paid) to an upcoming event.</div>
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
          <title>Explara</title>
          <meta name="description" content="Explara is an integrated event technology platform offering everything you need to make your event, membership, and meeting management successful." />
        </>
      ),
    },
  };
}
