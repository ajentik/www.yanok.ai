import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Trengo"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/trengo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Trengo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(20, 178, 159, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Trengo is a team collaboration tool to manage conversations from channels such as web chat, email and WhatsApp via one inbox.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Inbound Message</div>
  <div>Triggers when an inbound message is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Label Added</div>
  <div>Triggers when a label is added to a conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Internal Note</div>
  <div>Triggers when an internal note is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Outbound Message</div>
  <div>Triggers when an outbound message is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Phone Call Ended</div>
  <div>Triggers when a phone call has ended.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Phone Call Missed</div>
  <div>Triggers when a phone call is missed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Phone Call Started</div>
  <div>Triggers when a phone call has started.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a Contact</div>
  <div>Creates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Log a Voice Call</div>
  <div>Logs a Voice call in a ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Team Chat Message</div>
  <div>Send a Team Chat Message</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Message</div>
  <div>Sends a message to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a WhatsApp Message Template</div>
  <div>This action will send a WhatsApp message template to a phone number</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact</div>
  <div>Finds a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or create contact</div>
  <div>Finds a contact.</div>
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
          <title>Trengo</title>
        </>
      ),
    },
  };
}
