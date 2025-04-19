import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="BotConversa"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/botconversa.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        BotConversa Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(84, 194, 66, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">BotConversa is a Chatbot builder for WhatsApp. We’ve made it simples for small to big Size businesses to automate their WhatsApp conversations and create a true lead generation machine.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber</div>
  <div>Triggers when a new subscriber joins BotConversa.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tag</div>
  <div>Triggers when a new tag is created for a subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sequence Subscription</div>
  <div>Triggers when a subscriber is added to a sequence inside BotConversa.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Zapier Block Activated</div>
  <div>Triggers when a subscriber fires the Zapier integration block inside BotConversa.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag to Subscriber</div>
  <div>Adds a tag to a subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Custom Field</div>
  <div>Updates user/bot custom field value inside BotConversa.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Close Conversation</div>
  <div>Closes a conversation inside BotConversa\'s Live Chat with a subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Tag From a Subscriber</div>
  <div>Deletes a tag from subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Subscriber</div>
  <div>Create a new subscriber inside BotConversa.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Open Conversation</div>
  <div>Opens a conversation inside BotConversa\'s Live Chat with a subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Flow</div>
  <div>Sends flow to subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message</div>
  <div>Sends a message to a subscriber in BotConversa.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Adds Subscriber to a Sequence</div>
  <div>Adds subscriber to a message sequence inside BotConversa.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deletes Subscriber From a Sequence</div>
  <div>Deletes subscriber from a message sequence inside BotConversa.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Subscriber by Phone</div>
  <div>Finds a subscriber inside BotConversa by phone.</div>
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
          <title>BotConversa</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
