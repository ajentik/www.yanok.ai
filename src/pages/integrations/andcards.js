import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="andcards"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/andcards.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        andcards Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(12, 34, 32, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">andcards is a member-first coworking space software to organize bookings, services and communication.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company is created in a location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Desk Booking</div>
  <div>Triggers when a new booking is created in a selected desk.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event Pass</div>
  <div>Triggers when a new event pass is created in a selected location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Member Delete</div>
  <div>Triggers when a member is deleted from a location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member</div>
  <div>Triggers when a new member is invited to join a location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Request to Join</div>
  <div>Triggers when a new request to join is created in location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is created in a selected location\'s shop.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Room Booking</div>
  <div>Triggers when a new booking is created in a selected room.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Room Booking Ends</div>
  <div>Triggers when a booking ends in a selected room.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Support Ticket</div>
  <div>Triggers when a new support ticket is created in a location.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Stream Post</div>
  <div>Creates a new post in Stream.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company in your location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invite Member</div>
  <div>Invites a new member to your location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Member</div>
  <div>Delete member by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Room Booking</div>
  <div>Creates a new booking in a room.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Room Booking</div>
  <div>Deletes a booking in a room.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Visit</div>
  <div>Creates a new visit in location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Finds a company in your location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Member</div>
  <div>Finds a member in your location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Room Booking</div>
  <div>Find a room booking.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Company</div>
  <div>Finds a company in your location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Member</div>
  <div>Finds a member in your location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Room Booking</div>
  <div>x</div>
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
          <title>andcards</title>
        </>
      ),
    },
  };
}
