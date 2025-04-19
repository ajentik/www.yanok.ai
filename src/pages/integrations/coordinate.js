import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Coordinate"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/coordinate.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Coordinate Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(38, 41, 77, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Coordinate is a collaborative project management platform for you and your customers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Comment Added</div>
  <div>Triggers when a user adds a new comment or note to an object in Coordinate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Created</div>
  <div>Triggers when a new Customer is added in Coordinate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Updated</div>
  <div>Triggers when a Customer is updated in Coordinate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Goal Created</div>
  <div>Triggers when a new Goal is added to a Project in Coordinate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Goal Updated</div>
  <div>Triggers when a Goal\'s details are changed in Coordinate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Created</div>
  <div>Triggers when a new Project is added in Coordinate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Updated</div>
  <div>Triggers when Project details are updated in Coordinate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Created</div>
  <div>Triggers when a new task has been created in Coordinate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Group Created</div>
  <div>Triggers when a new Task Group is created in Coordinate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Group Updated</div>
  <div>Triggers when a Task Group is updated in Coordinate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Updated</div>
  <div>Triggers when Task details or status are updated in Coordinate.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Apply Playbook to Project</div>
  <div>Applies a Playbook</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Goal</div>
  <div>Creates a Goal on the Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Group</div>
  <div>Creates a Group on the Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Organization</div>
  <div>Creates an Organization</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Stakeholder</div>
  <div>Creates a Stakeholder inviting them to the Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a Task on a Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Project</div>
  <div>Gets a Project by Project ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Project by External ObjectID</div>
  <div>Gets a project by the External ObjectID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Updates a Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project Set Custom Field</div>
  <div>Updates a Project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Verify Project Doesn\'t Exist</div>
  <div>Verify Project Does Not Exist By ObjectID</div>
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
          <title>Coordinate</title>
        </>
      ),
    },
  };
}
