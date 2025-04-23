import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Solo"
      description={`SOLO solar proposal software allows your sales reps to request and receive a proposal in minutes while in the customer’s home.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/solo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Solo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(138, 201, 196, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SOLO solar proposal software allows your sales reps to request and receive a proposal in minutes while in the customer’s home.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Appointment Set</div>
  <div>Triggers when an appointment is set for the customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contract Requested</div>
  <div>Triggers when a contract is requested for a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contract Sent</div>
  <div>Triggers when the contract is sent on a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contract Signed</div>
  <div>Triggers when the contract is signed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Credit Ran</div>
  <div>Triggers when credit is ran on a proposal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Updated</div>
  <div>Triggers when customer is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Created</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Status Changed</div>
  <div>Triggers when a customer\'s status changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Requested</div>
  <div>Triggers when a proposal is requested on a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Saved</div>
  <div>Triggers when a proposal is saved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Selected</div>
  <div>Triggers when a customer select\'s a proposal for their contract.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Sent</div>
  <div>Triggers when a proposal is sent to a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Sold</div>
  <div>Triggers when a proposal is marked as sold on the customer.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a user in Solo\'s system.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Customer Proposals</div>
  <div>Get a customer\'s basic proposal information: selected_proposal_id, proposal_sold_id, proposal_id, date_created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Proposal</div>
  <div>Get a proposal\'s detailed information</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Updates a Customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Update a user in Solo\'s system.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Customers</div>
  <div>Gets customers based on the company id, and filters you pass in.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get AHJ\'s</div>
  <div>Get AHJ\'s in Solo\'s system.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get CAD Attachments</div>
  <div>Get CAD attachments.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get CAD Rails</div>
  <div>Get CAD rails that exist in Solo\'s system.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Companies</div>
  <div>Gets a list of companies you have access to.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Company</div>
  <div>Get company information by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Company Installers</div>
  <div>Gets a companies installers</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Company Inverters</div>
  <div>Get a companies inverters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Company Modules</div>
  <div>Get a companies modules/solar panels</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Company Users</div>
  <div>Get users that belong to a company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Timezones</div>
  <div>Gets all timezones that exist in Solo\'s system.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Utility Companies</div>
  <div>Get Utilities that exist in Solo.</div>
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
          <title>Solo</title>
          <meta name="description" content={`SOLO solar proposal software allows your sales reps to request and receive a proposal in minutes while in the customer’s home.`} />
        </>
      ),
    },
  };
}
