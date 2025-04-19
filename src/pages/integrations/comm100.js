import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Comm100"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/comm100.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Comm100 Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(50, 158, 216, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Comm100 is a live chat support software that enables businesses or organizations to communicate with their website visitors in real-time so as to improve conversions, sales, and customer satisfaction.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Chat Ended</div>
  <div>Triggers when the chat is ended.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Chat Requested</div>
  <div>Triggers when a visitor begins a chat request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Chat</div>
  <div>Triggers when a new chat is started.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Chat Transferred</div>
  <div>Triggers when a chat is transferred.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Chat Wrap-Up</div>
  <div>Triggers when a wrap-up is added or updated on a chat.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Offline Message</div>
  <div>Triggers when an offline message is received.</div>
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
          <title>Comm100</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
