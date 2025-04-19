import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ProAbono"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/proabono-da76382.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ProAbono Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 140, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Subscription Billing Made Easy. Subscription Billing As-a-Service, for the New Generation of Services.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Event(s) Related to a Credit Note</div>
  <div>Triggers when an event related to a Credit Note occurs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event(s) Related to a Customer</div>
  <div>Triggers when an event related to a Customer occurs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event(s) Related to an Invoice</div>
  <div>Triggers when an event related to an Invoice occurs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event(s) Related to a Payment Method</div>
  <div>Triggers when an event related to a Payment Method (bank card or direct debit mandate) occurs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event(s) Related to a Subscription</div>
  <div>Triggers when an event related to a Subscription occurs.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Anonymize a Customer</div>
  <div>Anonymizes a Customer. It will erase all personal data of a Customer while keeping its invoices and its subscriptions history. #GDPR #Privacy.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Bill a Customer</div>
  <div>Creates an invoice with the lines available in the customer balance</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Line in the Balance of the Customer</div>
  <div>Creates a new line in the Balance of the Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update a Customer</div>
  <div>Creates a new customer or Updates a customer if the customer already exists.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Subscription</div>
  <div>Creates a new Subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Billing Address of a Customer</div>
  <div>Retrieves the full billing address of an existing customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Full Credit Note (PDF)</div>
  <div>Retrieves a credit note with all details + url PDF file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve a Customer</div>
  <div>Retrieves an existing customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Full Invoice (PDF)</div>
  <div>Retrieves an invoice with all details + url PDF file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Payment Settings of a Customer</div>
  <div>Retrieves the payment settings of an existing customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start a Subscription or Restart a Subscription</div>
  <div>Starts a Subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Suspend a Subscription</div>
  <div>Suspends a Subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Terminate a Subscription</div>
  <div>Terminates a Subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Billing Address of a Customer</div>
  <div>Updates the full billing address of an existing customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Payment Settings of a Customer</div>
  <div>Updates the payment settings of an existing customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upgrade a Subscription</div>
  <div>Upgrades a Subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Country Codes by Country Name</div>
  <div>Retrieves country codes by country name: code ISO 3166-1 alpha-2 (cca2), code ISO 3166-1 numeric (ccn3), code ISO 3166-1 alpha-3 (cca3) and code International Olympic Committee (cioc).</div>
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
          <title>ProAbono</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
