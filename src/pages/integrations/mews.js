import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Mews"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mews.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Mews Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Mews is an innovative hospitality cloud that empowers the modern hotelier to improve performance, maximize revenue, and provide remarkable guest experiences.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Accounting Item</div>
  <div>Triggers when there is a new Accounting Item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Closed Bill</div>
  <div>Triggers when there is a new closed bill.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company Event</div>
  <div>Triggers when a new company is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer Event</div>
  <div>Triggers when the customer event occurs such as new customer is added or customer is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reservation Event</div>
  <div>Triggers when the reservation event occurs such as a new booking, check in or check out.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Space Block Event</div>
  <div>Triggers when space is out of order or house use space block.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Customer File</div>
  <div>Attaches the specified file to the customer profile.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Reservation</div>
  <div>Creates a reservation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Reservation Companion</div>
  <div>Adds a customer as a companion to the reservation. Succeeds only if there is space for the new companion (count of current companions is less than AdultCount + ChildCount).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Reservation Product</div>
  <div>Adds a new product order of the specified product to the reservation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Availability Block</div>
  <div>Creates Availability Block, updates availability and rate price.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a Company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Task</div>
  <div>Creates new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Creates a new order with the specified products and/or items under a specific Additional service</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Updates a company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Updates a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Reservation Interval</div>
  <div>Updates reservation interval (start, end or both).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Bill by Id</div>
  <div>Finds an existing bill in Mews by unique identifier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Customer by Email, Id or Name</div>
  <div>Finds an existing customer in Mews.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Current Rate Prices</div>
  <div>Finds the price of a rate for the defined interval in Mews.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Reservation by Customer Id</div>
  <div>Finds an existing reservation in Mews by Customer Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Reservation by Reservation Id</div>
  <div>Finds an existing reservation in Mews by Reservation Id</div>
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
          <title>Mews</title>
        </>
      ),
    },
  };
}
