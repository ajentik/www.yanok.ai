import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="OpenPhone"
      description="OpenPhone is a new phone for business. It comes with powerful calling, messaging, and a lightweight CRM."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/openphone.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        OpenPhone Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(102, 51, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">OpenPhone is a new phone for business. It comes with powerful calling, messaging, and a lightweight CRM.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Call Recording Completed</div>
  <div>Triggers when a call recording has finished.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Incoming Call Completed</div>
  <div>Triggers when an incoming call is completed. If the call is not picked up by you, the answeredAt field will be null. If the user leaves a voicemail, you will get the recording and a transcription on the same object.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Outgoing Message Delivered</div>
  <div>Triggers when an outbound message was delivered to the recipients.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Incoming Message Received</div>
  <div>Triggers when you receive a message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Outgoing Call Completed</div>
  <div>Triggers when an outgoing call has ended.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Creates a contact or updates an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Message</div>
  <div>Sends a new message via OpenPhone.</div>
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
          <title>OpenPhone</title>
          <meta name="description" content="OpenPhone is a new phone for business. It comes with powerful calling, messaging, and a lightweight CRM." />
        </>
      ),
    },
  };
}
