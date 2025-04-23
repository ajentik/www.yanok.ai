import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Lodgify"
      description={`Lodgify is a vacation rental software that allows vacation rental managers to create their own website and accept online bookings.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/lodgify.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Lodgify Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(3, 235, 195, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Lodgify is a vacation rental software that allows vacation rental managers to create their own website and accept online bookings.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Booking Change</div>
  <div>Triggers when a Booking is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Booking</div>
  <div>Triggers when a new Booking is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Booked Booking</div>
  <div>Triggers when a new Booked Booking is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Status Changed to Booked</div>
  <div>Triggers when a Booking status changes to Booked.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Status Changed to Declined</div>
  <div>Triggers when a Booking status changes to Declined.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Status Changed to Open</div>
  <div>Triggers when a Booking status changes to Open.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Status Changed to Tentative</div>
  <div>Triggers when a Booking status changes to Tentative.</div>
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
          <title>Lodgify</title>
          <meta name="description" content={`Lodgify is a vacation rental software that allows vacation rental managers to create their own website and accept online bookings.`} />
        </>
      ),
    },
  };
}
