import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ChartMogul"
      description="ChartMogul helps you measure, understand and grow your subscription business."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/chartmogul.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ChartMogul Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(238, 79, 84, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ChartMogul helps you measure, understand and grow your subscription business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add a Custom Attribute to a Customer via Email</div>
  <div>Adds custom attributes to the customer in ChartMogul that have the given email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a Custom Attributes to a Customer via External ID</div>
  <div>Adds a custom attribute to the customer in ChartMogul that have the given external ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a Custom Attribute to a Customer via UUID</div>
  <div>Add a custom attribute to the customer in ChartMogul that have the given UUID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags to a Customer via UUID</div>
  <div>Adds tags to the customer in ChartMogul that have the given UUID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags to a Customer via Email</div>
  <div>Adds tags to the customer in ChartMogul that have the given email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags to a Customer via External ID</div>
  <div>Adds tags to the customer in ChartMogul that have the given external ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Customer</div>
  <div>Create a customer profile in the target data source</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Merge Customers</div>
  <div>Consolidates the ChartMogul profiles of the two target Customer UUIDs</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Customer</div>
  <div>Updates certain modifiable attributes of a customer object in your ChartMogul account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Customer via Email</div>
  <div>Searches for a customer profile using the customer\'s email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Customer via External ID</div>
  <div>Searches for a customer profile using the customer\'s external ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve a Customer Profile</div>
  <div>Retrieves a ChartMogul customer profile using the Customer UUID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve All Key Metrics</div>
  <div>Retrieves all key metrics for the specified time period.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Average Revenue Per Account (ARPA)</div>
  <div>Retrieves the Average Revenue Per Account (ARPA), for the specified time period.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve ARR</div>
  <div>Retrieves the Annualized Run Rate (ARR), for the specified time period.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Average Sale Price (ASP)</div>
  <div>Retrieves the Average Sale Price (ASP), for the specified time period.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Customer Churn Rate</div>
  <div>Retrieves the Customer Churn Rate, for the specified time period.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Customer Count</div>
  <div>Retrieves the number of active customers, for the specified time period.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Customer Lifetime Value (LTV)</div>
  <div>Retrieves the Customer Lifetime Value (LTV), for the specified time period.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve MRR</div>
  <div>Retrieves the Monthly Recurring Revenue (MRR), for the specified time period.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve MRR Churn Rate</div>
  <div>Retrieves the Net MRR Churn Rate, for the specified time period.</div>
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
          <title>ChartMogul</title>
          <meta name="description" content="ChartMogul helps you measure, understand and grow your subscription business." />
        </>
      ),
    },
  };
}
