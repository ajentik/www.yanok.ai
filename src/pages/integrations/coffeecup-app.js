import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CoffeeCup App"
      description={`Coffeecup is an extension for your product management software that supercharges your workflow with budget, cost- and team capacity management and billing.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/coffeecup-app.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CoffeeCup App Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(2, 68, 227, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Coffeecup is an extension for your product management software that supercharges your workflow with budget, cost- and team capacity management and billing.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Time Entry</div>
  <div>Triggers when a user creates a new time entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Client</div>
  <div>Triggers when a client is updated or created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Project</div>
  <div>Triggers when a project is updated or created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Time Entry</div>
  <div>Triggers when a user updates or creates a time entry.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Absence</div>
  <div>Creates an absence.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Client</div>
  <div>Creates or updates a client and a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Creates or Updates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Project</div>
  <div>Creates or updates a Project, depending on if a projectId is included</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Absence Type</div>
  <div>Finds an absence type</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client</div>
  <div>Finds a client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds a Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Finds a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds a User.</div>
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
          <title>CoffeeCup App</title>
          <meta name="description" content={`Coffeecup is an extension for your product management software that supercharges your workflow with budget, cost- and team capacity management and billing.`} />
        </>
      ),
    },
  };
}
