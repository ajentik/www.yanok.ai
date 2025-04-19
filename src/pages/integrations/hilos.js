import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Hilos"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/hilos.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Hilos Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 67, 101, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Hilos is the full-stack for WhatsApp: get Business API Access, chat using our WhatsApp multi-agent Inbox and build automations that integrate with your existing tools (like your CRM).</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when an new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Contact</div>
  <div>Triggers when an contact is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when an contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Completed Flow</div>
  <div>Triggers when a contact completes a flow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Joined Inbound Flow</div>
  <div>Triggers when a contact sends a message that starts an inbound flow.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Creates or updates a contact if it already exists.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start a Flow for a Phone Number</div>
  <div>Start an outbound flow for a phone number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a WhatsApp Message</div>
  <div>Send a Whatsapp approved message template to any number</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">WhatsApp Template</div>
  <div>Search for a WhatsApp Template to use.</div>
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
          <title>Hilos</title>
        </>
      ),
    },
  };
}
