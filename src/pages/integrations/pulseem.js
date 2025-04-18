import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pulseem"
      description="Pulseem is a marketing platform that helps you automate your marketing processes. It allows you to send Email, SMS, MMS, Push Notifications and create stunning Landing Pages."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pulseem.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pulseem Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(36, 151, 191, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Pulseem is a marketing platform that helps you automate your marketing processes. It allows you to send Email, SMS, MMS, Push Notifications and create stunning Landing Pages.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Recipient Created</div>
  <div>Triggers when a new recipient added.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Change Direct Client Status</div>
  <div>Change client status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Web API - Create/Update Client</div>
  <div>Create or update a client in a specific group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Direct Client Status</div>
  <div>Get a client status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Direct Email Report</div>
  <div>Get email report.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Incoming SMS Report</div>
  <div>Get Incoming SMS Report.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Direct SMS Report</div>
  <div>Get SMS report.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Email Direct</div>
  <div>Send a new email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS Direct</div>
  <div>Send a new sms.</div>
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
          <title>Pulseem</title>
          <meta name="description" content="Pulseem is a marketing platform that helps you automate your marketing processes. It allows you to send Email, SMS, MMS, Push Notifications and create stunning Landing Pages." />
        </>
      ),
    },
  };
}
