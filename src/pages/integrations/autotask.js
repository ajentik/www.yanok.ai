import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Autotask"
      description={`Autotask provides an IT business management solution that combines service desk, CRM, projects, time and expense, billing and more.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/autotask.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Autotask Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Autotask provides an IT business management solution that combines service desk, CRM, projects, time and expense, billing and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company is found</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Configuration Item</div>
  <div>Triggers when a new configuration item is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when a new opportunity is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new Project is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Quote</div>
  <div>Triggers when a new quote is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new Task is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a new ticket is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Ticket Note</div>
  <div>Triggers when a ticket is updated or created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Time Entry</div>
  <div>Triggers when a new Time Entry is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Company</div>
  <div>Triggers when a company is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Configuration Item</div>
  <div>Triggers when a configuration item is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when a contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Opportunity</div>
  <div>Triggers when an opportunity is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Quote</div>
  <div>Triggers when a quote is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Ticket</div>
  <div>Triggers when a ticket is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Time Entry</div>
  <div>Triggers when a Time Entry is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket</div>
  <div>Creates a ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket Note</div>
  <div>Creates a ticket note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity</div>
  <div>Creates an opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Quote</div>
  <div>Creates a quote.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Update a company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity</div>
  <div>Updates an opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Quote</div>
  <div>Updates a quote.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Ticket</div>
  <div>Updates a ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Company</div>
  <div>Finds a Company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact</div>
  <div>Finds a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Opportunity</div>
  <div>Finds an opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Quote</div>
  <div>Finds a quote.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Ticket</div>
  <div>Finds a Ticket by Ticket Number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Find a company by company name or ID. Optionally, create one if none are found.</div>
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
          <title>Autotask</title>
          <meta name="description" content={`Autotask provides an IT business management solution that combines service desk, CRM, projects, time and expense, billing and more.`} />
        </>
      ),
    },
  };
}
