import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="HOVER"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/hover.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        HOVER Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(36, 125, 220, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">HOVER uses ground-level photography to create an accurate 3D model and measurements of any property.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Estimate Generated</div>
  <div>Triggers when an estimate in HOVER is generated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Updated</div>
  <div>Triggers when a job in HOVER is completed, processing or awaiting approval depending on selected state.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Generated</div>
  <div>Triggers when a order in HOVER is generated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Generated</div>
  <div>Triggers when a proposal in HOVER is generated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Approve a Job</div>
  <div>Approves a job within HOVER that is set to require approval.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a 3D Model Link</div>
  <div>Creates a shareable link to the HOVER 3D model.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Job</div>
  <div>Creates a Job within HOVER. The mobile application can then be used to add images of the property to initiate the 3D modeling process.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Capture Request</div>
  <div>Creates a Capture Request within HOVER. Capture requests are used to invite a homeowner or user outside of your HOVER organization to take the photos for you.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete a Capture Request</div>
  <div>Deletes a capture request. This archives the job as well.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Download Job Measurements as Line Items</div>
  <div>Outputs the line item measurements for a job within HOVER.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Download Job Measurements as a File</div>
  <div>Downloads the measurement file output for a job within HOVER.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Calculate Roof Waste Factor</div>
  <div>Generates the HOVER recommended Roof Waste Factor from a properties measurements.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reassign a Job</div>
  <div>This endpoint re-assigns a job to the user specified by the email parameter. It will remove any existing JobAssignments before assigning this job to the specified user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upgrade a Job</div>
  <div>Upgrades a job within HOVER.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a User</div>
  <div>This action finds a user in HOVER by email or name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a HOVER Job</div>
  <div>Finds a HOVER job by a search field. This will return the most recent job.</div>
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
          <title>HOVER</title>
        </>
      ),
    },
  };
}
