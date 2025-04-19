import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Rotessa"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/rotessa.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Rotessa Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 117, 242, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Rotessa is a payment processing tool that lets you collect ACH and EFT payments in the United States and Canada</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Approved</div>
  <div>Triggers when a transaction\'s status is updated to approved in Rotessa.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Declined Transaction</div>
  <div>Triggers when a transaction\'s status is updated to declined in Rotessa.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a customer is created in Rotessa.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer With Customer Authorization</div>
  <div>Triggers when a customer is created using customer authorization in Rotessa.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Change</div>
  <div>Triggers when a customer is updated in Rotessa.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a new customer in Rotessa.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Transaction</div>
  <div>Create a new transaction in Rotessa.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Update a existing customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Match a Customer</div>
  <div>Match a Rotessa customer with a unique identifier.</div>
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
          <title>Rotessa</title>
        </>
      ),
    },
  };
}
