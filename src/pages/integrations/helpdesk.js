import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="HelpDesk"
      description="HelpDesk is a ticketing software for effortless customer support"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/helpdesk.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        HelpDesk Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(47, 199, 116, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">HelpDesk is a ticketing software for effortless customer support</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a new support ticket is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Assignment Changed</div>
  <div>Triggers when ticket changes assignment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Followers Changed</div>
  <div>Triggers when followers change in a ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message in a Ticket</div>
  <div>Triggers when there\'s a new message in a ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Priority Changed</div>
  <div>Triggers when ticket changes priority.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Status Changed</div>
  <div>Triggers when ticket changes status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Tags Changed</div>
  <div>Triggers when tags are changed in a ticket.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket</div>
  <div>Creates a new ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Ticket / Send Reply</div>
  <div>Change ticket properties or send reply.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Followers to Ticket</div>
  <div>Add followers to an existing ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags to Ticket</div>
  <div>Add tags to an existing ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Upload Transaction</div>
  <div>Start upload transaction to allow attachments upload.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Attachment During Transaction</div>
  <div>Upload attachment during open transaction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Tickets</div>
  <div>Finds an existing tickets</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Ticket</div>
  <div>Finds an existing tickets</div>
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
          <title>HelpDesk</title>
          <meta name="description" content="HelpDesk is a ticketing software for effortless customer support" />
        </>
      ),
    },
  };
}
