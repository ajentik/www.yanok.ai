import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Kommo"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/kommo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Kommo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(18, 19, 41, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Kommo is a messaging-powered CRM that helps you engage with your customers on a whole new level. It\'s a versatile, cloud-based sales automation tool that enables you to manage leads and monitor your sales pipeline in only a few clicks.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Deleted</div>
  <div>Triggers when a task is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Responsible User Changed</div>
  <div>Triggers when lead responsible user is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Status Changed</div>
  <div>Triggers when lead status is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Company Updated</div>
  <div>Triggers when company is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Updated</div>
  <div>Triggers when lead is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Updated</div>
  <div>Triggers when task is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Updates a company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead With Contact</div>
  <div>Creates a new lead with contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Updates a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Link</div>
  <div>Create a link between related amoCRM profiles.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Creates a new note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Note</div>
  <div>Updates a note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Updates a task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Finds an existing company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead</div>
  <div>Finds an existing lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Linked Data</div>
  <div>Search for related amoCRM profiles of different types.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Note</div>
  <div>Finds an existing note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds an existing task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Company</div>
  <div>Find or Create Company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Find or Create Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Lead</div>
  <div>Find or Create Lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Note</div>
  <div>Find or Create Note</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Task</div>
  <div>Find or Create Task</div>
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
          <title>Kommo</title>
        </>
      ),
    },
  };
}
