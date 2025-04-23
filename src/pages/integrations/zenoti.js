import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zenoti"
      description={`Zenoti provides an all-in-one, cloud-based software solution for the spa, salon and med spa industry.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zenoti.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zenoti Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(36, 174, 190, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Zenoti provides an all-in-one, cloud-based software solution for the spa, salon and med spa industry.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Complete</div>
  <div>Triggers when a appointment is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Group Create</div>
  <div>Triggers when a appointment is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Group Status</div>
  <div>Triggers when an appointment group status is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Start</div>
  <div>Triggers when a Appointment is Started.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Booking Approve</div>
  <div>Triggers when a Class Booking is Approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Booking Cancel</div>
  <div>Triggers when a Class Booking is Cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Booking Create</div>
  <div>Triggers when a Class Booking is Created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Booking Delete</div>
  <div>Triggers when a Class Booking is Deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Booking No Show</div>
  <div>Triggers when a Class Booking is marked NoShow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Booking Reject</div>
  <div>Triggers when a Class Booking is Rejected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Schedule Cancel</div>
  <div>Triggers when a Class Schedule is Cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Schedule Create</div>
  <div>Triggers when a Class Schedule is Created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Schedule Delete</div>
  <div>Triggers when a Class Schedule is Deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Class Schedule Update</div>
  <div>Triggers when a Class Schedule is Updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Employee Create</div>
  <div>Triggers when an Employee is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Employee Delete</div>
  <div>Triggers when an Employee is Deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Employee Update</div>
  <div>Triggers when an Employee is Updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Create</div>
  <div>Triggers when a new guest is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Delete</div>
  <div>Triggers when a Guest is Deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Membership Cancel</div>
  <div>Triggers when a Guest Membership is cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Membership Create</div>
  <div>Triggers when a Guest Membership is Created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Membership Freeze</div>
  <div>Triggers when a Guest Membership is Freezed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Membership Reinstate</div>
  <div>Triggers when a Guest Membership is Reinstated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Membership Unfreeze</div>
  <div>Triggers when a Guest Membership Unfreezes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Merge</div>
  <div>Triggers when multiple Guests are merged.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Guest Update</div>
  <div>Triggers when an existing guest is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Closure</div>
  <div>Triggers when an Invoice is Closed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Guest</div>
  <div>Creates a Guest</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity</div>
  <div>Creates an opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Guest</div>
  <div>This API will search the nearest guest based on the search fields supplied as the query parameters. you should supply at least one search field and the value should contain at least 3 characters or 3 digits.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Guest by ID</div>
  <div>Fetches the guest from Zenoti using the guest ID. This can be used to get details for a specific guest without uncertainty if the ID is present. This should be preferred over guest search if using seach with a Zenoti trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Guests</div>
  <div>This API will search the nearest guest based on the search fields supplied as the query parameters. you should supply at least one search field and the value should contain at least 3 characters or 3 digits.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Guest by ID or Create Guest</div>
  <div>Fetches the guest from Zenoti using the guest ID. This can be used to get details for a specific guest without uncertainty if the ID is present. This should be preferred over guest search if using seach with a Zenoti trigger.</div>
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
          <title>Zenoti</title>
          <meta name="description" content={`Zenoti provides an all-in-one, cloud-based software solution for the spa, salon and med spa industry.`} />
        </>
      ),
    },
  };
}
