import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Netgsm"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/netgsm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Netgsm Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(37, 65, 87, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Netgsm is an SMS, voice messaging and VOIP platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Incoming SMS</div>
  <div>Triggers when you receive an incoming SMS.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send a Voice Message (Simple)</div>
  <div>Sends a previously created audio file as a voicemail.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Connect Call</div>
  <div>Connects a call using Netgsm Netsantral services. You can start the call by selecting the number you want to call first.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Voicemail (Dynamic)</div>
  <div>Sends a voicemail created from dynamic text.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS to the Group</div>
  <div>You can send bulk sms to Netgsm groups.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send OTP SMS</div>
  <div>Sends a OTP SMS using Netgsm services.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Sends an SMS using Netgsm services.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Query SMS Report</div>
  <div>Query the transportation status of the SMS you have sent using Netgsm services.</div>
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
          <title>Netgsm</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
