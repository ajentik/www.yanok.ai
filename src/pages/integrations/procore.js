import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Procore"
      description={`Procore is a construction project management platform built in the cloud.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/procore.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Procore Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(244, 126, 66, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Procore is a construction project management platform built in the cloud.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Change Event</div>
  <div>Triggers when a new Change Event is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company Vendor</div>
  <div>Trigger when a new company vendor is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Drawing</div>
  <div>Triggers when a new drawing is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Form</div>
  <div>Triggers when a new Form is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Photo</div>
  <div>Triggers when a new photo is uploaded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inspection</div>
  <div>Triggers when a new Inspection is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inspection Log</div>
  <div>Triggers when a new Inspection Log is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Instruction</div>
  <div>Triggers when a new Instruction is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Manpower Log</div>
  <div>Triggers when a new Manpower Log is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Meeting</div>
  <div>Triggers when a new Meeting is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Observation</div>
  <div>Triggers when a new Observation is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project Document</div>
  <div>Triggers when a new project file is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new Project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Updated</div>
  <div>Triggers when a project is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Punch Item</div>
  <div>Triggers when a new Punch Item is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New RFI</div>
  <div>Triggers when a new RFI is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Instruction</div>
  <div>Triggers when a new Instruction is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Submittal</div>
  <div>Triggers when a new submittal is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Submittal Updated</div>
  <div>Triggers when a Submittal is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new Task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Timecard Entries</div>
  <div>Triggers when a new timecard entry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Work Order Contract</div>
  <div>Triggers when a new Work Order Contract is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a Call Log</div>
  <div>Creates a new call log.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Change Event</div>
  <div>Creates a new change event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company Contact</div>
  <div>Creates a new company contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company Vendor</div>
  <div>Creates a new company vendor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Copy From Standard Cost Code List</div>
  <div>Copies all standard cost codes to project cost code list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project Cost Code</div>
  <div>Creates a new project cost code.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Daily Construction Report Log</div>
  <div>Creates a new daily construction report log.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document</div>
  <div>Creates a new document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document Folder</div>
  <div>Creates a new document folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Drawing</div>
  <div>Creates a new drawing.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Photo</div>
  <div>Uploads a new photo.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Inspection Checklist</div>
  <div>Creates a new inspection checklist.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Instruction</div>
  <div>Creates a new instruction.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Manpower Log</div>
  <div>Creates a new manpower log.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Observation</div>
  <div>Creates a new observation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Punch Item</div>
  <div>Creates a new punch item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Purchase Order</div>
  <div>Creates a new purchase order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create RFI</div>
  <div>Creates a new RFI.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Submittal</div>
  <div>Creates a new Submittal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sub Job</div>
  <div>Creates a new Sub Job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project Task Item</div>
  <div>Creates a new project task item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Manpower Log</div>
  <div>Updates a manpower log.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project Meeting</div>
  <div>Updates a project meeting.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project Submittal</div>
  <div>Updates a project Submittal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Work Order Contract</div>
  <div>Updates a work order contract.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Work Order Contract</div>
  <div>Creates a new work order contract.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Project Document</div>
  <div>Search for a project document by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Project Task</div>
  <div>Search for a project task by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Project Scheduled Task</div>
  <div>Search for a project scheduled task by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Submittal</div>
  <div>Search for a submittal by id.</div>
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
          <title>Procore</title>
          <meta name="description" content={`Procore is a construction project management platform built in the cloud.`} />
        </>
      ),
    },
  };
}
