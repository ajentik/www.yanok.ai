import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Kelloo"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/kelloo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Kelloo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(253, 97, 31, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Kelloo is a resource planning and portfolio management platform. Plan, forecast and deliver smarter. We help you get the most from your projects and people.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Creates or Updates a Project</div>
  <div>Creates or updates a Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Creates or Updates a Resource</div>
  <div>Creates or updates a Resource</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Creates or Updates a Sprint</div>
  <div>Creates or updates a Sprint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Creates or Updates a Work Item</div>
  <div>Creates or updates a Work Item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Creates or Updates a Segment</div>
  <div>Creates or updates a Segment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Project by ID</div>
  <div>Finds a project by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Project by Name</div>
  <div>Finds a project by Name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Resource by Email</div>
  <div>Find a resource by email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Resource by ID</div>
  <div>Finds a resource by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Role by Name</div>
  <div>Finds a role by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Role by ID</div>
  <div>Finds a role by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Scenario by ID</div>
  <div>Finds a scenario by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Scenario by Name</div>
  <div>Finds a scenario by Name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Sprint by Name</div>
  <div>Finds a sprint by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Team by Name</div>
  <div>Finds a team by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Team by ID</div>
  <div>Finds a team by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a User by Email</div>
  <div>Find a user by email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Work Item by External ID</div>
  <div>Finds a work item by External ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Work Item by Work ID</div>
  <div>Finds a work item by Work ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Finds a Work Item Segment by Work ID and Start Date</div>
  <div>Finds a work item segment by work ID and start date</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User Email</div>
  <div>Gets the Logged On User Email</div>
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
          <title>Kelloo</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
