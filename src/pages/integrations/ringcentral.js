import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="RingCentral"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ringcentral.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        RingCentral Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 114, 174, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">RingCentral provides cloud-based communication system to modern businesses of all sizes. The system enables companies with voice, SMS, video, Fax, and team collaboration services on all major desktop and mobile platforms. All devices, services, and users can be managed through our PBX and administrative capability designed for Enterprise IT.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Call Ended</div>
  <div>Triggers when a call has been ended.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Missed Call</div>
  <div>Triggers when there is a new missed call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Call Recording</div>
  <div>Triggers when a call has been recorded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New SMS/MMS Received</div>
  <div>Triggers when there is a new SMS/MMS received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New SMS/MMS Sent</div>
  <div>Triggers when there is a new SMS/MMS sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Voicemail</div>
  <div>Triggers when there is a new incoming voicemail.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Video Meeting</div>
  <div>Creates a instant video meeting. Pair with additional action to retrieve Join URI from current action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate Ringout Call</div>
  <div>Starts a 2-legged RingOutCall based on specified from and to numbers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Fax</div>
  <div>Sends a fax.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS/MMS</div>
  <div>Sends a SMS/MMS message.</div>
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
          <title>RingCentral</title>
        </>
      ),
    },
  };
}
