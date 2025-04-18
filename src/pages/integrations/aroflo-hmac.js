import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AroFlo"
      description="AroFlo is a job management system for trade/service based businesses."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/aroflo-hmac.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AroFlo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(65, 64, 82, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AroFlo is a job management system for trade/service based businesses.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">List Clients Updated</div>
  <div>Triggers when a client has been updated. Uses a new section of the AroFlo API to retrieve list of clients that have been updated since a set Date/Time. * Does not count towards API Usage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Tasks Updated</div>
  <div>Triggers when a task is updated. Uses a new section of the AroFlo API to retrieve list of tasks that have been updated since a set Date/Time. * Does not count towards API Usage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Timesheets</div>
  <div>Triggers when new timesheet entries are entered into AroFlo.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Task Note</div>
  <div>Add a note to a task in AroFlo</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Create a new client in AroFlo</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Create a new Task in AroFlo.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Create a new User in AroFlo.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Client</div>
  <div>Update a client in AroFlo with new data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Custom Payload</div>
  <div>Send a custom payload for AroFlo</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task Fields</div>
  <div>Update certain task fields</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task Status</div>
  <div>Update a task status and substatus</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Asset</div>
  <div>Find an asset by assetid,category,assetname,ordercode,customerid or serialnumber</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Business Unit</div>
  <div>Search for a Business Unit by name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client</div>
  <div>Search for a client based on the Company/Reference Name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Schedule</div>
  <div>Find a Schedule in AroFlo by several fields</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Find a task in AroFlo</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Timesheet Group</div>
  <div>Return combined data for a Timesheet grouping e.g. start date time, finish date time, total hours, start/finish/hrs per day as an array</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Lookup a user in AroFlo.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Client</div>
  <div>Search for a client based on the Company/Reference Name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Task</div>
  <div>Find a task in AroFlo</div>
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
          <title>AroFlo</title>
          <meta name="description" content="AroFlo is a job management system for trade/service based businesses." />
        </>
      ),
    },
  };
}
