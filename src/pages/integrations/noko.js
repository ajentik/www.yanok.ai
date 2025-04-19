import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Noko"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/noko.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Noko Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(137, 182, 64, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Noko helps you manage your time and see the big picture: which days have you been working? How much, and on what? Is all that time billable time? What are your teammates and employees doing?</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Project Archived</div>
  <div>Triggers when a project is archived.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Entry</div>
  <div>Triggers when a time entry is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Expense</div>
  <div>Triggers when an expense is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Invoice</div>
  <div>Triggers when an invoice is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Entry</div>
  <div>Triggers when a new time entry is logged.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Expense</div>
  <div>Triggers when a new expense is logged.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is logged.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is logged.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Unarchived</div>
  <div>Triggers when a project is unarchived.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Unpaid</div>
  <div>Triggers when an invoice is marked as unpaid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entry Changed</div>
  <div>Triggers when a time entry is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Expense Changed</div>
  <div>Triggers when an expense is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Changed</div>
  <div>Triggers when any part of an invoice is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Changed</div>
  <div>Triggers when a time project is changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Entry</div>
  <div>Creates a new entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Expense</div>
  <div>Creates a new expense.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Invoice</div>
  <div>Finds an existing invoice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds an existing project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds an existing user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Finds an existing project.</div>
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
          <title>Noko</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
