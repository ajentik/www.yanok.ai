import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pennylane"
      description={`Pennylane centralizes all your cash flows and connects with your financial tools to ease and automate collaboration with your accountant.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pennylane.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pennylane Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(74, 198, 127, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Pennylane centralizes all your cash flows and connects with your financial tools to ease and automate collaboration with your accountant.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Billing Subscription</div>
  <div>Triggers when a new billing subscription is created or when a billing subscription matches the filter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer Invoice</div>
  <div>Triggers when a new invoice is created/imported or when an invoice matches the filter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Estimate</div>
  <div>Triggers when a new estimate is created or when an estimate matches the filter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a new product is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Billing Subscription</div>
  <div>Creates a new billing subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a new customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer Invoice</div>
  <div>Creates a new customer invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Estimate</div>
  <div>Creates a new estimate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a new product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Customer Invoice</div>
  <div>Retrieves customer invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Estimate</div>
  <div>Retrieves estimates.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Updates customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product</div>
  <div>Updates product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Billing Subscription</div>
  <div>Updates Billing Subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Estimate Status</div>
  <div>Updates Estimate Status.</div>
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
          <title>Pennylane</title>
          <meta name="description" content={`Pennylane centralizes all your cash flows and connects with your financial tools to ease and automate collaboration with your accountant.`} />
        </>
      ),
    },
  };
}
