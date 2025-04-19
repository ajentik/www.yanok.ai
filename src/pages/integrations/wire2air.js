import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Wire2Air"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/wire2air.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Wire2Air Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(166, 33, 31, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Wire2Air offer a mobile engagement platform and SMS Mobile Messaging services to collect contacts, send a text and MMS message to individuals or a group.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Message Received</div>
  <div>Triggers when a subscriber sends a message to one of your assigned dedicated local numbers or campaigns.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new Contact/Subscriber is added to a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unsubscriber</div>
  <div>Triggers when someone unsubscribes from your campaign/subscriptionlist.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Creates a new contact. If the contact already exists, it will be updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Text to Campaign Subscribers</div>
  <div>GroupText.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Picture Message</div>
  <div>Send a Picture Message to mobile number(s).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Survey</div>
  <div>Send Survey invite to a mobile user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Text Message</div>
  <div>Send Text Message Notification.</div>
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
          <title>Wire2Air</title>
        </>
      ),
    },
  };
}
