import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Ziwo"
      description={`Ziwo Cloud Contact Center is an app with readymade CRM plugins to connect real or virtual agents with phone numbers in any country.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ziwo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Ziwo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(172, 51, 120, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Ziwo Cloud Contact Center is an app with readymade CRM plugins to connect real or virtual agents with phone numbers in any country.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Admin - Call a Number Into IVR</div>
  <div>Calls a phone number into an IVR</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Admin - Call a Number Into Queue</div>
  <div>Triggers a call to the Queue and link to the target customer number</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Admin - Call a Number to Deliver TTS Message</div>
  <div>Call a phone number and deliver a TTS message</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Agent - Call a Number</div>
  <div>Call a number using the logged in agent. Outputs true When call is generated, false if agent is offline. Requires agent account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Admin - Call a Number Using an Agent</div>
  <div>Calls a number using the an agent id. Requires Admin login.</div>
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
          <title>Ziwo</title>
          <meta name="description" content={`Ziwo Cloud Contact Center is an app with readymade CRM plugins to connect real or virtual agents with phone numbers in any country.`} />
        </>
      ),
    },
  };
}
