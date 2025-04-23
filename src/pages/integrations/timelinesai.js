import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TimelinesAI"
      description={`TimelinesAI allows you to share access to your personal or business Whatsapp account, integrate it with other applications and build automations for your business and marketing flows.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/timelinesai.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TimelinesAI Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(86, 71, 121, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">TimelinesAI allows you to share access to your personal or business Whatsapp account, integrate it with other applications and build automations for your business and marketing flows.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Incoming Chat</div>
  <div>Triggers when a new incoming chat is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Outgoing Chat</div>
  <div>Triggers when a new outgoing chat is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Received Message</div>
  <div>Triggers when a new incoming message is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sent Message</div>
  <div>Triggers when a new message is sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Chat Renamed</div>
  <div>Triggers when a chat is renamed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Whatsapp Account</div>
  <div>Triggers when new whatsapp_accounts is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send File to Existing Chat</div>
  <div>Sends file to existing chat.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message to Existing Chat</div>
  <div>Sends message to existing chat.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message to New Chat</div>
  <div>Sends message to new chat.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Chat</div>
  <div>Finds Chat</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Message</div>
  <div>Finds Message</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Message Status</div>
  <div>Finds Messages Status</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Whatsapp Account</div>
  <div>Finds Whatsapp account</div>
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
          <title>TimelinesAI</title>
          <meta name="description" content={`TimelinesAI allows you to share access to your personal or business Whatsapp account, integrate it with other applications and build automations for your business and marketing flows.`} />
        </>
      ),
    },
  };
}
