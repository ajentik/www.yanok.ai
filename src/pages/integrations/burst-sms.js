import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Burst SMS"
      description={`Burst SMS is an online text messaging application. Use our API to integrate text message alerts into your work flows. Great for CRM automation systems, notifications and authentication.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/burst-sms.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Burst SMS Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 174, 197, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Burst SMS is an online text messaging application. Use our API to integrate text message alerts into your work flows. Great for CRM automation systems, notifications and authentication.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delivery Report Received</div>
  <div>Triggers when a delivery report is received for a message. Report values are "delivered", "pending", "hard-bounce", "soft-bounce".</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Link Hit</div>
  <div>Triggers when a recipient clicks on Burst SMS Short URL.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Added</div>
  <div>A notification for contacts added to, or removed from lists is available via the Forward to URL option in the AUTOMATION settings for a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SMS Received to Inbox</div>
  <div>Triggers when there\'s a new messages found in your SMS Inbox. Will also automatically detect an email address in the message and return this in the response.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SMS Received</div>
  <div>Triggers when a message is received by a Virtual Mobile Number. Will also detect an email address in the message and return this in the response.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">SMS Sent</div>
  <div>Triggers when an SMS is sent. (WARNING: Do not use this trigger with the Send SMS Action for Burst SMS as this will cause a loop).</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add/Update Contact</div>
  <div>Adds or updates a contact on a Burst SMS list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Delete a contact from chosen list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Format Number</div>
  <div>Validate and format a given number</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get SMS Info</div>
  <div>Get information about a message you have sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get SMS Activity</div>
  <div>Retrieves detailed information about messages sent to a specific recipient. This included full message content including populated variables.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Send a text message to a single mobile number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS to List</div>
  <div>Send SMS to a Burst SMS contact list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Report on Messages Sent</div>
  <div>Retrieve all message reports for a given time period</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds an existing contact in a contact list.</div>
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
          <title>Burst SMS</title>
          <meta name="description" content={`Burst SMS is an online text messaging application. Use our API to integrate text message alerts into your work flows. Great for CRM automation systems, notifications and authentication.`} />
        </>
      ),
    },
  };
}
