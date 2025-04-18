import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ClickSend SMS"
      description="ClickSend is a cloud-based service that lets you send and receive SMS, Email, Voice, Fax and Letters worldwide."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/clicksend.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ClickSend SMS Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(30, 136, 198, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ClickSend is a cloud-based service that lets you send and receive SMS, Email, Voice, Fax and Letters worldwide.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Incoming SMS</div>
  <div>Triggers when a new incoming sms is received.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact in a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact List</div>
  <div>Creates a new contact list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Delete specific contact from list based on the contact ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact List</div>
  <div>Delete a specific contact list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Fax</div>
  <div>Sends a new fax.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send MMS</div>
  <div>Send a new MMS.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Postcard</div>
  <div>Sends a postcard via the post. The PDF is printed and delivered to any address globally.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Letter</div>
  <div>Sends an A4 PDF document via the post. The PDF is printed, folded, inserted into an envelope and posted to any address globally.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Sends a new SMS.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS to Contact List</div>
  <div>Sends a new SMS to a list of contacts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Voice</div>
  <div>Send a Voice Text-to-speech message to a mobile phone or landline.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Contact Lists</div>
  <div>Search for a contact list based on name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Contact by Email Address</div>
  <div>Find a contact in a contact list based on email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Contact by Phone</div>
  <div>Find a contact in a contact list based on phone number.</div>
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
          <title>ClickSend SMS</title>
          <meta name="description" content="ClickSend is a cloud-based service that lets you send and receive SMS, Email, Voice, Fax and Letters worldwide." />
        </>
      ),
    },
  };
}
