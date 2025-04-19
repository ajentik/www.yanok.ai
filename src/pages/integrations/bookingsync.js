import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="BookingSync"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/bookingsync.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        BookingSync Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(18, 154, 214, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">BookingSync is a property management system for vacation and short terms rentals: centralize everything in one place to save time and book more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New And/Or Updated And/Or Canceled Booking</div>
  <div>Trigger when a booking is created and/or updated and/or canceled (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New And/Or Updated Client</div>
  <div>Trigger when a client is created and/or updated (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New And/Or Updated Conversation</div>
  <div>Trigger when a conversation is created and/or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inquiry</div>
  <div>Trigger when a new inquiry is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Update Booking</div>
  <div>Updates a booking.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a new client (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Inquiry</div>
  <div>Creates a new inquiry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Bookings by Dates</div>
  <div>Search for bookings with a given time range.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client by Email</div>
  <div>Search for clients using their default email (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Booking</div>
  <div>Search for bookings by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Client</div>
  <div>Search for clients using their default email (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Rental</div>
  <div>Search for rentals by ID.</div>
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
          <title>BookingSync</title>
        </>
      ),
    },
  };
}
