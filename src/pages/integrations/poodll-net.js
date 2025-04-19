import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Poodll NET"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/poodll-net.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Poodll NET Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(47, 105, 157, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Poodll NET is a Moodle based LMS platform for language schools. It is used to deliver online language courses and assessments.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Course Completed</div>
  <div>Triggers when a user completes a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Course Enrolment Deleted</div>
  <div>Triggers when a course enrolment is deleted (manually or automatically).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Course Enrolment</div>
  <div>Triggers when a new user is enrolled in a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User Created</div>
  <div>Triggers when a new user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Quiz Attempt Submitted</div>
  <div>Triggers when a quiz attempt has been completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Leveled Up</div>
  <div>Triggers when a user attains a new level in LevelUp XP.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Updated</div>
  <div>Triggers when a user is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add User to Cohort</div>
  <div>Add a user to a cohort</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add User to Group</div>
  <div>Adds a user to course group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new Moodle user in the site. If a user with the same email address already exists, it will update the user\'s firstname and lastname and suspended fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete User</div>
  <div>Deletes a user from the site</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enrol User in Course</div>
  <div>Enrol (or suspend enrolment of) the user in the specified course</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Fetches a users details from Poodll NET</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove User From Cohort</div>
  <div>Removes a user from the specified cohort</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove User From Group</div>
  <div>Removes a user from a course group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unenrol User From Course</div>
  <div>Unenrol user from the specified course</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Update a Poodll NET site user\'s information. This requires the users ID which can be fetched using the find user action if unknown.</div>
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
          <title>Poodll NET</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
