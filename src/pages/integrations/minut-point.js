import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Minut Smart Home Sensor"
      description={`Protect your home, your neighbors' peace and quiet and your guests' privacy with Minut. Get real-time home analytics on noise, motion, temperature, humidity in your property, from anywhere in the world.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/minut-point.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Minut Smart Home Sensor Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(15, 100, 150, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Protect your home, your neighbors\' peace and quiet and your guests\' privacy with Minut. Get real-time home analytics on noise, motion, temperature, humidity in your property, from anywhere in the world.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Alarm Sound Detected</div>
  <div>Triggers when Minut detects an alarm sound.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Loud Noise Detected</div>
  <div>Triggers when the sound level exceeds the set threshold. The threshold can be set in the Minut app.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Button Pressed Detected</div>
  <div>Triggers when the Minut button is pressed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Motion Detected</div>
  <div>Triggers if the grace period expires after motion detection.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Noise Monitoring First Warning</div>
  <div>Triggers when Noise monitoring determines that the noise level is above the predefined threshold for the first time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Noise Monitoring Second Warning</div>
  <div>Triggers when Noise monitoring determines that the noise level is above the predefined threshold for a second time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Noise Monitoring Third Warning</div>
  <div>Triggers when Noise monitoring determines that the noise level is above the predefined threshold for a third time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Minut Mounted</div>
  <div>Triggers when the Minut device is mounted on its plate</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Temperature High Is Back to Normal</div>
  <div>Triggers when the temperature has been over the set threshold but now has dropped below it.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Temperature Dropped Below Threshold</div>
  <div>Triggers when the temperature drops below the threshold set on the Minut device.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Temperature Low Is Back to Normal</div>
  <div>Triggers when the temperature has been below the set threshold but now is above it.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Temperature Is Above Threshold</div>
  <div>Triggers when the temperature rises above the threshold set on a Minut sensor</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Minut Smart Home Sensor</title>
          <meta name="description" content={`Protect your home, your neighbors' peace and quiet and your guests' privacy with Minut. Get real-time home analytics on noise, motion, temperature, humidity in your property, from anywhere in the world.`} />
        </>
      ),
    },
  };
}
