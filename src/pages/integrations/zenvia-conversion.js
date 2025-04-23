import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zenvia Conversion"
      description={`Zenvia Conversion helps you respond to WhatsApp, Instagram and Facebook Messenger through a centralized account and transform your sales processes in the messaging era.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zenvia-conversion.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zenvia Conversion Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 151, 167, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Zenvia Conversion helps you respond to WhatsApp, Instagram and Facebook Messenger through a centralized account and transform your sales processes in the messaging era.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Archived</div>
  <div>Triggers when a prospect is archived.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Successful Call</div>
  <div>Triggers when a call to a prospect is successful.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsuccessful Call</div>
  <div>Triggers when a call to a prospect is unsuccessful.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Custom Event Raised</div>
  <div>Triggers when a custom event is posted from a custom App.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Edited</div>
  <div>Triggers when a prospect is edited.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Created</div>
  <div>Triggers when a new prospect is created. Leads that are merged into existing prospects won’t trigger this.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reminder Set</div>
  <div>Triggers when a prospect reminder is set.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sale Loaded (Accepted Quote)</div>
  <div>Triggers when a quote sale is loaded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Visit Logged</div>
  <div>Triggers when a prospect visit is logged.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when a Note is left on a prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Prospect Transferred</div>
  <div>Triggers when a prospect is transferred to an agent or group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">WhatsApp Message Received</div>
  <div>Triggers when the business receives a WhatsApp message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">WhatsApp Message Sent</div>
  <div>Triggers when the business sends a WhatsApp message.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Close Contact</div>
  <div>Closes a contact with the defined close reason. It is very important to configure the zapier integration in Sirena to act as a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message Template</div>
  <div>Sends a Message Template from any communication channel listed</div>
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
          <title>Zenvia Conversion</title>
          <meta name="description" content={`Zenvia Conversion helps you respond to WhatsApp, Instagram and Facebook Messenger through a centralized account and transform your sales processes in the messaging era.`} />
        </>
      ),
    },
  };
}
