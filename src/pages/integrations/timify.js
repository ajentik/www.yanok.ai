import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TIMIFY"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/timify.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TIMIFY Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(203, 59, 67, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">TIMIFY is an online scheduling and resource management tool for all kind of small businesses and large enterprises.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Deleted</div>
  <div>Triggers when an appointment is deleted in TIMIFY.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Group Event Participant Added</div>
  <div>Triggers when a new participant is added to an existing group event in TIMIFY.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Appointment</div>
  <div>Triggers when a new appointment/booking is created in TIMIFY.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer With Selective Fields</div>
  <div>This trigger will allow you to hook to selective fields when you create customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Group Event</div>
  <div>Triggers when a new group event (with multiple participants) is created in TIMIFY.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Group Event Participant Added</div>
  <div>Triggers when participant is added in a group event, however it only returns new participant, not all participants of that event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Resource</div>
  <div>Triggers when a new resource (employee/room/etc.) is created in TIMIFY.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Service</div>
  <div>Triggers when a new service is created in TIMIFY.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Resource Deleted</div>
  <div>Triggers when a resource is deleted in TIMIFY.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Resource Updated</div>
  <div>Triggers when an existing resource is updated in TIMIFY.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Updated</div>
  <div>Triggers when an existing appointment/booking is updated in TIMIFY.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Updated</div>
  <div>Triggers when a customer is updated in TIMIFY.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Group Event Updated</div>
  <div>Triggers when an existing group event (with multiple participants) is updated in TIMIFY.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Appointment by Service</div>
  <div>Creates a new appointment by parsed service ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Appointment</div>
  <div>Creates an appointment in TIMIFY.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>To Create a Customer in Timify</div>
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
          <title>TIMIFY</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
