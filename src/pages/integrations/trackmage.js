import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TrackMage"
      description={`TrackMage is an order tracking platform that combines order fulfillment and customer support to provide customer's with a comprehensive post-purchase experience.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/trackmage.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TrackMage Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(38, 57, 100, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">TrackMage is an order tracking platform that combines order fulfillment and customer support to provide customer\'s with a comprehensive post-purchase experience.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Order Created</div>
  <div>Triggers when a new order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Order</div>
  <div>Triggers when a order gets deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Order</div>
  <div>Triggers when an existing order is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Shipment Created</div>
  <div>Triggers when a new parcel is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Shipment</div>
  <div>Triggers when a shipment gets deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Shipment Tracking Status</div>
  <div>Triggers when a shipment tracking status changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Shipment</div>
  <div>Triggers when an existing parcel is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Create a new Order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Shipment</div>
  <div>Create a new Shipment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tracking Page Link</div>
  <div>Create an individual link to your tracking page where your customers/vendors can see statuses of their parcels. Links get created using specified parameters. For example, you will get a link to all your customers shipments on one page if you pass in their email as a parameter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Order</div>
  <div>Find a order by specified criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Shipment</div>
  <div>Find a shipment by specified criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Order</div>
  <div>Find a order by specified criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Shipment</div>
  <div>Find a shipment by specified criteria.</div>
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
          <title>TrackMage</title>
          <meta name="description" content={`TrackMage is an order tracking platform that combines order fulfillment and customer support to provide customer's with a comprehensive post-purchase experience.`} />
        </>
      ),
    },
  };
}
