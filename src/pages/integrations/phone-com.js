import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Phone.com"
      description="Phone.com app allows you to send and receive SMS, integrate CRM, get events on calls and call logs and generate calls."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/phone-com.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Phone.com Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(63, 174, 41, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Phone.com app allows you to send and receive SMS, integrate CRM, get events on calls and call logs and generate calls.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Call Completed</div>
  <div>Triggers when an inbound or outbound call is terminated on your Phone.com account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Call Log Record</div>
  <div>Triggers when a new log entry is created for a call. Note: Multiple log entries can be created for each call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Call</div>
  <div>Triggers when a new inbound or outbound call is initiated on your Phone.com account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Call Status Updated</div>
  <div>Triggers when an inbound or outbound call\'s status was updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inbound SMS</div>
  <div>Triggers when a new SMS was received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Outbound SMS</div>
  <div>Triggers when a new SMS was sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Voicemail</div>
  <div>Triggers when a new voicemail is created on your Phone.com account.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Make Call (Click to Call)</div>
  <div>Creates a two-legged call and connect the two call legs to one another. Make Call lets you select your outbound caller ID on the call legs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates contact in address book.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Sends an SMS via your Phone.com phone number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Call Data</div>
  <div>Find a call log record from a Call UUID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find a contact</div>
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
          <title>Phone.com</title>
          <meta name="description" content="Phone.com app allows you to send and receive SMS, integrate CRM, get events on calls and call logs and generate calls." />
        </>
      ),
    },
  };
}
