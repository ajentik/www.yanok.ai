import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Wherefour"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/wherefour.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Wherefour Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(148, 96, 175, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Wherefour is a traceability/ERP software platform for modern manufacturers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Customer Created</div>
  <div>Triggers when a new customer is created in Wherefour.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order Created</div>
  <div>Triggers when a new order is created in Wherefour.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Pick & Ship Created</div>
  <div>Triggers when a pick and ship activity for an order is completed in Wherefour.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase Order Created</div>
  <div>Triggers when a new purchase order is created in Wherefour.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Stock Lot Level Changed</div>
  <div>Triggers when the stock lot level of an inventory item changes in Wherefour.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add a Stock Lot</div>
  <div>Adds a new stock lot to an inventory item in Wherefour.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update a Customer</div>
  <div>Creates a new customer, or if the customer already exits in Wherefour, updates the existing record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create an Order</div>
  <div>Creates a new order in Wherefour.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pick and Ship an Order</div>
  <div>Auto selects inventory to fulfill an order and records the transaction in Wherefour, returning the stock lot(s) and lot codes selected based on the inventory pull strategy for each item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update an Order</div>
  <div>Updates an existing order in Wherefour.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for an Address</div>
  <div>Locate an address in Wherefour.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Customer</div>
  <div>Searches for a specific customer record in Wherefour.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Inventory</div>
  <div>Locate inventory in Wherefour by SKU or Inventory Item Name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for an Order</div>
  <div>Locate an order in Wherefour, based on the Wherefour order number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Purchase</div>
  <div>Locate a purchase order in Wherefour, based on the Wherefour purchase order number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Shipments</div>
  <div>Find the shipments for a specific order number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Vendor</div>
  <div>Searches for a specific vendor record in Wherefour.</div>
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
          <title>Wherefour</title>
        </>
      ),
    },
  };
}
