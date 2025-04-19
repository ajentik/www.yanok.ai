import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Buddy Punch"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/buddy-punch.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Buddy Punch Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(62, 63, 84, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Buddy Punch is an employee time tracking and scheduling app that lets your employees track their hours and helps streamline scheduling, time off, and payroll.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Employee Created</div>
  <div>Triggers when a new employee is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Employee Punched In</div>
  <div>Triggered when an employee punches in.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Employee Punched Out</div>
  <div>Triggered when an employee punches out.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Punch in Changed</div>
  <div>Triggered when a punch in has been changed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Punch Out Changed</div>
  <div>Triggered when a punch out has been changed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Employee Updated</div>
  <div>Triggers when an existing employee is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assign Employee to Department Code</div>
  <div>Assigns an employee to a department code.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign Employee to Location</div>
  <div>Assigns an employee to a location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign Employee to Position</div>
  <div>Assigns an employee to a position.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Department Code</div>
  <div>Creates a new department code.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Employee</div>
  <div>Creates a new employee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Location</div>
  <div>Creates a new location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Position</div>
  <div>Creates a new position.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Punch In</div>
  <div>Perform a punch-in for yourself or a specified employee you have control over.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Punch Out</div>
  <div>Perform a punch-out for yourself or a specified employee you have control over.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Employee</div>
  <div>Updates an existing employee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Employee</div>
  <div>Finds an existing employee.</div>
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
          <title>Buddy Punch</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
