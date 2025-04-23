import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CallRail"
      description={`CallRail is an analytics platform designed for those who rely on quality calls and inbound leads to measure success.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/callrail.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CallRail Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(42, 148, 208, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">CallRail is an analytics platform designed for those who rely on quality calls and inbound leads to measure success.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Phone Call Completed</div>
  <div>Triggers after an inbound phone call has been completed and its recording and transcription have completed and attached. It contains the full data about the call. This trigger should not be expected to be real-time and has a maximum delay of 20 minutes after the hangup before it fires.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Phone Call Marked as Spam</div>
  <div>Triggers when a phone call is marked as "Spam".</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Phone Call Started</div>
  <div>Triggers when an inbound phone call is started.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Phone Call Tagged</div>
  <div>Triggers when a phone call is tagged after it has ended. To receive data about calls tagged via Automation Rules, Keypad Scoring, or a Call Flow, use the Phone Call Completed trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Company Created</div>
  <div>Triggers when a new Company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Form Captured</div>
  <div>Triggers when a form is captured.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Form Capture Tagged</div>
  <div>Triggers when a form capture is tagged.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Outbound Call Completed</div>
  <div>Triggers after an inbound phone call has been completed and its recording and transcription have been completed and attached. It contains the full data about the call. This trigger should not be expected to be real-time and has a maximum delay of 20 minutes after the hangup before it fires.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Session Tracker Created</div>
  <div>Triggers when a Session Tracker is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SMS Received</div>
  <div>Triggers when an SMS message is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SMS Sent</div>
  <div>Triggers when an SMS message is sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Source Tracker Created</div>
  <div>Triggers when a Source Tracker is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Created</div>
  <div>Triggers when a User is created.</div>
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
          <title>CallRail</title>
          <meta name="description" content={`CallRail is an analytics platform designed for those who rely on quality calls and inbound leads to measure success.`} />
        </>
      ),
    },
  };
}
