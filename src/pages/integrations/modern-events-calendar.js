import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Modern Events Calendar (MEC)"
      description="Modern Events Calendar is a responsive, mobile-friendly, FREE, and comprehensive events management plugin which is extremely user-friendly and well-designed for displaying the events calendar on the websites, ever easier."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/modern-events-calendar.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Modern Events Calendar (MEC) Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(64, 217, 241, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Modern Events Calendar is a responsive, mobile-friendly, FREE, and comprehensive events management plugin which is extremely user-friendly and well-designed for displaying the events calendar on the websites, ever easier.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Canceled Event</div>
  <div>Triggers when an event is canceled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Occurrences</div>
  <div>description description</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Events</div>
  <div>Triggers when a new support ticket is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Modified Event</div>
  <div>Triggers when an event is modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Booking</div>
  <div>Triggers when a new booking is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when an event is created.</div>
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
          <title>Modern Events Calendar (MEC)</title>
          <meta name="description" content="Modern Events Calendar is a responsive, mobile-friendly, FREE, and comprehensive events management plugin which is extremely user-friendly and well-designed for displaying the events calendar on the websites, ever easier." />
        </>
      ),
    },
  };
}
