import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Cheqroom"
      description={`Cheqroom is an equipment tracking service that makes it easy to know who has what equipment and when it’s due back.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/cheqroom.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Cheqroom Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(8, 14, 138, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Cheqroom is an equipment tracking service that makes it easy to know who has what equipment and when it’s due back.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Check-Out Due</div>
  <div>Triggers when a check-out is due in a number of minutes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Check-Out Overdue</div>
  <div>Triggers when a check-out is overdue for a number of minutes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Item Clear Flag</div>
  <div>Triggers when a flag is cleared on an item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Item Set Flag</div>
  <div>Triggers when a flag is set on an item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Check-In</div>
  <div>Triggers when equipment is checked in.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Booking Check-Out</div>
  <div>Triggers when equipment is checked out.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Due</div>
  <div>Triggers when a reservation is due in minutes for checkout.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reservation Reserve</div>
  <div>Triggers when a reservation is made.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when an existing contact is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact</div>
  <div>Adds a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Item</div>
  <div>Adds a new Item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Flag Item</div>
  <div>Flags an item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unflag Item</div>
  <div>Unflags an item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates the information of a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Item</div>
  <div>Updates an item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Contact</div>
  <div>Searches a contact by email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Equipment by QR- Or Barcode</div>
  <div>Searches a piece of equipment by its QR- or barcode.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Flag</div>
  <div>Searches a flag by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Location</div>
  <div>Searches a location by name.</div>
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
          <title>Cheqroom</title>
          <meta name="description" content={`Cheqroom is an equipment tracking service that makes it easy to know who has what equipment and when it’s due back.`} />
        </>
      ),
    },
  };
}
