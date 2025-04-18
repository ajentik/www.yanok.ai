import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Neato"
      description="Neato helps improve everyday living through robotics."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/neato.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Neato Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 96, 33, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Neato helps improve everyday living through robotics.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Floor Plan</div>
  <div>Triggers when a New Floor Plan is created at the end of a House Cleaning job in a brand new or re-scanned floor. Works with Neato series D3 to D7.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Cleaning Map</div>
  <div>Triggers when a New Cleaning Map of a current Floor Plan is created at the end of a House Cleaning job. Works with Neato series D3 to D7.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Find Robot</div>
  <div>The Robot will emit sounds and blink the LEDs when it receives the Find Robot command. Works with Neato series D3 to D7.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Map Boundaries</div>
  <div>Get the Boundaries of a Floor Plan. Works with Neato series D3 to D7.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Robot Information</div>
  <div>Get current information of the selected Robot. Works with Neato series D3 to D7.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pause Cleaning</div>
  <div>The Robot will pause cleaning. To continue cleaning use the Resume Cleaning action. Works with Neato series D3 to D7.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Resume Cleaning</div>
  <div>The Robot will resume a paused cleaning. Works with Neato series D3 to D7.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send to Base</div>
  <div>Send the Robot back to its base at the middle of a cleaning. The robot shouldn\'t be in a stopped state. Works with Neato series D3 to D7.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start House Cleaning</div>
  <div>Start House Cleaning with the selected parameters. The Robot should be docked. Works with Neato series D3 to D7.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Stop Cleaning</div>
  <div>The Robot will stop cleaning. This action can\'t be resumed. Works with Neato series D3 to D7.</div>
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
          <title>Neato</title>
          <meta name="description" content="Neato helps improve everyday living through robotics." />
        </>
      ),
    },
  };
}
