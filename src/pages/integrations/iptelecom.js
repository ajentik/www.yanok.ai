import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Iptelecom"
      description={`Iptelecom is a VOIP service provider. Allows you to receive detailed information about calls made, call center events, receive recording of your calls and other features.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/iptelecom.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Iptelecom Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(15, 91, 142, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Iptelecom is a VOIP service provider. Allows you to receive detailed information about calls made, call center events, receive recording of your calls and other features.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Queue: Agent Answered Call</div>
  <div>Triggers when the call in the queue is anwered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Queue: Agent Hung Up Call</div>
  <div>Triggers when agent finished the call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Queue: Agent Log In</div>
  <div>Triggers when a new agent log in queue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Queue: Agent Log Out</div>
  <div>Triggers when a agent log out queue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Queue: Agent Marked Away</div>
  <div>Triggers when agent changes his status on “away”.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Queue: Agent Marked Ready</div>
  <div>Triggers when agent changes his status on “ready”.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Queue: Missed Call</div>
  <div>Triggers when the call in the queue is missed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Queue: Agent Is Offered Call</div>
  <div>Triggers when an agent can receive a call from the queue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Parked</div>
  <div>Triggers when you put your call in the parking slot.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Picked Up</div>
  <div>Triggers when you get a call from a parking slot.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Call Recording</div>
  <div>Triggers when you get a recording of your conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Incoming Call Answered</div>
  <div>Triggers when you answered the incoming call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Incoming Call Hung Up</div>
  <div>Triggers when you finished the incoming call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Missed Call</div>
  <div>Triggers when you missed the call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Outbound Call Answered</div>
  <div>Triggers when they answered your outbound call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Outbound Call Started</div>
  <div>Triggers when you start making an outbound call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Outbound Call Hung Up</div>
  <div>Triggers when you finished the outbound call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Queue: Call Entered</div>
  <div>Triggers when the call in the queue is entered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Queue: Call Left</div>
  <div>Triggers when a call left the queue.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Voicemail Received</div>
  <div>Triggers when you receive a voice message.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Make New Call</div>
  <div>You can initiate the call. Your device will receive a call that will then forward you to the number you specified. You need to enable Click To Call in the IpTelecom integration settings.</div>
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
          <title>Iptelecom</title>
          <meta name="description" content={`Iptelecom is a VOIP service provider. Allows you to receive detailed information about calls made, call center events, receive recording of your calls and other features.`} />
        </>
      ),
    },
  };
}
