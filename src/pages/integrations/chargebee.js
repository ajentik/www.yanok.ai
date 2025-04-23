import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Chargebee"
      description={`Chargebee is a subscription management and recurring billing solution used by businesses to customize subscription billing workflows.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/chargebee.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Chargebee Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 108, 54, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Chargebee is a subscription management and recurring billing solution used by businesses to customize subscription billing workflows.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Card Expiration</div>
  <div>Triggers when a credit card expires.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Details Updates</div>
  <div>Triggers when customer details such as first name, last name, email, billing address, etc., are updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is generated(with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Failure</div>
  <div>Triggers when a payment fails.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment Method</div>
  <div>Triggers when a payment method is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Method Updates</div>
  <div>Triggers when a payment method is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a payment is collected successfully.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Activation</div>
  <div>Triggers when a subscription is changed from Trial to Active state.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Cancellation Scheduled</div>
  <div>Triggers when a subscription is scheduled for cancellation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Cancellation</div>
  <div>Triggers when a subscription is cancelled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Details Updates</div>
  <div>Triggers when subscription details such as custom fields, billing information, recurring items etc., are modified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscription</div>
  <div>Triggers when a subscription is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Pause</div>
  <div>Triggers when a subscription is paused.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Reactivation</div>
  <div>Triggers when a subscription is moved from Cancelled state to Active/In Trial/Non Renewing/Future state.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Resumption</div>
  <div>Triggers when a paused subscription is resumed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Change Next Billing Date</div>
  <div>Updates next billing date of a subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a new customer in Chargebee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Subscription</div>
  <div>Creates a new subscription. If you are on Catalog 1.0 of Chargebee, this action allows you to create a subscription and a customer in a single step. If you are on Catalog 2.0 of Chargebee, this action allows you to create a subscription for an existing customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pause Subscription</div>
  <div>Pauses a subscription in Chargebee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Record Offline Payment for an Invoice</div>
  <div>Records an offline payment for unpaid invoices.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Resume Subscription</div>
  <div>Resumes a paused subscription in Chargebee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Updates customer details in Chargebee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Subscription</div>
  <div>Updates a subscription in Chargebee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds an Existing Customer</div>
  <div>Lookup an existing customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Existing Subscription</div>
  <div>Lookup details of an existing subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Subscription Invoice Details</div>
  <div>Get the Invoice details for a specific Subscription ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Fetch Customer Subscription Details</div>
  <div>Get the subscription details for a specific customer ID</div>
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
          <title>Chargebee</title>
          <meta name="description" content={`Chargebee is a subscription management and recurring billing solution used by businesses to customize subscription billing workflows.`} />
        </>
      ),
    },
  };
}
