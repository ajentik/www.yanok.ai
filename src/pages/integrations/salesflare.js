import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Salesflare"
      description={`Salesflare is an intelligent CRM startups and small businesses love to use. It's a zero-input sales pipeline tool that thinks and works for its user, not the other way around.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/salesflare.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Salesflare Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(60, 182, 227, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Salesflare is an intelligent CRM startups and small businesses love to use. It\'s a zero-input sales pipeline tool that thinks and works for its user, not the other way around.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggers when a new account has been added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when a new opportunity has arrived.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Workflow Event</div>
  <div>Triggers when an event happens to your workflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Workflow Step Event</div>
  <div>Triggers when an event happens to your workflow step.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to Account</div>
  <div>Add a contact to an account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add User to Account</div>
  <div>Add a user to an account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Creates a new account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Call</div>
  <div>Creates a new call.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Meeting</div>
  <div>Creates a new meeting.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Internal Note</div>
  <div>Creates a new internal note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity</div>
  <div>Creates a new opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Contact From Workflow</div>
  <div>Remove a contact from a certain workflow</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Account</div>
  <div>Update an existing account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity</div>
  <div>Update an existing opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Account</div>
  <div>Find an account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Opportunity</div>
  <div>Find an opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Find a person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Pipeline Stage</div>
  <div>Find a pipeline stage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Find a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Workflow</div>
  <div>Finds a Workflow</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Account</div>
  <div>Find or Create Account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Find or Create Contact</div>
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
          <title>Salesflare</title>
          <meta name="description" content={`Salesflare is an intelligent CRM startups and small businesses love to use. It's a zero-input sales pipeline tool that thinks and works for its user, not the other way around.`} />
        </>
      ),
    },
  };
}
