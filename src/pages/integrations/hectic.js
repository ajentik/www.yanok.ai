import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Hectic"
      description={`Hectic is a single digital workspace with all the tools needed to start, manage and grow a freelancing business.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/hectic.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Hectic Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(38, 122, 225, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Hectic is a single digital workspace with all the tools needed to start, manage and grow a freelancing business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Client Created</div>
  <div>Triggers when a new client is created in Hectic.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Deleted</div>
  <div>Triggers when a client record is deleted in Hectic.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Updated</div>
  <div>Triggers when a client record is updated in Hectic.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deliverable Approval</div>
  <div>Triggers when a new Deliverable is ready for client approval.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Form Completed</div>
  <div>Triggers when a form is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Sent</div>
  <div>Triggers when an invoice is sent in Hectic.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Meeting Cancelled</div>
  <div>Triggers when a meeting is cancelled</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Meeting Scheduled</div>
  <div>Triggers when a new meeting is scheduled</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Meeting Updated</div>
  <div>Triggers when a meeting is updated or rescheduled</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Received</div>
  <div>Triggers when a payment is received either vial Stripe or manual entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Completed</div>
  <div>Triggers when a project is set to "complete" in Hectic.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Created</div>
  <div>Triggers when a new project is created in Hectic.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Updated</div>
  <div>Triggers when the settings for a project are updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Sent</div>
  <div>Triggers when a proposal is sent either via link or email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Signed</div>
  <div>Triggers when a proposal is accepted and signed with e-signature.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Viewed</div>
  <div>Triggers when a user views the proposal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time Worked Created</div>
  <div>Triggers when a new time worked entry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time Worked Deleted</div>
  <div>Triggers when a time worked record is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time Worked Updated</div>
  <div>Triggers when a time worked entry has been updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Approve Deliverable</div>
  <div>Approve a deliverable and move it from the Client Approval status to the next status in the Kanban</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a new client record in Hectic</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create & Optionally Send Invoice</div>
  <div>Create an invoice for a client and optionally send it via Hectic Mail.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Time Worked</div>
  <div>Creates a time worked entry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Expense</div>
  <div>Creates a new expense record in the Hectic accounting system.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Form Submission</div>
  <div>Creates a new form submission and adds the record to the inquiry section of SalesPipeline (pro only).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Client</div>
  <div>Finds a client by either name or contact email address.</div>
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
          <title>Hectic</title>
          <meta name="description" content={`Hectic is a single digital workspace with all the tools needed to start, manage and grow a freelancing business.`} />
        </>
      ),
    },
  };
}
