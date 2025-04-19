import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Transporters.io"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/transporters.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Transporters.io Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 193, 7, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Transporters.io is a booking and business management solution for private hire transport operators.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Changed Status</div>
  <div>Triggers when an existing order changes status. Only triggers newly selected order status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Customer</div>
  <div>Triggers when a new customer is created or when an existing customer is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Driver/Supplier</div>
  <div>Triggers when a new driver (or Supplier for enterprise users) is created or when an existing one is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Invoice</div>
  <div>Triggers when a new invoice is created or when an existing invoice is updated. Only triggers for the selected invoice status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Order</div>
  <div>Triggers when a new order is created or when an existing order is updated. Only triggers for the selected order status.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Change Order Status</div>
  <div>Change status of an existing order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Customer</div>
  <div>Creates a new customer or updates the existing record if the email already exists.</div>
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
          <title>Transporters.io</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
