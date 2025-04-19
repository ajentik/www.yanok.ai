import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CATS"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/cats.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CATS Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(75, 43, 110, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">CATS is an applicant tracking system. Manage the entire tracking process from posting jobs to leading job boards and social networks to generating customized reports. Collect applications with the hosted career portal and find the right candidates with searching capabilities.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when an activity is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Candidate</div>
  <div>Triggers when a candidate is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Job</div>
  <div>Triggers when a job is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Pipeline</div>
  <div>Triggers when a candidate is added to a job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Company Status Changed</div>
  <div>Triggers when a company\'s status is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Status Changed</div>
  <div>Triggers when a contact\'s status is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Status Changed</div>
  <div>Triggers when a job\'s status is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Updated</div>
  <div>Triggers when a candidate is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Company Updated</div>
  <div>Triggers when a company is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when a contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pipeline Updated</div>
  <div>Triggers when a candidates status for a job is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Updated</div>
  <div>Triggers when a user is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a Candidate</div>
  <div>Adds a new candidate in CATS.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Company</div>
  <div>Adds a new company in CATS.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Contact</div>
  <div>Adds a new contact in CATS.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Job</div>
  <div>Adds a new job in CATS.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Candidate to Pipeline</div>
  <div>Add a candidate to a job pipeline.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Task</div>
  <div>Adds a new task in CATS.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Candidate</div>
  <div>Search for a candidate by candidate ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Company</div>
  <div>Search for a company by company ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact</div>
  <div>Search for a contact by contact ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Job</div>
  <div>Search for a job by job ID.</div>
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
          <title>CATS</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
