import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Crisp"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/crisp.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Crisp Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(6, 126, 216, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Crisp is a messaging app that unifies your user communication from Crisp Live Chat, Email, Messenger, Twitter, and SMS into one platform</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Edited Contact</div>
  <div>Triggers when a contact is edited.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message Sent</div>
  <div>Triggers when an operator sends a message</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message Incoming</div>
  <div>Triggers when a visitor sends a message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Conversation</div>
  <div>Triggers when a new conversation is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Conversation Custom Data Updated</div>
  <div>Triggers when custom data is added or removed in a conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Conversation Segments Updated</div>
  <div>Triggers when a segment is added or removed in a conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Conversation Status Change</div>
  <div>Triggers when a conversation is (un)resolved.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Contact</div>
  <div>Creates/Update a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Conversation</div>
  <div>Creates a conversation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a User Event</div>
  <div>Triggers an automated campaign</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Conversation</div>
  <div>Search previous Crisp conversations using a search query (an email, username, or word).</div>
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
          <title>Crisp</title>
        </>
      ),
    },
  };
}
