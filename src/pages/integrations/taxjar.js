import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TaxJar"
      description="TaxJar’s award-winning solution makes it easy to automate sales tax management, reporting and filing. We obsessively leverage technology and exceptional customer service to help you focus on what matters most — growing your business."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/taxjar.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TaxJar Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(63, 174, 42, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">TaxJar’s award-winning solution makes it easy to automate sales tax management, reporting and filing. We obsessively leverage technology and exceptional customer service to help you focus on what matters most — growing your business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">List Categories</div>
  <div>Gets the latest product categories and corresponding tax codes from TaxJar via GET to the v2/categories API endpoint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Two-Letter ISO Code for Region</div>
  <div>TaxJar requires two-letter ISO codes be passed to its API for countries, regions, and US states. For example, given \'Hawaii\' this action will return \'HI\'. To view all countries that TaxJar supports for tax calculations, see</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Customer</div>
  <div>Creates a new customer in TaxJar via POST to the v2/customers API endpoint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create an Order Transaction</div>
  <div>Creates a new order transaction in TaxJar via POST to the v2/transactions/orders API endpoint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Refund Transaction</div>
  <div>Creates a new refund transaction in TaxJar via POST to the v2/transactions/refunds API endpoint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Customers</div>
  <div>Lists existing customers created through the API via GET to the v2/customers endpoint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Orders</div>
  <div>Lists existing order transactions created through the API via GET to the v2/transactions/orders endpoint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Refunds</div>
  <div>Lists existing refund transactions created through the API via GET to the v2/transactions/refunds endpoint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Nexus Regions</div>
  <div>Lists existing nexus regions for a TaxJar account, sorted alphabetically via GET to the v2/nexus/regions API endpoint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Rates for Location</div>
  <div>Shows the sales tax rates for a given location via GET to the v2/rates/:zip API endpoint.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Show a Customer</div>
  <div>Shows an existing customer created through the API via GET to the v2/customers/:customer_id endpoint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Show Order</div>
  <div>Shows an existing order transaction created through the API via GET to the v2/transactions/orders/:transaction_id endpoint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Show Refund</div>
  <div>Shows an existing refund transaction created through the API via GET to the v2/transactions/refunds/:transaction_id endpoint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Summarize Tax Rates for All Regions</div>
  <div>Retrieves minimum and average sales tax rates by region as a backup via GET to the v2/summary_rates API endpoint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Calculate Sales Tax for an Order</div>
  <div>Calculates sales tax for an order via POST to TaxJar\'s v2/taxes API endpoint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Customer</div>
  <div>Updates an existing customer created through the API via PUT to the v2/customers/:customer_id endpoint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update an Order Transaction</div>
  <div>Updates an existing order transaction created through the API via PUT to the v2/transactions/orders/:transaction_id endpoint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Refund Transaction</div>
  <div>Updates an existing refund transaction created through the API via PUT to the v2/transactions/refunds/:transaction_id endpoint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Validate an Address</div>
  <div>Validates a customer address via POST to TaxJar\'s v2/addresses/validate API endpoint and returns back a collection of address matches. Note: Address validation requires a TaxJar Professional or higher subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Validate a VAT Number</div>
  <div>Validates an existing VAT identification number against VIES via GET to the v2/validation API endpoint</div>
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
          <title>TaxJar</title>
          <meta name="description" content="TaxJar’s award-winning solution makes it easy to automate sales tax management, reporting and filing. We obsessively leverage technology and exceptional customer service to help you focus on what matters most — growing your business." />
        </>
      ),
    },
  };
}
