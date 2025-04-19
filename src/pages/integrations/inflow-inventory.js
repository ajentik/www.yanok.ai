import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="inFlow Inventory"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/inflow-inventory.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        inFlow Inventory Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(215, 136, 41, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Get an unfair advantage with inFlow Inventory management software. A complete system to run your small business used by 1000\'s.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Customer</div>
  <div>Triggers when a customer is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lapsed Customer</div>
  <div>Triggers when a customer has not ordered after x days.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Sales Quote</div>
  <div>Triggers when a sales quote is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Purchase Order</div>
  <div>Triggers when a purchase order is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Sales Order</div>
  <div>Triggers when a sales order is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sales Order Past Due</div>
  <div>Triggers when a sales order has not been paid after x days past due date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Vendor</div>
  <div>Triggers when a vendor is created or updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Find an Invoice URL</div>
  <div>Search for the URL of an invoice by a Sales Order ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Sales Order</div>
  <div>Search for the details of a sales order by a Sales Order ID.</div>
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
          <title>inFlow Inventory</title>
        </>
      ),
    },
  };
}
