import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Humanity"
      description="TCP Software's dynamic scheduling tool, Humanity, simplifies day-to-day employee management processes. With Humanity Scheduling, your organization can easily and accurately create error-free, dynamic schedules for your staff by location, department, position, and/or skills—with real-time availability conflict checking."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/humanity.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Humanity Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 73, 137, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">TCP Software\'s dynamic scheduling tool, Humanity, simplifies day-to-day employee management processes. With Humanity Scheduling, your organization can easily and accurately create error-free, dynamic schedules for your staff by location, department, position, and/or skills—with real-time availability conflict checking.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Approved Leave Requests</div>
  <div>Triggers when a new Leave Request is approved or an existing approved Leave Request is updated with new information.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New/Updated Employees</div>
  <div>Triggers when a new Employee is added or an existing Employee is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New/Updated Time Entries</div>
  <div>Triggers when a new Time Entry is created or when an existing Time Entry is updated within the last 15 minutes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Published Shifts</div>
  <div>Triggers when a new Shift is published or an existing published Shift is modified. This applies to Shifts with or without employees and returns results grouped by Shift.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Published Shifts by Employee</div>
  <div>Triggers when a new Shift is published or an existing published Shift is modified. This only applies to Shifts with employees assigned, and returns results grouped by Employee.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assign Leave Type to Employee</div>
  <div>Assigns a Leave Type to an Employee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign Positions to Employee</div>
  <div>Assigns one or many Positions to an Employee. Optionally also assigns a Position-specific pay rate if only one Position is assigned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign Skills to Employee</div>
  <div>Assigns an existing Skill to an Employee or creates a new Skill to assign to an Employee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Driver Data Point</div>
  <div>Creates a new Demand Driver Data Point or updates an existing Demand Driver Data Point based on the provided date/time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Employee</div>
  <div>Creates a new Employee or updates an existing Employee using either a user-defined id or Humanity\'s native record id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Leave Request</div>
  <div>Creates a new Leave Request or updates and existing Leave Request using either a user-defined id or Humanity\'s native record id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Leave Type</div>
  <div>Creates a new Leave Type or updates a existing Leave Type using Humanity\'s native record id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Location</div>
  <div>Creates a new Location or updates an existing Location using either a user-defined id or Humanity\'s native record id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Position</div>
  <div>Creates a new Position or updates an existing Position using either a user-defined id or Humanity\'s native record id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Shift</div>
  <div>Creates a new Shift and optionally assigns Employees to the newly created Shift.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Skill</div>
  <div>Creates a new Skill or updates a existing Skill using Humanity\'s native record id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Time Entry</div>
  <div>Creates a new Time Entry or updates and existing Time Entry using either a user-defined id or Humanity\'s native record id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Unavailability Slot</div>
  <div>Creates a new Unavailability Slot for an Employee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Manage Employee Conflict Settings</div>
  <div>Update an existing Employee\'s Conflict Settings, as well as, the Auto-Approve Shift Request Setting.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Manage Scheduler Permissions</div>
  <div>Updates a user\'s permissions to schedule positions, and optionally updates a user\'s account type.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Employee</div>
  <div>Finds an Employee using either a user-defined id or Humanity\'s native record id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Position</div>
  <div>Finds a Position using either a user-defined id or Humanity\'s native record id</div>
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
          <title>Humanity</title>
          <meta name="description" content="TCP Software's dynamic scheduling tool, Humanity, simplifies day-to-day employee management processes. With Humanity Scheduling, your organization can easily and accurately create error-free, dynamic schedules for your staff by location, department, position, and/or skills—with real-time availability conflict checking." />
        </>
      ),
    },
  };
}
