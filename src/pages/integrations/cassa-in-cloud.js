import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Cassa in Cloud"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/cassa-in-cloud.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Cassa in Cloud Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(235, 90, 64, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Cassa in Cloud is both a cash register and management system.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Department</div>
  <div>Triggers when a new department is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Stock Movement</div>
  <div>Triggers when a new stock movement is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a Customer</div>
  <div>Creates a new customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Creates a new order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create an Organization</div>
  <div>Creates a new organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Products</div>
  <div>Finds existing products matching the filter</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Sales Points</div>
  <div>Finds account\'s sales points</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customers</div>
  <div>Finds existing customers matching the filter</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Organizations</div>
  <div>Find existing organizations matching the filter</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Sold by Category</div>
  <div>Retrieves what\'s been sold in a date range split by Category</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Sold by Department</div>
  <div>Retrieves what\'s been sold in a date range split by Department.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Sold by Tax</div>
  <div>Retrieves what\'s been sold in a date range split by Tax.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Customer</div>
  <div>Finds existing customers matching the filter</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Organization</div>
  <div>Find existing organizations matching the filter</div>
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
          <title>Cassa in Cloud</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
