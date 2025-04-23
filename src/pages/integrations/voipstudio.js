import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="VoIPstudio"
      description={`VoIPstudio is a VoIP phone service that offers businesses of all sizes a scalable communication solution. Our business phone systems are inexpensive, reliable, easy-to-use, offers a full suite of PBX features and is fully integrated for CRM.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/voipstudio.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        VoIPstudio Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(53, 186, 246, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">VoIPstudio is a VoIP phone service that offers businesses of all sizes a scalable communication solution. Our business phone systems are inexpensive, reliable, easy-to-use, offers a full suite of PBX features and is fully integrated for CRM.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Call Connected</div>
  <div>Triggers when a new call is successfully connected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Ended</div>
  <div>Triggers when call is finished.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Tracking</div>
  <div>Triggers when call associated with Call Tracking campaign visits is finished.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Tracking With Metadata</div>
  <div>Triggers when call associated with Call Tracking campaign visits is updated with metadata.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">DTMF Received</div>
  <div>Triggers when there is a new received DTMF.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Missed Call</div>
  <div>Triggers when there is a new missed call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Call Recording</div>
  <div>Triggers when a new call recording is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New CDR</div>
  <div>Triggers when a new Call Detail Record is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New CDR With Metadata</div>
  <div>Triggers when a new Call Detail Record with Metadata is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Voicemail</div>
  <div>Triggers when a new voicemail is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SMS Received</div>
  <div>Triggers when there is a new received SMS.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a private or global contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Make a Call</div>
  <div>Make a new call to number in E164 format.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Make a Call to Lead</div>
  <div>Make a new call outbound call to a Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Make a Webcall</div>
  <div>Make a new call between two numbers: from and to in E164 format.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Sends a SMS message.</div>
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
          <title>VoIPstudio</title>
          <meta name="description" content={`VoIPstudio is a VoIP phone service that offers businesses of all sizes a scalable communication solution. Our business phone systems are inexpensive, reliable, easy-to-use, offers a full suite of PBX features and is fully integrated for CRM.`} />
        </>
      ),
    },
  };
}
