import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="JobTread"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/jobtread.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        JobTread Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 86, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">JobTread is construction estimating & project management software that will help you keep your budget and jobs on track.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Customer Contact Created</div>
  <div>Triggers when a contact is created for a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Created</div>
  <div>Triggers when a customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Updated</div>
  <div>Triggers when a customer is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Created</div>
  <div>Triggers when a document is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Updated</div>
  <div>Triggers when a document is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">File Created</div>
  <div>Triggers when a file is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Created</div>
  <div>Triggers when a job is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Updated</div>
  <div>Triggers when a job is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Created</div>
  <div>Triggers when a task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Updated</div>
  <div>Triggers when a task is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Vendor Contact Created</div>
  <div>Triggers when a contact is created for a vendor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Vendor Created</div>
  <div>Triggers when a vendor is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Vendor Updated</div>
  <div>Triggers when a vendor is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assign Access</div>
  <div>Give a user direct access to a JobTread record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Comment</div>
  <div>Create a comment on a JobTread item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Create a new customer including optional contacts, locations, and jobs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer Contact</div>
  <div>Create a new contact for a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Job</div>
  <div>Create a new job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Location</div>
  <div>Create a new location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Create a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Vendor</div>
  <div>Create a new vendor including optional contacts, locations, and jobs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Vendor Contact</div>
  <div>Create a new contact for a vendor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Update an existing customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Job</div>
  <div>Update an existing job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Update an existing task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Vendor</div>
  <div>Update an existing vendor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Files</div>
  <div>Upload files to a JobTread item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Customer</div>
  <div>Search for a customer by name or custom field value</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Job</div>
  <div>Search for a job by number or custom field value</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Location</div>
  <div>Search for a location by name or custom field value</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Membership</div>
  <div>Search for a membership by user name or email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Vendor</div>
  <div>Search for a vendor by name or custom field value</div>
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
          <title>JobTread</title>
        </>
      ),
    },
  };
}
