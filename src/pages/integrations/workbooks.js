import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Workbooks CRM"
      description={`Workbooks CRM helps businesses run better by joining up marketing, sales, finance and service teams with a single cloud-based solution.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/workbooks.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Workbooks CRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 107, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Workbooks CRM helps businesses run better by joining up marketing, sales, finance and service teams with a single cloud-based solution.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Case</div>
  <div>Triggers when a new case is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Organisation</div>
  <div>Triggers when a new organisation is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new person is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sales Lead</div>
  <div>Triggers when a new sales lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Posted Credit Note</div>
  <div>Triggers when a credit note is posted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Posted Invoice</div>
  <div>Triggers when an invoice is complete and its status posted.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Perform Dynamic Lookup</div>
  <div>Looks up values using a Dynamic Lookup Item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Marketing Campaign Member</div>
  <div>Adds a new member to a Marketing Campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Marketing Campaign Member Status</div>
  <div>Adds a new member status to a Marketing Campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Case</div>
  <div>Creates a new case.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Marketing Campaign</div>
  <div>Creates a new Marketing Campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer Order</div>
  <div>Creates a new Customer Order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer Order and Line Items</div>
  <div>Creates a new Customer Order and Line Items</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Organisation</div>
  <div>Creates a new organisation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person</div>
  <div>Creates a new Person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sales Lead</div>
  <div>Creates a new sales lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Marketing Campaign Member</div>
  <div>Update an existing member of a Marketing Campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer Order</div>
  <div>Updates a customer order which has previously been found with a Find Customer Order step.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Organisation</div>
  <div>Update an existing Organisation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person</div>
  <div>Update an existing Person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Sales Lead</div>
  <div>Update an existing Sales Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Marketing Campaign</div>
  <div>Find a marketing campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Marketing Campaign Member</div>
  <div>Find a marketing campaign member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Marketing Campaign Member Status</div>
  <div>Find a marketing campaign member status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Customer Order</div>
  <div>Finds a customer order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Organisation</div>
  <div>Find an organisation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Person</div>
  <div>Find a person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Sales Lead</div>
  <div>Find a sales lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Marketing Campaign</div>
  <div>Find or Create a Marketing Campaign</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Marketing Campaign Member</div>
  <div>Find or Create a Marketing Campaign Member</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Marketing Campaign Member Status</div>
  <div>Find or Create a Marketing Campaign Member Status</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create an Order</div>
  <div>Find or Create an Order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create an Organisation</div>
  <div>Find or Create an Organisation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Person</div>
  <div>Find or Create a Person</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Sales Lead</div>
  <div>Find or Create a Sales Lead</div>
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
          <title>Workbooks CRM</title>
          <meta name="description" content={`Workbooks CRM helps businesses run better by joining up marketing, sales, finance and service teams with a single cloud-based solution.`} />
        </>
      ),
    },
  };
}
