import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CallWidget"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/callwidget.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CallWidget Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(50, 121, 199, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">CallWidget is an AI powered lead generation software designed to generate more prospects from your website.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Phone Call Received</div>
  <div>Triggers when a phone call is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Created</div>
  <div>Triggers when a new lead is created in the system</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Text Message Received</div>
  <div>Triggers when a new text message is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tag Added</div>
  <div>Triggers when new tag is added to the contact</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Run Automation</div>
  <div>Run automation on contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Initiate a Call</div>
  <div>Triggers the instant call technology</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Create or Update a Contact Record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a New Text Message (SMS/MMS)</div>
  <div>Sends a text message</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a New Text Message & Initiate a Call</div>
  <div>Sends a text message and triggers the instant call technology</div>
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
          <title>CallWidget</title>
        </>
      ),
    },
  };
}
