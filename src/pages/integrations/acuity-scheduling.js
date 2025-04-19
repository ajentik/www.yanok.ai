import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Acuity Scheduling"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/acuity-scheduling.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Acuity Scheduling Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(65, 65, 65, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Easy online appointment scheduling software. Save time by having clients book appointments, complete custom intake forms, and pay in advance 24/7 anywhere in the world.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Start</div>
  <div>Triggers a specified time before an appointment starts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Appointment</div>
  <div>Triggers when a new appointment is scheduled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Canceled</div>
  <div>Triggers when an appointment is canceled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Rescheduled</div>
  <div>Triggers when an appointment in Acuity gets rescheduled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product Order</div>
  <div>Triggers when a new order is completed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Coupon Code</div>
  <div>Adds a new coupon code.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Package Code</div>
  <div>Adds a new package code.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Blocked Off Time</div>
  <div>Block off a new range of time on your schedule.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Appointment by ID</div>
  <div>Finds an existing appointment by appointment ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Appointments by Client Info</div>
  <div>Find existing appointments from client info.</div>
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
          <title>Acuity Scheduling</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
