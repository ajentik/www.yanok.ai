import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Apptoto"
      description="For appointment-based businesses, Apptoto offers automated SMS text, email or voice reminders and online scheduling"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/apptoto.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Apptoto Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(120, 184, 87, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">For appointment-based businesses, Apptoto offers automated SMS text, email or voice reminders and online scheduling</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Scheduled</div>
  <div>Triggers when an appointment is scheduled through an Apptoto Booking Page</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message Received</div>
  <div>Triggers when a message is received in Apptoto</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message Sent</div>
  <div>Triggers when a message is sent in Apptoto</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Participant Booking State Changed</div>
  <div>Trigger when a participant\'s booking state changes in Apptoto (e.g. to invited, accepted, declined etc.)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Participant Check-In State Changed</div>
  <div>Trigger when a participant\'s check in state changes in Apptoto (e.g. to arrived, late, noshow etc.)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Participant Reminder State Changed</div>
  <div>Trigger when a participant\'s reminder state changes in Apptoto (e.g. to confirmed, cancelled, etc.)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Processed</div>
  <div>Triggers when a payment charged or captured via Apptoto</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Refunded</div>
  <div>Triggers when a payment is refunded via Apptoto</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Creates or updates a contact in Apptoto</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Event</div>
  <div>Creates or updates an event in Apptoto</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Contact</div>
  <div>Removes a contact in Apptoto</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Event</div>
  <div>Removes an event in Apptoto</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact</div>
  <div>Search for contact in Apptoto</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Event</div>
  <div>Search for event in Apptoto</div>
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
          <title>Apptoto</title>
          <meta name="description" content="For appointment-based businesses, Apptoto offers automated SMS text, email or voice reminders and online scheduling" />
        </>
      ),
    },
  };
}
