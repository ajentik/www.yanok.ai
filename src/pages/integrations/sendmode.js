import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Sendmode"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sendmode.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Sendmode Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(2, 146, 212, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Sendmode is an SMS messaging application with fast secure delivery. Send alerts and notifications worldwide as SMS via our website, email, or API integration. Receive incoming SMS replies to virtual numbers and shotcodes as trigger events.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delivery Report</div>
  <div>Triggers when a Delivery reports on the Status of Sent SMS is forwarded by Sendmode API in real-time to this webhook.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Incoming SMS</div>
  <div>Triggers when an incoming messages are received from your customers.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Import Customer</div>
  <div>Imports a customer into your database lists.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Optout Customer</div>
  <div>Opts out a customer from your database lists.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Send an SMS via Sendmode API</div>
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
          <title>Sendmode</title>
        </>
      ),
    },
  };
}
