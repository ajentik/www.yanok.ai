import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Sprout Studio"
      description="Sprout Studio is a studio management suite for professional wedding and portrait photographers."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sprout-studio.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Sprout Studio Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(50, 167, 200, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Sprout Studio is a studio management suite for professional wedding and portrait photographers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Booking</div>
  <div>Triggers when a lead is booked into a shoot.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Changes Status</div>
  <div>Triggers when the status of a lead is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Shoot</div>
  <div>Triggers when a new shoot is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a payment is made.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Shoot Changes Status</div>
  <div>Triggers when the status of a shoot changes.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Shoot</div>
  <div>Creates a new shoot.</div>
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
          <title>Sprout Studio</title>
          <meta name="description" content="Sprout Studio is a studio management suite for professional wedding and portrait photographers." />
        </>
      ),
    },
  };
}
