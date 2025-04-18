import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Recruitee"
      description="Recruitee is an all-in-one hiring platform for teams of all sizes, that includes employer branding, job promoting, talent sourcing, and applicant tracking."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/recruitee.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Recruitee Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(25, 153, 227, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Recruitee is an all-in-one hiring platform for teams of all sizes, that includes employer branding, job promoting, talent sourcing, and applicant tracking.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Applied for a Job Opening</div>
  <div>Triggers when a candidate applies for a job opening.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Assigned to a Job Opening/Talent Pool</div>
  <div>Triggers when a candidate is assigned to a job opening or a talent pool.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Completed Questionnaire</div>
  <div>Triggers when a candidate has completed questionnaire.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Disqualified</div>
  <div>Triggers when a candidate has been disqualified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Moved to Stage</div>
  <div>Triggers when a candidate has been proceeded to a stage (does not trigger when a candidate enters the initial stage).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Requalified</div>
  <div>Triggers when a candidate has been requalified.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Published</div>
  <div>Triggers when job has been published.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Unpublished</div>
  <div>Triggers when job has been unpublished.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Candidate</div>
  <div>Triggers when a new candidate is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Completed</div>
  <div>Triggers when a task has been completed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Note to Candidate</div>
  <div>Adds a note to candidate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note to Job Opening/Talent Pool</div>
  <div>Adds a note to a job opening or a talent pool.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags to Candidate</div>
  <div>Adds tags to a candidate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign Candidate to Job Opening/Talent Pool</div>
  <div>Assigns a candidate to a job opening or talent pool.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Candidate</div>
  <div>Creates a candidate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Job Opening</div>
  <div>Creates a job opening.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proceed Candidate</div>
  <div>Proceeds a candidate to a stage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Talent Pool</div>
  <div>Creates a talent pool.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Candidate</div>
  <div>Updates a candidate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Updates a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Candidate</div>
  <div>Finds a candidate by name or email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Job Opening</div>
  <div>Finds a job opening by title.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Candidate Stage</div>
  <div>Finds a candidate stage in an offer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Talent Pool</div>
  <div>Finds a talent pool by title.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create candidate</div>
  <div>Finds a candidate by name or email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create job</div>
  <div>Finds a job opening by title.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create talent pool</div>
  <div>Finds a talent pool by title.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create task</div>
  <div>Finds a task.</div>
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
          <title>Recruitee</title>
          <meta name="description" content="Recruitee is an all-in-one hiring platform for teams of all sizes, that includes employer branding, job promoting, talent sourcing, and applicant tracking." />
        </>
      ),
    },
  };
}
