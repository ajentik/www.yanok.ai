import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SimpleTexting"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/simpletexting.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SimpleTexting Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(35, 153, 240, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SimpleTexting is a text messaging platform that helps you reach your customers using one of the most effective channels: their text inbox. Send promotions, alerts, polls or reminders to your entire list in a matter of seconds.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Outgoing Message Delivery Report</div>
  <div>Triggers when an outgoing message is reported as delivered by the carrier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Incoming Message</div>
  <div>Triggers when an incoming message is handled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Outgoing Message Non Delivered Report</div>
  <div>Triggers when an outgoing message is reported as undelivered by the carrier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Outgoing Message</div>
  <div>Triggers when an outgoing message is handled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Report</div>
  <div>Triggers when a client sends STOP to your number.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update a Contact</div>
  <div>Creates a new or updates an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove a Contact</div>
  <div>Removes a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Campaign</div>
  <div>Creates and sends a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Message</div>
  <div>Sends either an MMS or SMS message to a contact.</div>
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
          <title>SimpleTexting</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
