import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Alterdesk"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/alterdesk.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Alterdesk Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(102, 198, 96, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Alterdesk is a user-friendly, secure messenger for teams. Send messages and files to your co-workers and other business contacts, using any available device!</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Message</div>
  <div>Triggers when a new message is created in a conversation with a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Coworker Message</div>
  <div>Triggers when a new message is created in a conversation with a Coworker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Groupchat Message</div>
  <div>Triggers when a message is posted in the groupchat.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Change Groupchat Subject</div>
  <div>Change the subject of a Groupchat.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Groupchat</div>
  <div>Create a new Groupchat.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post a Message to a Contact</div>
  <div>Post a message to a conversation with a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post a Message to a Coworker</div>
  <div>Post a message to a conversation with a Coworker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post a Message in a Groupchat</div>
  <div>Post a new Message in a Groupchat.</div>
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
          <title>Alterdesk</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
