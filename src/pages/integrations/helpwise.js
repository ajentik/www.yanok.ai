import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Helpwise"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/helpwise.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Helpwise Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(1, 104, 250, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Helpwise is a tool to share team inbox among the team members and track all the emails.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assigned in a Conversation</div>
  <div>Triggers when your team member assigned you in a conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Note Added</div>
  <div>Triggers when a new note added by the user in the Helpwise conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Inbound SMS Message</div>
  <div>Triggers when you receive a new SMS from your customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Inbound WhatsApp Message</div>
  <div>Triggers when you receive a new WhatsApp inbound message from your customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mention in Note</div>
  <div>Triggers when there\'s a new mention for you.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Inbound Email</div>
  <div>Triggers when a new email received in Helpwise.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Inbound Facebook Message</div>
  <div>Triggers when you receive a new Inbound Facebook message from your customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added</div>
  <div>Triggers when a new tag added in a thread in Helpwise.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Apply Tag on Thread</div>
  <div>Apply tag on the Helpwise thread.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Create your contact in Helpwise from your favorite app.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Conversation</div>
  <div>Create a new conversation from your website form, Cron, CRM, etc.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send an Email</div>
  <div>This Action will send the Email from Helpwise.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS Message</div>
  <div>Send SMS to your customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send WhatsApp Message</div>
  <div>Send WhatsApp Message to your customer.</div>
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
          <title>Helpwise</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
