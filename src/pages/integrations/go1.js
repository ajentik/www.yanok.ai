import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Go1"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/go1.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Go1 Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(49, 184, 218, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Go1 is a leading edtech company with a mission to unlock positive potential through a love for learning. Find exactly what you\'re looking for with our comprehensive learning and development library featuring hundreds of thousands of resources from the world\'s best providers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Overdue Enrollment</div>
  <div>Triggers when a learner has exceeded the due date for them to complete their enrollment in a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Course/Module Completed</div>
  <div>Triggers when a user completes a module or course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Enrollment</div>
  <div>Triggers when a user enrolls in a course or a course module.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Transaction</div>
  <div>Triggers when a new Transaction is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created in your Portal.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assign Group</div>
  <div>Assign a learner to a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign Manager</div>
  <div>Assigns a manager to a learner.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Notification</div>
  <div>Sends a notification to a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new user in your portal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Enrollment</div>
  <div>Enrolls a user into a course or module.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Completion Certificate</div>
  <div>Uploads a course enrollment completion certificate (to replace the default).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Enrollment</div>
  <div>Updates a leaner\'s GO1 enrollment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds an existing user in your portal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Course/Module</div>
  <div>Find a Course/Module</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create User</div>
  <div>Find or Create User</div>
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
          <title>Go1</title>
          <meta name="description" content={}/>re looking for with our comprehensive learning and development library featuring hundreds of thousands of resources from the world's best providers.' />
        </>
      ),
    },
  };
}
