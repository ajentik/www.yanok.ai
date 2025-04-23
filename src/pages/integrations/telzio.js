import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Telzio"
      description={`Telzio provides companies with high-quality, feature-rich phone systems, and integrates teams under a seamless, cloud platform.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/telzio.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Telzio Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 55, 85, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Telzio provides companies with high-quality, feature-rich phone systems, and integrates teams under a seamless, cloud platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Call</div>
  <div>Triggers when a new call comes in or out of your Telzio phone system.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Leg Ended</div>
  <div>Triggers when a call leg ends.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Missed Call</div>
  <div>Triggers when a call was missed, such as when it goes to voicemail or wasn\'t picked up in a call queue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Recording</div>
  <div>Triggers when a call recording is ready for download.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Back Requested</div>
  <div>Triggers when someone requests to be called back from a queue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New SMS</div>
  <div>Triggers when an SMS is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Voicemail</div>
  <div>Triggers when a voicemail is received.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Sends an SMS.</div>
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
          <title>Telzio</title>
          <meta name="description" content={`Telzio provides companies with high-quality, feature-rich phone systems, and integrates teams under a seamless, cloud platform.`} />
        </>
      ),
    },
  };
}
