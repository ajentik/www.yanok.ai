import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Opendate"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/opendate.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Opendate Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 89, 94, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Opendate is the data driven operating system for your venue. Transform how you discover, analyze, and book the best talent for your venue through our industry-leading software and events platform for venues.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Abandon Cart</div>
  <div>Triggers when a cart is abandoned</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event On-Sale</div>
  <div>Triggers when an event goes on-sale in Opendate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event Confirmed</div>
  <div>Triggers when a new event is confirmed in Opendate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Finance Item</div>
  <div>Triggers when a new item is added to the Finance section in Opendate</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order by Event</div>
  <div>Triggers when a new order created for a specific event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is created in Opendate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket Check-In</div>
  <div>Triggers when a ticket is checked in.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Find AddOns by Event</div>
  <div>Finds any Add Ons for an Event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Fan ID by Email Address</div>
  <div>Find a Fan by Email Address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Event by Opendate ID</div>
  <div>Find all Event Details in Opendate by Event ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Events by Artist Name</div>
  <div>Searches all events by artist name and returns all matching events</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Event Description</div>
  <div>Used to lookup an event description in Opendate</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Event by Event ID</div>
  <div>Find confirm by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Orders by Event</div>
  <div>Find Ticket Orders by Event ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Settlement by Event ID</div>
  <div>Find settlement by confirm id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Similar Artists by Event</div>
  <div>Finds Similar Artists to a Given Event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Ticket Types by Event</div>
  <div>Finds the various types of tickets setup for a given event in Opendate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recommend Events by Fan ID</div>
  <div>Recommend upcoming events of interest by Fan ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find All Finance Items</div>
  <div>Find All Finance Items</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Finance Item</div>
  <div>Find a Finance Item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Event by Eventbrite ID</div>
  <div>Find Event by Eventbrite ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recommend Fans by Event ID</div>
  <div>Recommends a list of fans who would likely have interest in a specific event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Ticket Details by Event & Ticket ID</div>
  <div>Lookup the details of a ticket type by the Event ID and Ticket ID</div>
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
          <title>Opendate</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
