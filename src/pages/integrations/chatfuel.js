import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Chatfuel"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/chatfuel.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Chatfuel Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(32, 142, 240, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Chatfuel allows anyone to create their own bots on Facebook Messenger for free, without coding. Using this app you\'ll be able to automatically update content in your bot.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Updated Subscriber Attribute</div>
  <div>Triggers when a subscriber‘s attribute is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Trigger of “Export via Zapier” Plugin</div>
  <div>Triggers when a subscriber receives the “Export via Zapier” plugin in Chatfuel</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Subscriber Status</div>
  <div>Triggers when a new subscriber joins your bot or an existing subscriber blocks it</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send Broadcast</div>
  <div>Sends a broadcast to a subscriber segment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Text Message</div>
  <div>Sends a text message to a subscriber</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Autoposting Broadcast</div>
  <div>Sends an autoposting broadcast with a specific gallery card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Import Content via Zapier Plugin</div>
  <div>Adds a new gallery card to the "Update Content via Zapier" plugin</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Sequence Subscription</div>
  <div>Subscribes or unsubscribes a person to/from a specific sequence</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Subscriber Attributes</div>
  <div>Updates subscriber attributes and/or sends a subscriber to a specific block in your bot</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Subscriber to a Block</div>
  <div>Sends a subscriber to a specific block in your bot</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Subscriber Entry Point</div>
  <div>Updates subscriber attributes and sends a subscriber to a specific entry point in your bot</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Subscriber</div>
  <div>Searches for a subscriber</div>
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
          <title>Chatfuel</title>
        </>
      ),
    },
  };
}
