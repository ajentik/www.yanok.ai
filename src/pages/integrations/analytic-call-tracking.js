import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Analytic Call Tracking"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/analytic-call-tracking.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Analytic Call Tracking Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(244, 130, 17, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Analytic Call Tracking (ACT) helps route and track calls with full analytic reporting.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Client Status Updated</div>
  <div>Triggers when client status updated to suspended / reactivated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Incoming Call</div>
  <div>Triggers after a call is received in ACT.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Incoming Call Answered</div>
  <div>Triggers after a call is answered in ACT.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Added</div>
  <div>Triggers when a new contact is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Form Entry</div>
  <div>Triggers when new form entry is received</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Outgoing Call (Auto Dialer)</div>
  <div>Triggers when an outgoing call is completed using the Auto Dialer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Outgoing Call (Browser Phone)</div>
  <div>Triggers when an outgoing call is completed using ACT\'s Browser Phone.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Outgoing Call (Mobile App)</div>
  <div>Triggers when an outgoing call is completed using ACT\'s Mobile App.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start of New Incoming Call</div>
  <div>Triggers when a new incoming call is received in ACT.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Make a Call</div>
  <div>This will call the selected company, play a whisper, and connect them with the caller.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Make a Call - Dynamic Order</div>
  <div>This will call either the selected company or the caller (depending on the option chosen), play a whisper, and connect them with the other.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Sends SMS To / From given numbers</div>
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
          <title>Analytic Call Tracking</title>
        </>
      ),
    },
  };
}
