import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Quaderno"
      description={`Quaderno is a tax software that handles sales tax, VAT, and GST for your online business. Automatically calculates tax, sends receipts and invoices, and provides instant multi-channel tax reports for your sales around the world.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/quaderno.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Quaderno Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(76, 120, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Quaderno is a tax software that handles sales tax, VAT, and GST for your online business. Automatically calculates tax, sends receipts and invoices, and provides instant multi-channel tax reports for your sales around the world.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Abandoned Checkout</div>
  <div>Triggers when a checkout has been abandoned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Accepted Estimate</div>
  <div>Triggers when an estimate is accepted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Declined Estimate</div>
  <div>Triggers when an estimate is accepted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Failed Checkout</div>
  <div>Triggers when a checkout fails due to a card or a payment gateway error (ie: insufficient funds).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a contact is created in Quaderno.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Refund</div>
  <div>Triggers when a Quaderno credit note is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Estimate</div>
  <div>Triggers when a Quaderno estimate is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a Quaderno invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sale</div>
  <div>Triggers when a new sale (Invoice or Receipt) is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Successful Checkout</div>
  <div>Triggers when a checkout flow has finished successfully.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Create a Quaderno Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Estimate</div>
  <div>Create a Quaderno Estimate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Expense</div>
  <div>Create a Quaderno Expense.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>Create a Quaderno Invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Paid Invoice</div>
  <div>Create a Quaderno Invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sale</div>
  <div>Create a Quaderno Sale (Invoice or Receipt).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Sale</div>
  <div>Finds an existing sale (invoice or receipt).</div>
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
          <title>Quaderno</title>
          <meta name="description" content={`Quaderno is a tax software that handles sales tax, VAT, and GST for your online business. Automatically calculates tax, sends receipts and invoices, and provides instant multi-channel tax reports for your sales around the world.`} />
        </>
      ),
    },
  };
}
