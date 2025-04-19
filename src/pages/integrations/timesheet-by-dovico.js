import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Timesheet by Dovico"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/timesheet-by-dovico.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Timesheet by Dovico Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(61, 144, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">The best employee timesheet software for simple project time tracking. Track and approve hours worked on projects and tasks for billing and reporting.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Clients</div>
  <div>Triggers when a new Client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Employees</div>
  <div>Triggers when a new Employee is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Expense Entries</div>
  <div>Triggers when a new Expense Entry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Projects</div>
  <div>Triggers when a new Project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tasks</div>
  <div>Triggers when a new Task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time Entries</div>
  <div>Triggers when a new Time Entry is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Convert a Currency</div>
  <div>This trigger will Convert Between two Different Currencies</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Client</div>
  <div>This trigger will find a Client and return its appropriate data</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Currency</div>
  <div>This trigger will find a Currency and return its appropriate data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Employee</div>
  <div>This trigger will find a Employee and return its appropriate data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Expense Entry</div>
  <div>This trigger will find a Expense Entry and return its appropriate data</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Project</div>
  <div>This trigger will find a Project and return its appropriate data</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Task</div>
  <div>This trigger will find a currency and return its appropriate data</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Time Entry</div>
  <div>This trigger will find a Time Entry and return its appropriate data</div>
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
          <title>Timesheet by Dovico</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
