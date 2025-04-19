import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="OfficeTimer"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/officetimer.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        OfficeTimer Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(99, 86, 203, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">OfficeTimer is an online office management software that helps office owners to track their employees timesheet, attendance, leave and payroll systems.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a New Client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Department</div>
  <div>Triggers when New Department is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when there\'s a New Project is Created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when New Task is Created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New TimeOff Request</div>
  <div>New TimeOff Request is Added to the system</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Timesheet Entry</div>
  <div>Triggers when a new TimeEntry is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Employee</div>
  <div>Triggers when a new User/ Employee is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Attendance</div>
  <div>Create a new Attendance Entry</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a New Client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Department</div>
  <div>Create a Department</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Employee</div>
  <div>Create a New Employee</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Create a Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Create a new Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create TimeOff</div>
  <div>Creates the TimeOff Request in OfficeTimer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Timesheet Entry</div>
  <div>Create a new Timesheet Entry</div>
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
          <title>OfficeTimer</title>
        </>
      ),
    },
  };
}
