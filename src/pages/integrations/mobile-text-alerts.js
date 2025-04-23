import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Mobile Text Alerts"
      description={`Mobile Text Alerts allows you send mass SMS text messages to your group.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mobile-text-alerts.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Mobile Text Alerts Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(14, 54, 39, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Mobile Text Alerts allows you send mass SMS text messages to your group.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delivery Status</div>
  <div>Triggers when the delivery status of a message is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message Reply</div>
  <div>Triggers when a new message reply is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message Sent</div>
  <div>Triggers when a new message is sent.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Subscriber</div>
  <div>Adds a subscriber.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Subscriber to Group</div>
  <div>Puts a phone number that has been previously added to a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete All Scheduled Messages</div>
  <div>This will delete all scheduled messages for a number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Subscriber From Group</div>
  <div>Removes a subscriber from a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message</div>
  <div>Sends a message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message With Unique Link</div>
  <div>Sends a message with a unique link at the end.</div>
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
          <title>Mobile Text Alerts</title>
          <meta name="description" content={`Mobile Text Alerts allows you send mass SMS text messages to your group.`} />
        </>
      ),
    },
  };
}
