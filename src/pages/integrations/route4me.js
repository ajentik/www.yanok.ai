import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Route4Me"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/route4me.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Route4Me Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(76, 93, 131, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Route4Me optimizes where, when, and how your people, vehicles, assets, and routes should work.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when there is a new activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note Attachment</div>
  <div>Triggers when there is a new note attachment.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Geocode Address</div>
  <div>Returns a geocoded address with its latitude and longitude values.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create an Address</div>
  <div>Add an address to the Address Book.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create an Order</div>
  <div>Creates a new order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Route Destination</div>
  <div>Retrieves route destination data by the route destination ID.</div>
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
          <title>Route4Me</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
