import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Watermelon"
      description="With Watermelon you create chatbots, manage conversations and collaborate with your team to deliver an unforgettable customer service experience."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/watermelon.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Watermelon Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 41, 52, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">With Watermelon you create chatbots, manage conversations and collaborate with your team to deliver an unforgettable customer service experience.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Handover Conversation Agent</div>
  <div>Triggers when a conversation is handed over from the chatbot to a human agent</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Handover Conversation Team</div>
  <div>Triggers when a conversation is handed over from the chatbot to a team</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when there\'s a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Conversation</div>
  <div>Triggers when there\'s a new conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Updated contacts.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Creates a new contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sends a Message</div>
  <div>Sends a message</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updates an Existing Contact</div>
  <div>Updates an existing Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find a contact by id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Conversation</div>
  <div>Find a conversation by id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Contacts</div>
  <div>Search a contact by value.</div>
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
          <title>Watermelon</title>
          <meta name="description" content="With Watermelon you create chatbots, manage conversations and collaborate with your team to deliver an unforgettable customer service experience." />
        </>
      ),
    },
  };
}
