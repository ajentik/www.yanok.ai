import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Jammed"
      description="Jammed is powering the scheduling and bookings for independent creative spaces, like rehearsal rooms, recording studios, dance studios, and more"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/jammed.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Jammed Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(239, 76, 64, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Jammed is powering the scheduling and bookings for independent creative spaces, like rehearsal rooms, recording studios, dance studios, and more</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Booking</div>
  <div>Lists the bookings.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Receive Booking Cancellation Messages</div>
  <div>Triggers when a booking is cancelled by a customer or by a staff member. Cancellations will free up this time to other customers wishing to book the same time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Receive Booking Creation Messages</div>
  <div>Triggers when a Jammed booking is made by a customer online, or made by an admin user. Use the taken_by parameter to distinguish. When taken online, taken_by=online - otherwise it is the name of the admin user that took the booking.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Receive Booking Finished Messages</div>
  <div>Triggers when the booking finishes in real-time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Receive OneHourBefore Booking Messages</div>
  <div>Triggers when the booking is due to start in one hour.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Receive Booking Reminder Messages</div>
  <div>Triggers when the booking reminders is due to be sent. In Jammed are customisable, but by default are triggered 24 hours prior to the start of the booking. An email is sent to the user, but this event exists so you can also hook in other integrations at this point.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Receive Booking Started Messages</div>
  <div>Triggers when the booking starts in real-time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Receive Booking Updated Messages</div>
  <div>Triggers when a booking is updated by a staff member. Customers cannot update their own bookings at present.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Lists the customers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Receive Customer Created Messages</div>
  <div>Triggers when a customer is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Booking</div>
  <div>Creates a new booking.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a new customer.</div>
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
          <title>Jammed</title>
          <meta name="description" content="Jammed is powering the scheduling and bookings for independent creative spaces, like rehearsal rooms, recording studios, dance studios, and more" />
        </>
      ),
    },
  };
}
