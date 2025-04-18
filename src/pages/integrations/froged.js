import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Froged"
      description="Froged is a messaging platform that combines modern live chat, in-app messenger, knowledge base, user behavior tracking, and email automation."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/froged.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Froged Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(26, 188, 156, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Froged is a messaging platform that combines modern live chat, in-app messenger, knowledge base, user behavior tracking, and email automation.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Tagged</div>
  <div>Triggers when a contact is tagged.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Unsubscribed</div>
  <div>Triggers when a contact unsubscribes from Froged emails.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Created</div>
  <div>Triggers when a new contact with email is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Conversation Tagged</div>
  <div>Triggers when a conversation is tagged.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Starts Conversation</div>
  <div>Triggers when a new conversation is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update a Contact</div>
  <div>If userId or the contact\'s email exist, it will be updated, if not, it will create a new contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Contact</div>
  <div>Set tags to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Track Event</div>
  <div>Track an event of a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds a Contact</div>
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
          <title>Froged</title>
          <meta name="description" content="Froged is a messaging platform that combines modern live chat, in-app messenger, knowledge base, user behavior tracking, and email automation." />
        </>
      ),
    },
  };
}
