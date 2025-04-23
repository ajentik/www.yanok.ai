import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Factorial"
      description={`Factorial is an HR platform for SMEs.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/factorial.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Factorial Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(124, 115, 230, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Factorial is an HR platform for SMEs.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Ats - Application Created</div>
  <div>Triggers when a new application is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time - Attendance Clock In</div>
  <div>Triggers when a user clocks in within Factorial</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time - Attendance Clock Out</div>
  <div>Triggers when a user clocks out within Factorial</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payroll - Contract Version Created</div>
  <div>Triggers when a new contract version is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Document Created</div>
  <div>Triggers when a new document is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - New Employee</div>
  <div>Triggers when a new employee is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - New Employee Invited</div>
  <div>Triggers when a new employee is created AND invited.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Employee Terminated</div>
  <div>Triggers when an employee is terminated in Factorial</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Employee Unterminated</div>
  <div>Triggers when an employee is unterminated in Factorial</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Employee Updated</div>
  <div>Triggers when a protected personal information of employee is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time - Fetch Company Leaves</div>
  <div>Fetches leaves as a trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time - Fetch Company Leave Types</div>
  <div>Fetches leave types as a trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Fetch Documents</div>
  <div>Fetches documents as a trigger</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Fetch Employees</div>
  <div>Fetches employees as a trigger. Used for actions. NOT PUBLIC</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Fetch Folders</div>
  <div>Fetches folders as a trigger</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Fetch Holidays</div>
  <div>Fetches holidays as a trigger</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Fetch Locations</div>
  <div>Fetches locations as a trigger</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time - Fetch Shifts</div>
  <div>Fetches shifts as a trigger</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Fetch Tasks</div>
  <div>Fetches folders as a trigger</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Fetch Teams</div>
  <div>Fetches teams as a trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ats - Job Posting Created</div>
  <div>Triggers when a new Ats job posting is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ats - Job Posting Deleted</div>
  <div>Triggers when an Ats job posting is deleted</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ats - Job Posting Updated</div>
  <div>Triggers when an Ats Job posting is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Task Created</div>
  <div>Triggers when a new task is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time - Leave Approved</div>
  <div>Triggers when a Timeoff Leave is explicitly approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time - Leave Created</div>
  <div>Triggers when a new leave is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time - Leave Updated</div>
  <div>Triggers when a Timeoff Leave suffers any changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Translate Email to Id</div>
  <div>Triggers when an email id given returns employee information</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Attendance - Clock In</div>
  <div>Clocks In an employee attendance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attendance - Clock Out</div>
  <div>Clocks Out an employee attendance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payroll - Create Contract Version</div>
  <div>Creates Contract Version</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Create Employee</div>
  <div>Creates an Employee</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Create Folder</div>
  <div>Creates a Folder</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time - Create Leave</div>
  <div>Creates a Leave</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time - Create Shift</div>
  <div>Creates a Shift</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Create Task</div>
  <div>Creates a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Create Team</div>
  <div>Creates a Team</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time - Delete Shift</div>
  <div>Deletes a Shift</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payroll - Modify Contract Version</div>
  <div>Modifies an existing contract version</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Modify Document</div>
  <div>Modifies an existing Document</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Modify Employee</div>
  <div>Modifies an existing employee</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Modify Folder</div>
  <div>Modifies an existing Folder</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time - Modify Shift Location</div>
  <div>Modifies the location of an existing shift</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time - Modify Shift Notes</div>
  <div>Modifies the notes of an existing shift</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Modify Team</div>
  <div>Modifies an existing team</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Resolve Task</div>
  <div>Resolves a task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Terminate Employee</div>
  <div>Terminates an employee</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Modify Task</div>
  <div>Modifies a task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payroll - Find Contract Version</div>
  <div>Finds a Contract Version</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Find Document</div>
  <div>Finds a Document</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Find Employee</div>
  <div>Finds an employee</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Find Folder</div>
  <div>Finds a Folder</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Find Holiday</div>
  <div>Finds a Holiday</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Find Location</div>
  <div>Finds a Location</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time - Find Shift</div>
  <div>Finds a Shift by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Find Task</div>
  <div>Finds a Task by id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Core - Find Team</div>
  <div>Finds a Team</div>
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
          <title>Factorial</title>
          <meta name="description" content={`Factorial is an HR platform for SMEs.`} />
        </>
      ),
    },
  };
}
