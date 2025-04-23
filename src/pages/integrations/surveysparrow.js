import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SurveySparrow"
      description={`SurveySparrow lets you create and share highly engaging, mobile-first surveys that offer a chat-like experience.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/surveysparrow.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SurveySparrow Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(25, 184, 133, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SurveySparrow lets you create and share highly engaging, mobile-first surveys that offer a chat-like experience.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New CES Submission</div>
  <div>Triggers when a CES survey receives a new submission.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New CSAT Submission</div>
  <div>Triggers when a CSAT survey receives a new submission.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New NPS Submission</div>
  <div>Triggers when an NPS survey receives a new submission.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Submission</div>
  <div>Triggers when a survey receives a new submission.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Share CES Survey via Email</div>
  <div>Sends a saved CES Share template to the provided email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Share CES Survey via SMS</div>
  <div>Sends a saved CES Share template to the provided Mobile Number recipients</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact in your active contacts list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Share CSAT Survey via Email</div>
  <div>Sends a saved CSAT Share template to the provided email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Share CSAT Survey via SMS</div>
  <div>Sends a saved CSAT Share template to the provided Mobile Number recipients</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Share NPS Survey via Email</div>
  <div>Sends a saved NPS Share template to the provided email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Share NPS Survey via SMS</div>
  <div>Sends a saved NPS Share template to the provided Mobile Number recipients</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Share Survey via Email</div>
  <div>Sends a saved email share template to the provided email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Share Survey via SMS</div>
  <div>Sends a saved SMS Share template to the provided Mobile Number recipients</div>
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
          <title>SurveySparrow</title>
          <meta name="description" content={`SurveySparrow lets you create and share highly engaging, mobile-first surveys that offer a chat-like experience.`} />
        </>
      ),
    },
  };
}
