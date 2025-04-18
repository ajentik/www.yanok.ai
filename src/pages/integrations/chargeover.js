import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ChargeOver"
      description="Go beyond recurring and subscription billing with ChargeOver. Simplify how you manage billing workflows, increase customer satisfaction with easy no-code pages, and stay organized with reports and data!"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/chargeover.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ChargeOver Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(46, 104, 177, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Go beyond recurring and subscription billing with ChargeOver. Simplify how you manage billing workflows, increase customer satisfaction with easy no-code pages, and stay organized with reports and data!</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is added to ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Was Updated</div>
  <div>Triggers when a contact is updated in ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is added to ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Was Updated</div>
  <div>Triggers when a customer is updated in ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new Invoice is added to ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Status Changed</div>
  <div>Triggers when a invoices status changes in ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Item (Product, Discount)</div>
  <div>Triggers when a new item (product, discount) is added to ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Quote</div>
  <div>Triggers when a new quote is added to ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Quote Status Changed</div>
  <div>Triggers when a quotes status changes in ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscription</div>
  <div>Triggers when a new subscription is added to ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Status Changed</div>
  <div>Triggers when a subscription status changes (e.g. from "Current" to "Overdue") in ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Transaction (Payments, Refunds, Credits)</div>
  <div>Triggers when a new transaction (payment, refund, credit, etc.) is added to ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Status Changed</div>
  <div>Triggers when a transaction status changes in ChargeOver.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a Contact</div>
  <div>Create a new contact in ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Customer</div>
  <div>Create a new customer in ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Customer</div>
  <div>Update a existing customer in ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create an Invoice</div>
  <div>Create a new Invoice in ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Quote</div>
  <div>Create a new quote in ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel a Subscription</div>
  <div>Cancel an existing subscription in ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Subscription</div>
  <div>Create a new subscription in ChargeOver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attempt a Payment</div>
  <div>Attempt a payment against the customer\'s on-file credit card or bank account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds an existing contact by a specified field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Finds an existing customer by a specified field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Invoice</div>
  <div>Finds an existing invoice by a specified field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Item (Product, Discount)</div>
  <div>Finds an existing item (product, discount) by a specified field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Quote</div>
  <div>Finds an existing quote by a specified field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Subscription</div>
  <div>Finds an existing subscription by a specified field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Transaction</div>
  <div>Finds a transaction (payment, refund, etc.) by a specified field.</div>
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
          <title>ChargeOver</title>
          <meta name="description" content="Go beyond recurring and subscription billing with ChargeOver. Simplify how you manage billing workflows, increase customer satisfaction with easy no-code pages, and stay organized with reports and data!" />
        </>
      ),
    },
  };
}
