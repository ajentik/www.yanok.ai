import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="WaiverFile"
      description="WaiverFile lets your customers sign waivers from a computer, tablet or mobile device. From your website or at a kiosk, completing the forms is quick and easy."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/waiverfile.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        WaiverFile Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(245, 135, 31, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">WaiverFile lets your customers sign waivers from a computer, tablet or mobile device. From your website or at a kiosk, completing the forms is quick and easy.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Edit Event</div>
  <div>Triggers when an event is edited.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Waiver</div>
  <div>Triggers when changes are made to an existing waiver. Original waivers are always retained within WaiverFile.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Waiver</div>
  <div>Triggers when a new waiver is collected.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates a new event in WaiverFile.</div>
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
          <title>WaiverFile</title>
          <meta name="description" content="WaiverFile lets your customers sign waivers from a computer, tablet or mobile device. From your website or at a kiosk, completing the forms is quick and easy." />
        </>
      ),
    },
  };
}
