import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Weather by Zapier"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/weather.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Weather by Zapier Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(73, 157, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Trigger off weather conditions in your local area. (Powered by Dark Sky)</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Will It Rain Today?</div>
  <div>Only triggers if it will rain today. Checks once a day around 7AM, your local time. Respects your Zapier time zone settings.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Today\'s Forecast</div>
  <div>Receive a daily weather forecast. Always triggers once a day around 7AM, your local time. Respects your Zapier time zone settings.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Current Weather</div>
  <div>Gets the current weather conditions for a location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Tomorrow\'s Forecast</div>
  <div>Gets tomorrow\'s forecasted weather conditions for a location.</div>
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
          <title>Weather by Zapier</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
