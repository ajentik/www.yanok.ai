import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="LiquidPlanner Classic"
      description="LiquidPlanner Classic, online project management with predictive scheduling that updates automatically when things change."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/liquid-planner-classic.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        LiquidPlanner Classic Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 106, 152, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">LiquidPlanner Classic, online project management with predictive scheduling that updates automatically when things change.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New or Changed Client</div>
  <div>This trigger will fire when a task is created or updated in your workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Changed Comment</div>
  <div>A comment has been created or updated in your workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Changed Document</div>
  <div>A document has been created or updated in your workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Changed Package</div>
  <div>Triggered when a package is created or updated in LP.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Changed Project</div>
  <div>A project has been created or updated in your workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Changed Task</div>
  <div>A new task has been created in your workspace!</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Trigger Accept Timesheet</div>
  <div>Accept a specific timesheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Clear Timer</div>
  <div>Clear the timer for a specific item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Create a new activity for the workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Checklist Item for a Task</div>
  <div>Create a checklist item for a specific task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a Comment to an Item</div>
  <div>Add a comment to an item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Dependency</div>
  <div>Create a Dependency between two items.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create an Event</div>
  <div>Create a full day event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Folder</div>
  <div>Create a new folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Link for an Item</div>
  <div>Add a link to an item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Milestone</div>
  <div>Create a new milestone.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Note for an Item</div>
  <div>Add a note to the item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Package</div>
  <div>Create a new package.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Partial Day Event</div>
  <div>Create a partial day event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Project</div>
  <div>Create a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Task</div>
  <div>Create a new task in Liquid Planner.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create an Estimate for a Task</div>
  <div>Estimate a specific task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Item Move After Command</div>
  <div>Move an item after another.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Item Move Before Command</div>
  <div>Move an item before another.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Start Timer</div>
  <div>Start a timer for a specific item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Stop Timer</div>
  <div>Stop a timer for a specific item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Trigger Submit Timesheet</div>
  <div>Submit a specific timesheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Track Time</div>
  <div>Update your estimate, track hours worked, and add a comment and/or note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Track Time via a Timer</div>
  <div>Enter hours worked from a timer, update your estimate, add a comment, and restart the timer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Trigger Un-Accept Timesheet</div>
  <div>Un-accept a specific timesheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Trigger Un-Submit Timesheet</div>
  <div>Un-submit a specific timesheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Checklist Item</div>
  <div>Update a checklist item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Comment</div>
  <div>Change a comment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update an Event</div>
  <div>Update an event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Link</div>
  <div>Update a specific link for an item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Milestone</div>
  <div>Update a specific milestone.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Partial Day Event</div>
  <div>Update a partial day event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Task</div>
  <div>Update an existing task item.</div>
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
          <title>LiquidPlanner Classic</title>
          <meta name="description" content="LiquidPlanner Classic, online project management with predictive scheduling that updates automatically when things change." />
        </>
      ),
    },
  };
}
