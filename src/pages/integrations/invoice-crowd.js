import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Invoice Crowd"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/invoice-crowd.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Invoice Crowd Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 0, 53, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">A Cloud based Invoicing, Estimation and Accounting Platform for small and mid sized Business. Create and send Invoices to your clients and get paid faster.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>Creates an invoice</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Create new customer in invoicecrowd</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Estimate</div>
  <div>Creates an estimate</div>
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
          <title>Invoice Crowd</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
