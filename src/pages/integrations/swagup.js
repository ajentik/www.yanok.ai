import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SwagUp"
      description="SwagUp makes it simple to create high quality branded swag for companies to give as gifts to employees and/or clients. This app is meant to automate operations using SwagUp API."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/swagup.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SwagUp Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(15, 36, 64, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SwagUp makes it simple to create high quality branded swag for companies to give as gifts to employees and/or clients. This app is meant to automate operations using SwagUp API.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Directory Created</div>
  <div>Triggers when a directory is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Low Stock for a Product Size</div>
  <div>Triggers when product size is low on stock.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Order</div>
  <div>Triggers when new order is added or modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Order Status</div>
  <div>Triggers when an order status is added or modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Order Tracking</div>
  <div>Triggers when an order tracking is added or modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Stock Change</div>
  <div>Triggers when the stock product quantity change.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Send to a New Contact</div>
  <div>Create a new contact and send a package</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send to a New Contact Multiple Products</div>
  <div>Create a new contact and send a package with multiple products</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Contact</div>
  <div>Create a new contact who you can ship to in the future</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send to Existing Contact</div>
  <div>Send a shipment to one of your existing contacts</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Restock Order for a Product</div>
  <div>Create a restock order for a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Order by Its External Id</div>
  <div>Search for an Order by its External Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Product by Name</div>
  <div>Search for a Product by Product name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Stock for Products</div>
  <div>Search Stock for Products applying optional filters</div>
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
          <title>SwagUp</title>
          <meta name="description" content="SwagUp makes it simple to create high quality branded swag for companies to give as gifts to employees and/or clients. This app is meant to automate operations using SwagUp API." />
        </>
      ),
    },
  };
}
