import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AerisWeather"
      description="AerisWeather provides developer-friendly data services and tools that allow you to monetize weather where it impacts your business."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/aerisweather.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AerisWeather Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(3, 107, 147, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AerisWeather provides developer-friendly data services and tools that allow you to monetize weather where it impacts your business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Weather Alerts</div>
  <div>Triggers on new active weather alerts for the selected location. You can choose how often to look for new alerts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Observations Data</div>
  <div>Triggers current observation data for your location. You can select how often to get new data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Rain or Snow Forecast</div>
  <div>Triggers an alert if there is a chance and type of precipitation (rain, snow, mix) for your location. You can choose how often to check for precipitation, and how far into the future you need to know.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Find Active Weather Alerts</div>
  <div>Find active weather alerts for the selected location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Observation Data</div>
  <div>Get up to date observation data for your location like humidity, uv index, temp, etc.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get a Rain or Snow Forecast</div>
  <div>Find out if there is a chance and type of precipitation (rain, snow, mix) for your location. You can choose how far into the future you need to know.</div>
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
          <title>AerisWeather</title>
          <meta name="description" content="AerisWeather provides developer-friendly data services and tools that allow you to monetize weather where it impacts your business." />
        </>
      ),
    },
  };
}
