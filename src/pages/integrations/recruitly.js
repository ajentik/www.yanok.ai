import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Recruitly"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/recruitly.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Recruitly Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 82, 204, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Recruitly is a cloud-based recruitment platform for agency and independent recruiters, featuring customisable pipelines, built-in job posting and out-of-the-box integrations with the tools you already use and love.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Web Form Submitted</div>
  <div>Triggers when a Candidate Web Form is submitted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Shared</div>
  <div>Triggers when a Candidate is shared by the user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Share - CV Downloaded</div>
  <div>Triggers when a shared Candidate\'s CV is downloaded by the recipient.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Share - Info Requested</div>
  <div>Triggers when candidate info is requested via Candidate Share.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Share - Interview Requested</div>
  <div>Triggers when a client requests interview for shared CV.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Share - Viewed</div>
  <div>Triggers when a shared Candidate is viewed by the recipient.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Sequence Reply Received</div>
  <div>Triggers when a recipient replies for an email sent via Email Sequence.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Expired</div>
  <div>Triggers when a job has expired.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Pipeline Updated</div>
  <div>Triggers when a job pipeline has been updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List All Activity Types</div>
  <div>List all activity types from your Recruitly account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Candidate Created</div>
  <div>Triggers when a new Candidate is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company Created</div>
  <div>Triggers when a new company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Created</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Interview Scheduled</div>
  <div>Triggers when a new interview is schedule.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Advert Created</div>
  <div>Triggers when a new Job Advert is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Job Application</div>
  <div>Triggers when a new job application is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Job Created</div>
  <div>Triggers when a new Job is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead Created</div>
  <div>Triggers when a new lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity Created</div>
  <div>Triggers when a new opportunity is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Placement Created</div>
  <div>Triggers when a new Placement is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task Created</div>
  <div>Triggers when a new Task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opportunity Won</div>
  <div>Triggers when an Opportunity is won.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Portal Interview Requested</div>
  <div>Triggers when a client requests interview from client portal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Portal Candidate Rejected</div>
  <div>Triggers when a client rejects candidate from portal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Portal Candidate Shortlisted</div>
  <div>Triggers when a client shortlists candidate from portal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Closed</div>
  <div>Triggers when a Task is closed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Candidate</div>
  <div>Creates a new Candidate record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Create a new Company record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new Contact record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new Lead record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Add a note and assign it to any record in your database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity</div>
  <div>Creates a new Opportunity record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Job Application by ID</div>
  <div>Get a Job Application using the application ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Candidate by ID</div>
  <div>Find a Candidate by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Candidate Web Form by ID</div>
  <div>Finds a Candidate Web Form by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Company by ID</div>
  <div>Finds a Company by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Contact by ID</div>
  <div>Finds a contact by the given ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Job Advert by ID</div>
  <div>Finds a Job Adverts by the given ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Job by ID</div>
  <div>Finds a Job by the given ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Lead by ID</div>
  <div>Finds a Lead for the given ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Opportunity by ID</div>
  <div>Finds an Opportunity for the given ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Placement by ID</div>
  <div>Finds a Placement by the given ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Task by ID</div>
  <div>Finds a Task for the given ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User by Email Address</div>
  <div>Fetch User by Email Address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User by ID</div>
  <div>Find an User by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Any Record</div>
  <div>Find any record in your database using their name, email, phone, job title or company name.</div>
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
          <title>Recruitly</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
