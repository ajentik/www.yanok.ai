import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Timekit"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/timekit.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Timekit Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(68, 107, 235, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Timekit lets you build scalable and flexible booking experiences and scheduling flows that grow your business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Booking Received</div>
  <div>Triggers when you receive a new booking in Timekit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Cancellation Received From a Resource</div>
  <div>Triggers when the resource assigned to a booking cancel it.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Cancellation Received From a Customer</div>
  <div>Trigger when a customer cancel their booking.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Cancellation of a Group Slot Received</div>
  <div>Triggers when the resource assigned to a group slot cancel it.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Completed Booking</div>
  <div>Triggers 1 hours after a bookings time has taken place.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Confirmed Booking</div>
  <div>Triggers when the resource assigned to the booking confirms it.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Declined Booking</div>
  <div>Triggers when the resource assigned to the booking declines it.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Paid Booking</div>
  <div>Triggers when you receive a booking that has a payment step configured.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Rescheduled Booking</div>
  <div>Triggers when a customer reschedules a booking.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tentative Booking</div>
  <div>Triggers when you receive a new booking with a manual confirmation flow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unpaid Booking</div>
  <div>Triggers when payment fails on a booking flow that has a payment step configured.</div>
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
          <title>Timekit</title>
        </>
      ),
    },
  };
}
