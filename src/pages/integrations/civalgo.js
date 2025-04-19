import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Civalgo"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/civalgo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Civalgo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 162, 65, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Civalgo is a platform to operate your construction company which goal is to enhance productivity in the field with a powerful Operational Project Management Platform that links schedule to daily logs to provide an optimal workflow and past cost data.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Comment Event</div>
  <div>Triggers when a comment is created, updated, or deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Daily Log Event</div>
  <div>Triggers when a daily log is created, updated, or deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Employee Event</div>
  <div>Triggers when an employee is created, updated, or deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">File Event</div>
  <div>Triggers when a file is created, updated, or deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Event</div>
  <div>Triggers when a project is created, updated, or deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Event</div>
  <div>Triggers when a user is created, updated, or deleted.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Employee</div>
  <div>Creates a new employee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Daily Log by Id</div>
  <div>Finds a Daily Log by their Id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Daily Log by Status</div>
  <div>Finds a Daily Log by their Status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Daily Log by Team</div>
  <div>Finds a Daily Log by their Team Id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Daily Log by Team Leader Id</div>
  <div>Finds a Daily Log by their team leader Id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Employee by Id</div>
  <div>Finds a employee by their Id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Employee by Role Id</div>
  <div>Finds a employee by their role Id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Employee by Team Id</div>
  <div>Finds a Employee by their Id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Team by Id</div>
  <div>Finds a team by their Id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Team by Team Leader Id</div>
  <div>Finds a team by their Id.</div>
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
          <title>Civalgo</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
