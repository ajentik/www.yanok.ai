import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="QPage"
      description="QPage is a one-stop recruiting solution offering AI-powered tools and Analytics including content generation in JD, Emails and Interview questions, Job and Resume analytics, Psychometric assessments, Cohorts, AI sourcing, Sequences, Workflow automation and more."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/qpage.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        QPage Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">QPage is a one-stop recruiting solution offering AI-powered tools and Analytics including content generation in JD, Emails and Interview questions, Job and Resume analytics, Psychometric assessments, Cohorts, AI sourcing, Sequences, Workflow automation and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Applied for a Job Opening</div>
  <div>Triggers when a new candidate applies for a job opening.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Moved to a Step in Job Pipeline</div>
  <div>Triggers when a candidate has been moved to a step in the job pipeline.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Rejected</div>
  <div>Triggers when a candidate has been rejected in the job pipeline.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Published</div>
  <div>Triggers when a job has been published.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Unpublished</div>
  <div>Triggers when a job has been unpublished.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Candidate Added to a Job</div>
  <div>Triggers when a new candidate is added to a job pipeline.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Moved to a Step in Cohort</div>
  <div>Triggers when a contact has been moved to a step in the cohort.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Moved to a Step in Sequence</div>
  <div>Triggers when a contact has been moved to another step in the sequence.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Candidate to Pipeline</div>
  <div>Add candidates to a job pipeline</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to Cohort</div>
  <div>Add contacts to cohort</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to Sequence</div>
  <div>Add contacts to sequence</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Create a contact in the contact pool</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Job</div>
  <div>Creates a job vacancy</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find a contact in the contact pool</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Publish a Job Pipeline</div>
  <div>Publish a job pipeline.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Action on Candidate Evaluation</div>
  <div>Create an action</div>
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
          <title>QPage</title>
          <meta name="description" content="QPage is a one-stop recruiting solution offering AI-powered tools and Analytics including content generation in JD, Emails and Interview questions, Job and Resume analytics, Psychometric assessments, Cohorts, AI sourcing, Sequences, Workflow automation and more." />
        </>
      ),
    },
  };
}
