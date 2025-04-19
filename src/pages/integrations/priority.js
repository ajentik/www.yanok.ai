import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Priority"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/priority.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Priority Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 176, 236, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Priority is a comprehensive ERP package empowering hundreds of thousands of end users worldwide in their daily tasks of running the business</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Catch Contacts Webhook</div>
  <div>Catch Contacts that their status changed from Priority</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Catch Changed Customer Order Status Webhook</div>
  <div>Catch Customer Orders that their status changed from Priority</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Catch Changed Purchase Order Status Webhook</div>
  <div>Catch Purchase Orders that their status changed from Priority</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Campaigns</div>
  <div>Fetch a list of Campaigns</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Customers</div>
  <div>Fetch a list of customers</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Gender Code</div>
  <div>Fetch a list of gender codes</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Job Number</div>
  <div>Fetch a list of job numbers</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Lead Types</div>
  <div>Fetch a list of lead types</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Job Candidate</div>
  <div>Create a new Job Candidate</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Shipping Charges to an Order</div>
  <div>After an order is created, update it with shipping charges information</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Potential Customer</div>
  <div>Create new customer in Priority with the \'potential\' status</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Exist Customer Sales Order</div>
  <div>This action creates a new sales order in Priority for an exist customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Lead in Priority</div>
  <div>Working with Facebook Lead ads, LinkedIn Leads, HubSpot, Unbounce or any other lead generating platform? Link them all to Priority to collect your leads seamlessly. This action allows the creation of a new lead from any source</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Sales Opportunity</div>
  <div>Create a new opportunity in Priority with an option of a task based on a known customer number</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Sales Order</div>
  <div>This action creates a new sales order (with line item support) in Priority for a walk in customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find the Country Name by Two Letter Code</div>
  <div>If your source app provides country in a 2 letter code fashion, use this step to convert it to the country name and send to your next step in the ZAP</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer by Email</div>
  <div>Having an email address find if it belongs to an existing customer in Priority mostly useful for multistep zaps</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Link Customer to a Lead</div>
  <div>Assign a customer to an existing lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Sales Opportunity Status</div>
  <div>Update the status of your sales opportunity in Priority given that you know the opportunity code</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Sales Order Status</div>
  <div>Update the status of the sales order after it\'s creation</div>
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
          <title>Priority</title>
        </>
      ),
    },
  };
}
