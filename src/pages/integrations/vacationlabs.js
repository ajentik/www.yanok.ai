import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="VacationLabs"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/vacationlabs.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        VacationLabs Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 164, 152, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">A comprehensive online Booking system and website builder for tour operators , to manage website, inventory, rates, and agents</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Booking Cancelled</div>
  <div>Triggers when a booking is cancelled, i.e. the booking status changes to "cancelled"</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Confirmed</div>
  <div>Triggers when a booking is confirmed, i.e. it\'s status is changed to "confirmed" (previous status may have been "complete", "pending_inquiry", "recorded", "unconfirmed", and so on)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Any Other Booking Operation</div>
  <div>Triggers when any operation is performed on the booking that is not already handled by some other trigger. For example, addition of payment, addition/deletion/modification of passengers, etc. This will NOT trigger for things look booking confirmation, or booking cancellation, because they already have dedicated triggers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Rescheduled</div>
  <div>Triggers when a booking is rescheduled, i.e. the date of the booking is changed. The booking may be in any state, such as "confirmed", "pending_confirmation", "pending_inquiry", and so on. As long as the date of the booking is changed, this will trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Form Submission</div>
  <div>Triggers when a new contact request is submitted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Booking</div>
  <div>Triggers when a new booking is created either from back-office or from the website.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inquiry</div>
  <div>Triggers when a new inquiry is submitted on a trip.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Passenger</div>
  <div>Triggers when a new passenger is created via booking.</div>
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
          <title>VacationLabs</title>
        </>
      ),
    },
  };
}
