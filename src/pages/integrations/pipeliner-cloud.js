import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pipeliner Cloud"
      description="Next generation sales CRM software designed to empower sales teams and grow profitable customer relationships."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pipeliner-cloud.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pipeliner Cloud Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 88, 149, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Next generation sales CRM software designed to empower sales teams and grow profitable customer relationships.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggers when a new Account is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Appointment</div>
  <div>Triggers when a new Appointment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new Contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new Lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when a new Opportunity is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new Task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Account</div>
  <div>Triggers when an Account is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Appointment</div>
  <div>Triggers when an Appointment is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when a Contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Lead</div>
  <div>Triggers when a Lead is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Opportunity</div>
  <div>Triggers when an Opportunity is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Task</div>
  <div>Triggers when a Task is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Create a new Account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Appointment</div>
  <div>Create a new Appointment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Create a new Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Create a new Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity</div>
  <div>Create a new Opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Create a new Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Account</div>
  <div>Update an existing Account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Appointment</div>
  <div>Update an existing Appointment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update an existing Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Update an existing Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity</div>
  <div>Update an existing Opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Update an existing Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Account</div>
  <div>Find an existing Account. Optionally, create one if Account is not found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Appointment</div>
  <div>Find an existing Appointment. Optionally, create one if Appointment is not found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Owner</div>
  <div>Find an existing Owner.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find an existing Contact. Optionally, create one if Contact is not found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead</div>
  <div>Find an existing Lead. Optionally, create one if Lead is not found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Opportunity</div>
  <div>Find an existing Opportunity. Optionally, create one if Opportunity is not found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Find an existing Task. Optionally, create one if Task is not found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Account</div>
  <div>this is the description.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Appointment</div>
  <div>this is the description.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Contact</div>
  <div>this is the description.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Lead</div>
  <div>this is the description.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Opportunity</div>
  <div>this is the description.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Task</div>
  <div>this is the description.</div>
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
          <title>Pipeliner Cloud</title>
          <meta name="description" content="Next generation sales CRM software designed to empower sales teams and grow profitable customer relationships." />
        </>
      ),
    },
  };
}
