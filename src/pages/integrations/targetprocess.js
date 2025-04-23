import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Targetprocess"
      description={`Targetprocess is a Visual Management Software.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/targetprocess.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Targetprocess Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(3, 138, 183, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Targetprocess is a Visual Management Software.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Bug</div>
  <div>Triggers when a new Bug is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Build</div>
  <div>Triggers when a new Build is added by user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when a new Comment is added to some Entity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Feature</div>
  <div>Triggers when new Feature is added by user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Iteration</div>
  <div>Triggers when a new Iteration is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Release</div>
  <div>Triggers when a new Release is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Request</div>
  <div>Triggers when a new Request is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new Task is added by user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Team Iteration</div>
  <div>Triggers when a new Team Iteration is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Time</div>
  <div>Triggers when a new Time record is added to some Entity by User.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User Story</div>
  <div>Triggers when a new User Story is added.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Requester to Request</div>
  <div>Create new User-Requester and attach her to existing Request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change State</div>
  <div>Change state of existing Entity. .</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Bug</div>
  <div>Creates a new Bug (defect, error, flaw, mistake, failure or fault in a computer program). Can relate to User Story. Can be assigned to Release and Iteration.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Build</div>
  <div>Creates a Build entity in a project. Bugs and source code Revisions can be assigned to Build.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Comment</div>
  <div>Appends a new Comment to existing Entity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Feature</div>
  <div>Create a Feature, a high-level requirement which contains User Stories.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Request</div>
  <div>Creates a Request, which can represent idea, issue or question from users.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a Task, a small chunk of work, typically less than 16 hours. Task must relate to User Story.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Time</div>
  <div>Create a Time record by User for specific Entity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User Story</div>
  <div>Creates a User Story, a statement of end user requirements in a couple of sentences. User Story can be assigned to Iteration or Release.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Entity</div>
  <div>Deletes an Entity, which follows selected criteria.</div>
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
          <title>Targetprocess</title>
          <meta name="description" content={`Targetprocess is a Visual Management Software.`} />
        </>
      ),
    },
  };
}
