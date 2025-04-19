import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SiteFotos"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sitefotos.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SiteFotos Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 102, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SiteFotos is a simple photo-taking, project-tagging, site mapping, (even time-tracking), customer communication portal.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Building</div>
  <div>Triggers when a new Building is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new client is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contractor</div>
  <div>Triggers when a new Contractor is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Employee</div>
  <div>Triggers when a new employee is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Form</div>
  <div>Triggers when a form is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Building</div>
  <div>Creates a new Building</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a new client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contractor</div>
  <div>Creates a Contractor</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Employee</div>
  <div>Creates a new Employee</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Building</div>
  <div>delete a building</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Client</div>
  <div>Delete a Client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contractor</div>
  <div>Delete a Contractor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Employee</div>
  <div>Delete an employee.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Building</div>
  <div>Update a Building.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Client</div>
  <div>Update a Client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contractor</div>
  <div>Updates a Contractor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Employee</div>
  <div>Updates an employee.</div>
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
          <title>SiteFotos</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
