import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Appcues"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/appcues.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Appcues Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(92, 92, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Appcues is a product-led growth platform. Build exceptional user experiences, code free.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Checklist Completed</div>
  <div>Triggers when a checklist is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Checklist Dismissed</div>
  <div>Triggers when a checklist is dismissed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Checklist Event</div>
  <div>Triggers when a checklist event occurs</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Checklist Skipped</div>
  <div>Triggers when a checklist is skipped.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Checklist Started</div>
  <div>Triggers when a checklist is started.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Custom Event Received</div>
  <div>Triggers when Appcues receives a custom event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Web Flow Completed</div>
  <div>Triggers when a Web Flow is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Web Flow Skipped</div>
  <div>Triggers when a Web Flow is skipped.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Web Flow Started</div>
  <div>Triggers when a Web Flow is started.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Form Submitted</div>
  <div>Triggers when a form element (excluding NPS survey) is submitted through a Web Flow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mobile Flow Completed</div>
  <div>Triggers when a Mobile Flow is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mobile Flow Skipped</div>
  <div>Triggers when a Mobile Flow is skipped.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mobile Flow Started</div>
  <div>Triggers when a Mobile Flow is started.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">NPS Submitted</div>
  <div>Triggers when a new NPS event is submitted. Sends separate</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pin Interaction</div>
  <div>Triggers when a user interacts (click or hover) with a pin.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Segment Entered</div>
  <div>Triggers when a segment is entered.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send Event</div>
  <div>Send a user event to Appcues</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User Profile</div>
  <div>Update user profile attributes for your end user</div>
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
          <title>Appcues</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
