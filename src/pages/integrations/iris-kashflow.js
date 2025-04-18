import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="IRIS KashFlow"
      description="IRIS KashFlow is an easy-to-use accounting and bookkeeping software allowing you to run your business from anywhere at any time whilst staying compliant."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/iris-kashflow.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        IRIS KashFlow Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(214, 52, 95, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">IRIS KashFlow is an easy-to-use accounting and bookkeeping software allowing you to run your business from anywhere at any time whilst staying compliant.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Customer List</div>
  <div>Triggers when user tries to search customers whose code or name or code matches with given string.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Invoice List</div>
  <div>Triggers when users searches based on invoice number or customer reference number.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Payment</div>
  <div>Adds payment to existing invoice from your KashFlow Account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Customer</div>
  <div>Create/Update Customer for Kashflow</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>Creating invoice for KashFlow</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Customer</div>
  <div>Search a latest customer from KashFlow account whose email/code/name matches given string.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Invoice</div>
  <div>Gets a latest Invoice from KashFlow account whose invoice number or customer reference number matches given string.</div>
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
          <title>IRIS KashFlow</title>
          <meta name="description" content="IRIS KashFlow is an easy-to-use accounting and bookkeeping software allowing you to run your business from anywhere at any time whilst staying compliant." />
        </>
      ),
    },
  };
}
