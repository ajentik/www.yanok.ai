import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Onfleet"
      description={`Onfleet transforms cumbersome last-mile logistics into delightful delivery management. Intuitive smartphone apps, powerful web dashboard and automatic customer notifications handle the heavy lifting so you can focus on your customer.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/onfleet.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Onfleet Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(170, 129, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Onfleet transforms cumbersome last-mile logistics into delightful delivery management. Intuitive smartphone apps, powerful web dashboard and automatic customer notifications handle the heavy lifting so you can focus on your customer.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">SMS Recipient Response Missed</div>
  <div>Triggers when an Onfleet recipient responds to a notification via SMS, but the organization is unable to handle it due to the task being marked as complete.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Arrival</div>
  <div>Triggers when a driver is arriving, at or closer than threshold value provided, in meters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Assigned</div>
  <div>Triggers when an Onfleet task is assigned to a driver or a team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Cloned</div>
  <div>Triggers when an Onfleet task is cloned via the dashboard or the API. Note that the TaskCreated trigger will not fire when a task is simply cloned.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Complete</div>
  <div>Triggers when an Onfleet task is completed by a driver.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Created</div>
  <div>Triggers when an Onfleet task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Delayed</div>
  <div>Triggers when an Onfleet task has a delay time greater than or equal to a user-defined threshold, in seconds.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Deleted</div>
  <div>Triggers when an Onfleet task is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task ETA</div>
  <div>Triggers when the Onfleet task ETA is less than or equal to a user-defined threshold.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Failed</div>
  <div>Triggers when an Onfleet task is completed with a failure.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Started</div>
  <div>Triggers when an Onfleet task is started.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Unassigned</div>
  <div>Triggers when an Onfleet task is unassigned from a driver or a team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Updated</div>
  <div>Triggers when an Onfleet task is updated, including assignment, feedback, and attachment (photo, signature) changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Worker Duty</div>
  <div>Triggers when a driver (worker) changes status (0 for off-duty, 1 for on-duty).</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a pickup or dropoff task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Linked Pickup & Dropoff Tasks</div>
  <div>Creates a linked pickup and dropoff task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task (Template Use)</div>
  <div>Creates a single task. Used for simple zap templates only.</div>
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
          <title>Onfleet</title>
          <meta name="description" content={`Onfleet transforms cumbersome last-mile logistics into delightful delivery management. Intuitive smartphone apps, powerful web dashboard and automatic customer notifications handle the heavy lifting so you can focus on your customer.`} />
        </>
      ),
    },
  };
}
