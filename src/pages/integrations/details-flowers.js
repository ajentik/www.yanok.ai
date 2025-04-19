import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Details Flowers"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/details-flowers.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Details Flowers Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(95, 176, 179, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Details Flowers is an all-in-one solution for florists and event designers to manage their events.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a client or event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a payment is logged.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Event</div>
  <div>Triggers when an event is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client-Event</div>
  <div>Create a new client and event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client Log Entry</div>
  <div>Create a new client log entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payment Record</div>
  <div>Create a new event payment record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Revoke Proposal Access</div>
  <div>Revoke access to an event proposal.</div>
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
          <title>Details Flowers</title>
        </>
      ),
    },
  };
}
