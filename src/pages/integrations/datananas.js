import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Datananas"
      description={`Datananas is a Lead Relationship Management SaaS-based platform to send targeted, personalized and automatized emails scenarios to your Leads.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/datananas.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Datananas Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(29, 45, 104, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Datananas is a Lead Relationship Management SaaS-based platform to send targeted, personalized and automatized emails scenarios to your Leads.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Click</div>
  <div>Triggers when a contact clicks a link in an email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Reply</div>
  <div>Triggers when a contact replies to a message.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Note Created</div>
  <div>Triggers when a note is created by a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Open</div>
  <div>Triggers when a contact opens an email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Stage</div>
  <div>Triggers when the stage of a contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact State</div>
  <div>Triggers when the state of a contact in a sequence is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Step Reached</div>
  <div>Triggers when a sequence step has been done</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Completed</div>
  <div>Triggered when a task is completed by a user</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Blacklist Email/Domain</div>
  <div>Add an email or domain to the blacklist.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Create a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create List</div>
  <div>Create a new list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Engage Contact</div>
  <div>Engage a contact in a sequence</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pause Contact</div>
  <div>Pause a contact in a sequence</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unpause Contact</div>
  <div>Unpause a contact in a sequence</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Contact From Sequence</div>
  <div>Unsubscribe a contact from a sequence.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Contact From All Sequences</div>
  <div>Unsubscribe a contact from all sequences.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact by Email</div>
  <div>Find a contact by email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Email From Contact Data</div>
  <div>Find an email address from the name and the company name of a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create contact</div>
  <div>Creates a new contact if a contact with the same email does not exists yet.</div>
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
          <title>Datananas</title>
          <meta name="description" content={`Datananas is a Lead Relationship Management SaaS-based platform to send targeted, personalized and automatized emails scenarios to your Leads.`} />
        </>
      ),
    },
  };
}
