import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Doodle"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/doodle.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Doodle Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(55, 152, 212, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Doodle is the easiest way to find the right time for anything. Schedule faster, get the right people together, and manage your time at work better.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Booking Page Event Booked</div>
  <div>When any booking page event gets booked</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Page Event Updated</div>
  <div>When any booking page event is updated (rescheduled)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Doodle Event Booked</div>
  <div>Triggers when you or someone else books an event using Doodle.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Doodle Event Updated</div>
  <div>Triggers when a booked event is updated (rescheduled).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">1:1 Booked</div>
  <div>When any 1:1 gets booked</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">1:1 Updated</div>
  <div>When any 1:1 gets is updated (rescheduled)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Specific Booking Page Gets Booked</div>
  <div>A specific Booking Page, when an event is booked</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Specific Booking Page Gets Updated</div>
  <div>A specific Booking Page, when an event is updated (rescheduled).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Specific 1:1 Gets Booked</div>
  <div>A specific 1:1, when an event is booked</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Specific 1:1 Gets Updated</div>
  <div>A specific 1:1, when an event is updated (rescheduled)</div>
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
          <title>Doodle</title>
        </>
      ),
    },
  };
}
