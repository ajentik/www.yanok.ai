import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Copper"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/copper.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Copper Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(33, 150, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Copper is a new kind of productivity CRM that\'s designed to do all your busywork, so you can focus on building long-lasting business relationships</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when a new activity is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new Company is created in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new Person is created in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when an Opportunity is created in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a Lead is created in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new Project is created in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new Task is created in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Company</div>
  <div>Triggers when a Person\'s Company is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact Type</div>
  <div>Triggers when a Person\'s Contact Type is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Person</div>
  <div>Triggers when a Person is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Opportunity</div>
  <div>Triggers when an Opportunity is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Opportunity Stage</div>
  <div>Triggers when an Opportunity\'s stage is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Opportunity Status</div>
  <div>Triggers when an Opportunity\'s status is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Lead Status</div>
  <div>Triggers when a Lead\'s status is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Lead</div>
  <div>Triggers when a Lead is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Project</div>
  <div>Triggers when a Project is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Task</div>
  <div>Triggers when a Task is changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Logs a new Activity on a Person, Company, Opportunity, or Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Associate to Project</div>
  <div>This Action allows you to relate an existing Project to and existing CRM object; both objects have to exist before you run this Action. This Action expects two ID\'s for input: the ID of the CRM record you want to relate to and the Project ID you want to relate it with. This Action was designed to be used in multi-step Zaps, where you already have a Project ID and an related record ID (e.g. a Person) from previous steps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Updates a Company depending on the match criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Company</div>
  <div>Creates or Updates a Company depending on the match criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new Company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person</div>
  <div>Updates a Person depending on the match criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Person</div>
  <div>Creates or Updates a Person depending on the match criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person</div>
  <div>Creates a new Person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Updates a Lead depending on the match criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Lead</div>
  <div>Creates or Updates a Lead depending on the match criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity by ID</div>
  <div>Updates an Opportunity based off of Opportunity ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Opportunity</div>
  <div>Updates an Opportunity based off of a match criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Opportunity</div>
  <div>Creates or Updates an Opportunity based off of a match criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity</div>
  <div>Creates a new Opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new Project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Updates a Project depending on the match criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Project</div>
  <div>Creates or Updates a Project depending on the match criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for an Activity</div>
  <div>Searches for an existing activity in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Company</div>
  <div>Searches for an existing company in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Person</div>
  <div>Searches for an existing person in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Opportunity</div>
  <div>Searches for an existing opportunity in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Lead</div>
  <div>Searches for an existing lead in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Project</div>
  <div>Searches for an existing project in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for an Activity (or create)</div>
  <div>Searches an existing activity in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Company (or create)</div>
  <div>Searches an existing company in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Person (or create)</div>
  <div>Searches an existing person in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Opportunity (or create)</div>
  <div>Searches an existing opportunity in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Lead (or create)</div>
  <div>Searches an existing lead in Copper.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Project (or create)</div>
  <div>Searches an existing project in Copper.</div>
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
          <title>Copper</title>
          <meta name="description" content={}/>s designed to do all your busywork, so you can focus on building long-lasting business relationships' />
        </>
      ),
    },
  };
}
