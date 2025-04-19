import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TxtSync"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/txtsync.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TxtSync Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(56, 58, 81, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">TxtSync is an SMS platform that allows applications to easily, and reliably send and receive low cost SMS globally.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Inbound SMS</div>
  <div>Triggers on inbound SMS.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Outbound SMS</div>
  <div>Triggers on outbound SMS. Please note to protect you from potentially causing an infinite loop of sending SMS, the Outbound SMS trigger is not invoked when sending an SMS from Zapier</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Bulk SMS</div>
  <div>Sends out bulk SMS from a Sender ID or E164 number to a tag group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a contact and allows tags to be applied to the contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Sends out a single SMS from a Sender ID or E164 number to a destination number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Search for contact by name, number or external reference.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Search for contact by name, number or external reference.</div>
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
          <title>TxtSync</title>
        </>
      ),
    },
  };
}
