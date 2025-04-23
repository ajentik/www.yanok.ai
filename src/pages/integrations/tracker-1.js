import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Tracker"
      description={`Tracker helps recruitment and staffing firms build better relationships, workflows, and revenue with our integrated Recruitment ATS and CRM`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/tracker-1.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Tracker Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(142, 204, 77, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Tracker helps recruitment and staffing firms build better relationships, workflows, and revenue with our integrated Recruitment ATS and CRM</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when a new activity is added to Tracker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new client is added to Tracker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is added to Tracker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is added to Tracker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is added to Tracker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when a new opportunity is added to Tracker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Resource</div>
  <div>Triggers when a new resource is added to Tracker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a new ticket is added to Tracker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Activity</div>
  <div>Triggers when an existing activity is updated to Tracker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Client</div>
  <div>Triggers when an existing client is updated on Tracker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when an existing contact is updated to Tracker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Invoice</div>
  <div>Triggers when an existing invoice is updated to Tracker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Lead</div>
  <div>Triggers when an existing lead is updated to Tracker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Opportunity</div>
  <div>Triggers when an existing opportunity is updated to Tracker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Resource</div>
  <div>Triggers when an existing resource is updated to Tracker.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Ticket</div>
  <div>Triggers when an existing ticket is updated to Tracker.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Adds a new task/activity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Adds a new client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Adds a new contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>Adds a new invoice</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Adds a new lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Adds a new note</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity</div>
  <div>Adds a new opportunity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Resource</div>
  <div>Adds a new resource</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket</div>
  <div>Add a new ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Clients</div>
  <div>Find an existing client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contacts</div>
  <div>Find an existing contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Resources</div>
  <div>Find an existing resource</div>
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
          <title>Tracker</title>
          <meta name="description" content={`Tracker helps recruitment and staffing firms build better relationships, workflows, and revenue with our integrated Recruitment ATS and CRM`} />
        </>
      ),
    },
  };
}
