import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Element451"
      description={`Element451 is a CRM for higher education that optimizes admissions marketing and enrollment management. Analytics, automation, and unparalleled ease of use are at its core.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/element451.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Element451 Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(254, 80, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Element451 is a CRM for higher education that optimizes admissions marketing and enrollment management. Analytics, automation, and unparalleled ease of use are at its core.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">User Updated</div>
  <div>Triggers when a user is updated in Element451. This will also be triggered when a new user is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Conversation</div>
  <div>Send a message from a user into the Conversations inbox. A new conversation will be created. Note: the user must exist in Element451 and have a profile email address that matches the incoming email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Register Attendee to Event</div>
  <div>Create a new Event Attendee for a selected event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Form Submission</div>
  <div>Create a new submission for a selected form. A new user is created or an existing user is updated based on their email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Task to User</div>
  <div>Add a new task and associate with an existing external user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update User</div>
  <div>Create or update an Element451 user based on an import template.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Activity to User</div>
  <div>Add a new activity to an existing user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note to User</div>
  <div>Add a new note to an existing user.</div>
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
          <title>Element451</title>
          <meta name="description" content={`Element451 is a CRM for higher education that optimizes admissions marketing and enrollment management. Analytics, automation, and unparalleled ease of use are at its core.`} />
        </>
      ),
    },
  };
}
