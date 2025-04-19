import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="intelliHR"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/intellihr.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        intelliHR Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(67, 45, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">All-in-one people management system with configurable HR automation and analytics</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Job Remuneration Update Scheduled</div>
  <div>Triggers when a Job Remuneration update is scheduled via the job update screen.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Update Scheduled</div>
  <div>Triggers when a new Job update is scheduled via the job update screen.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Job</div>
  <div>Triggers when a new Job is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new person is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Training</div>
  <div>Triggers when a new training record is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Business Unit</div>
  <div>Creates a Business Unit</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Job</div>
  <div>Creates a new Job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Location</div>
  <div>Creates a new Location</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person</div>
  <div>Creates a new Person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Person Document</div>
  <div>Uploads a Person Document</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Training</div>
  <div>Creates a new Training</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new User.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Job End Date</div>
  <div>Finalises or adjusts the Job End Date.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Business Unit</div>
  <div>Updates a Business Unit</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Job</div>
  <div>Updates a Job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person</div>
  <div>Updates a Person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Updates a User</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Job</div>
  <div>Finds a Job by its job id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Finds a Person by their attributes.</div>
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
          <title>intelliHR</title>
        </>
      ),
    },
  };
}
