import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="BigDataCloud"
      description="BigDataCloud provides advanced IP geolocation and Reverse geocoding APIs, along with customer data APIs like phone number and email address validation APIS."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/bigdatacloud.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        BigDataCloud Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(235, 101, 36, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">BigDataCloud provides advanced IP geolocation and Reverse geocoding APIs, along with customer data APIs like phone number and email address validation APIS.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get IP Geolocation Data</div>
  <div>Get comprehensive IP geolocation data from your IPv4 address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Locality Info of Geo-Coordinates.</div>
  <div>Get detailed locality info from geographical coordinates (latitude and longitude).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Validate Email Address</div>
  <div>Validate Email Address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Validate Phone Number</div>
  <div>Validate Phone Number</div>
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
          <title>BigDataCloud</title>
          <meta name="description" content="BigDataCloud provides advanced IP geolocation and Reverse geocoding APIs, along with customer data APIs like phone number and email address validation APIS." />
        </>
      ),
    },
  };
}
