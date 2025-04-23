import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Framework360"
      description={`Framework360 è il software essenziale per i veri professionisti del digital marketing.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/framework360-ca123414.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Framework360 Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(51, 122, 183, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Framework360 è il software essenziale per i veri professionisti del digital marketing.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Customer Added to a List</div>
  <div>Triggers when a customer is added to a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer Registered</div>
  <div>Triggers when a new customer registers to the Framework360 environment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message Received</div>
  <div>Triggers when a new message is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message Sent</div>
  <div>Triggers when a new message is sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order Received</div>
  <div>Triggers when a new order is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Status Updated</div>
  <div>Triggers when the status of an order is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update an Customer</div>
  <div>Creates or Update an Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Customers</div>
  <div>Search for aCustomer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create an Customer</div>
  <div>Search for aCustomer</div>
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
          <title>Framework360</title>
          <meta name="description" content={`Framework360 è il software essenziale per i veri professionisti del digital marketing.`} />
        </>
      ),
    },
  };
}
