import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Sinch"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sinch.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Sinch Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 190, 60, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Send and receive messages over SMS, WhatsApp, Facebook, Instagram, Telegram, Viber, and more using Sinch — a single app, all the messaging channels you need!</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Other Callback Events</div>
  <div>Triggers when a one or more Sinch callback events occur.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inbound Message</div>
  <div>Triggers when a user sends you a message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Opted In</div>
  <div>Triggers when a user has opted in to receive messages.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Opted Out</div>
  <div>Triggers when a user has opted out from receiving messages.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send a Message</div>
  <div>Send a message via the Sinch Conversation API</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Register Opt-In</div>
  <div>Opt a user in to receive messages from Sinch</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Register Opt-Out</div>
  <div>Opt a user out from receiving messages from Sinch</div>
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
          <title>Sinch</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
