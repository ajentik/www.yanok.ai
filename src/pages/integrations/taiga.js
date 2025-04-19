import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Taiga"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/taiga.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Taiga Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 138, 168, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Taiga is the project management tool for multi-functional agile teams</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">3.2 Changed Issue</div>
  <div>Triggers when an issue is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">3.2.1 Changed Issue Status</div>
  <div>Triggers when the status of an issue changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">3.1 New Issue</div>
  <div>Triggers when a new issue is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">3.3 Deleted Issue</div>
  <div>Triggers when an issue is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">2.2 Changed Task</div>
  <div>Triggers when a taks is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">2.2.1 Changed Task Status</div>
  <div>Triggers when the status of a task changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">2.1 New Task</div>
  <div>Triggers when a new task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">2.3 Deleted Task</div>
  <div>Triggers when a task is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">1.2 Changed User Story</div>
  <div>Triggers when an user story is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">1.2.1 Changed User Story Status</div>
  <div>Triggers when the status of a User Story changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">1.1 New User Story</div>
  <div>Triggers when a new user story is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">1.3 Deleted User Story</div>
  <div>Triggers when an user story is deleted.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">3.1 Create Issue</div>
  <div>Creates an issue</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">2.1 Create Task</div>
  <div>Creates a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">1.1 Create User Story</div>
  <div>Creates a user story.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">3.3 Delete Issue</div>
  <div>Deletes an Issue</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">2.3 Delete Task</div>
  <div>Deletes an existing Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">1.3 Delete User Story</div>
  <div>Deletes a User Story</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">3.2 Edit Issue</div>
  <div>This action edits an Issue</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">2.2 Edit Task</div>
  <div>Edits an existing Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">1.2 Edit User Story</div>
  <div>Edits a User Story</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">3.4 Read Issue</div>
  <div>Retrieves an Issue</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">2.4 Read Task</div>
  <div>Retrieves a Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">1.4 Read User Story</div>
  <div>Retrieves an User Story</div>
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
          <title>Taiga</title>
        </>
      ),
    },
  };
}
