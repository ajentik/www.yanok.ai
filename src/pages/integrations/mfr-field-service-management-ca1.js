import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="mfr - field service management"
      description="Field Service Management platform for dispatching efficiently technicians. This platform helps customers to provide the best service onsite."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mfr-field-service-management-ca1.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        mfr - field service management Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(109, 181, 53, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Field Service Management platform for dispatching efficiently technicians. This platform helps customers to provide the best service onsite.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Appointment</div>
  <div>Triggers when a new appointment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Location (Service Location)</div>
  <div>Triggers when new location (service location) is available.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Job</div>
  <div>Triggers when new job was created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job State Change Event</div>
  <div>Triggers when a job state changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag to Entity (Job)</div>
  <div>Adds a tag to an entity like a (job).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Appointment</div>
  <div>Create an appointment (holiday,Illness,appointment) in mfr.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a customer with a unique customer id in mfr.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer Single Person</div>
  <div>Creates a customer of type single person along with location and with a unique customer id in mfr.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create ItemType</div>
  <div>Create an itemtype (material, service, equipment) in mfr.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate Report</div>
  <div>Generates new Report for a job id. Please provide a job id and a report definition code.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Location (Service Location)</div>
  <div>Create a location (service location) with a contact. This is an important job information for the technician.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Job</div>
  <div>Creates a new Job in mfr. Jobs always have a job description and can be created from a job template.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag From Entity (Job)</div>
  <div>Removes a tag from an entity like a (job).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Document</div>
  <div>Uploads a document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find ItemType</div>
  <div>Finds an itemtype by id or by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Location (Service Location)</div>
  <div>Find a Location</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Job</div>
  <div>Find a job in the mfr account by its job id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Find a user by email or externalid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Job by Id</div>
  <div>Returns the job by Id</div>
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
          <title>mfr - field service management</title>
          <meta name="description" content="Field Service Management platform for dispatching efficiently technicians. This platform helps customers to provide the best service onsite." />
        </>
      ),
    },
  };
}
