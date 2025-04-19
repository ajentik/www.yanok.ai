import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TRAFFIT"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/traffit.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TRAFFIT Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(40, 98, 239, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Traffit is an ATS that lets you build talent pools and manage candidates, as well as boost collaboration with your team and Hiring Managers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Candidate in a Job</div>
  <div>Triggers when a new candidate appears in a Job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Added</div>
  <div>Triggers when a new candidate is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Deleted</div>
  <div>Triggers when a candidate is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Hired</div>
  <div>Triggers when a candidate is hired in a specific Job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Moved to Stage</div>
  <div>Triggers when a candidate is moved to another stage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Rejected</div>
  <div>Triggers when a candidate is rejected from a specific Job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">CRM Contact Person Added</div>
  <div>Triggers when a new CRM Contact Person is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">CRM Contact Person Updated</div>
  <div>Triggers when a CRM Contact Person is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Job Created</div>
  <div>Triggers when a new job is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Candidate Note</div>
  <div>Add a Note to a Candidate</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Candidate to a Job</div>
  <div>Assign a candidate to a job. Remember that the test actions are performed on your Traffit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Candidate</div>
  <div>Create a new candidate. Remember that the test actions are performed on your Traffit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create CRM Contact Person</div>
  <div>Create a new CRM Contact Person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update CRM Contact Person</div>
  <div>Update an existing CRM Contact Person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Candidate</div>
  <div>Search a Candidate by name or email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client</div>
  <div>Search a Client by ID.</div>
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
          <title>TRAFFIT</title>
        </>
      ),
    },
  };
}
