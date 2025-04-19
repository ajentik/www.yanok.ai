import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Always On Time (AOT.plus)"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/always-on-time-aotplus.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Always On Time (AOT.plus) Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(35, 71, 107, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Always On Time is a powerful scheduling solution. Use AOT to manage online bookings, memberships, services, staff, coupons, multiple locations, and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Membership Renewal Failed</div>
  <div>Triggers when a membership renewal fails for any reason, such as a payment failure.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Created</div>
  <div>Triggers when an appointment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Cancelled</div>
  <div>Triggers when an appointment is cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Renewed</div>
  <div>Triggers when an AOT subscription membership is renewed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Membership Cancelled</div>
  <div>Triggers when a membership is cancelled. Note that this does not trigger when a membership is put on hold due to a payment failure - please use the "Membership Renewal Failed" event to trigger actions based on membership renewal failures.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Created</div>
  <div>Triggers when an order is created.</div>
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
          <title>Always On Time (AOT.plus)</title>
        </>
      ),
    },
  };
}
