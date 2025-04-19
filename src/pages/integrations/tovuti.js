import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Tovuti LMS"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/tovuti.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Tovuti LMS Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(234, 137, 54, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Tovuti is an all-in-one, cloud-based learning management system. Tovuti gives you all the tools you need to create, deliver and track the effectiveness of your eLearning programs.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get New Virtual Classroom Attendance</div>
  <div>Triggers when a new virtual classroom attendance record is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Subscription</div>
  <div>Gets a list of existing subscriptions within the selected Tovuti instance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Teams</div>
  <div>Gets a list of all teams available within the provided instance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Badge Awarded</div>
  <div>Triggers when a user is awarded a new badge.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Certificate Issued</div>
  <div>Triggers when a certificate is issued to a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Course</div>
  <div>Triggers when a new course is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Course Registration</div>
  <div>Triggers when a user registers or begins taking a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new event is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event Registration</div>
  <div>Triggers when a user registers for an event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Milestone Completed</div>
  <div>Triggers when a user completes a milestone.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User Award</div>
  <div>Trggers when user earns a new award of any type (badge, certificate, milestone).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User Quiz or Survey Completed</div>
  <div>Triggers when a User completes a Quiz or Survey</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User Team</div>
  <div>Triggers when a new Team is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add User Group to Subscription</div>
  <div>Edits Subscription by adding a User Group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Users to a Team</div>
  <div>Add the specified users to a team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add User Group to Team</div>
  <div>Adds a User Group to an existing Team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Checklist</div>
  <div>This allows you to create a new Tovuti LMS Checklist.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Course Assignment</div>
  <div>Create a new Course Assignment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Tovuti User</div>
  <div>This will create a new Tovuti User via our API.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Subscription</div>
  <div>Creates a Subscription</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Team</div>
  <div>Creates a user team within a Tovuti instance</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Tovuti User Course Enrollment</div>
  <div>Creates a new user course enrollment entry in a Tovuti instance via API.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New User Group</div>
  <div>Creates a new user group within a specified Tovuti instance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Virtual Meeting</div>
  <div>Create a New Virtual Meeting</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete User</div>
  <div>Allows you to delete a specified user</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Subscription</div>
  <div>Edits an existing Subscription</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Team</div>
  <div>Edits an existing Team</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit User Group</div>
  <div>Edits an existing User Group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Users From a Team</div>
  <div>Remove users or leaders from a team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove User Group From Team</div>
  <div>Removes a User Group from an existing Team, as Members or Team Leads</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Updates a User record in a Tovuti instance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Tovuti User by Email</div>
  <div>Finds a Tovuti user by their email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a New User</div>
  <div>Finds a Tovuti user by their email address</div>
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
          <title>Tovuti LMS</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
