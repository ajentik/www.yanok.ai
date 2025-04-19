import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TextP2P"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/textp2p.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TextP2P Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(36, 149, 196, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">TextP2P is a SMS & MMS text marketing system that enables you to cultivate better relationships with customers and streamline follow-ups.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Unsubscribers</div>
  <div>Triggers when a contact opts-out of receiving texts by replying STOP.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber</div>
  <div>Triggers when a new subscriber is added to a list.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to List</div>
  <div>Add existing TextP2P contact to an existing TextP2P list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a Contact associated to a list within TextP2P</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Contact From List</div>
  <div>Remove TextP2P existing contact from a list it\'s assigned to</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Ringless Voicemail</div>
  <div>Sends a ringless voicemail drop to a single recipient</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Text Message</div>
  <div>Send a single text message</div>
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
          <title>TextP2P</title>
        </>
      ),
    },
  };
}
