import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Chirply.io"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/chirply.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Chirply.io Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(6, 86, 247, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Chirply.io is an app which allows you to easily manage text message, pre-recorded, and live phone calls from your browser.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Trigger a Zap</div>
  <div>Triggers when a new zap created in Chirply...</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assign Lead to Sub-User</div>
  <div>Assign Lead to Sub-User exists at your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Broadcast Message to a List</div>
  <div>Broadcast sms/mms to your Chirply list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note</div>
  <div>Create a note against leads.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Dynamic Ringless Voice Mail (Advanced)</div>
  <div>This trigger will help to send custom ringless voice mail.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Dynamic Ringless Voice Mail (Easy)</div>
  <div>This trigger will help to send custom ringless voice mail.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Make IVR Call</div>
  <div>This action will fire an IVR outbound call to receiver number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sync Leads (Beta)</div>
  <div>Get your leads sync to Chirply ..</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Pipeline</div>
  <div>Add Pipeline to Chirply.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Pipeline</div>
  <div>Remove Pipeline to Chirply.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Drop Ringless Voicemail (Beta)</div>
  <div>Drop voicemail without ringing.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Broadcast RVM to a List (Beta)</div>
  <div>Broadcasts RMVs to all the leads of list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sales Bridge From Template</div>
  <div>Create a sales bridge which is templated inside the Chirply platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Send a SMS to the Leads.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Custom Fields</div>
  <div>Update custom field for a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe From Campaign</div>
  <div>Unsubscribe phone number from campaign.</div>
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
          <title>Chirply.io</title>
        </>
      ),
    },
  };
}
