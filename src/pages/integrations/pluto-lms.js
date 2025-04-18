import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pluto LMS"
      description="Pluto LMS is the easiest way to create and manage online courses."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pluto-lms.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pluto LMS Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(1, 184, 142, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Pluto LMS is the easiest way to create and manage online courses.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar Event</div>
  <div>Triggers when a new calendar event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User Segment Created</div>
  <div>Triggers when a new user segment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Course Created</div>
  <div>Triggers when a new course is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Course Enrollment</div>
  <div>Triggers when a new user is enrolled into course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Group Created</div>
  <div>Triggers when a new group is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User Created</div>
  <div>Triggers when new user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User in Segment</div>
  <div>Triggers when there is a new user in a site user segment.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create New User</div>
  <div>Creates a new user on your LMS.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add User to Group</div>
  <div>Adds a User to a Course Group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign System User Role</div>
  <div>Assigns a system role to a user</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Calendar Event</div>
  <div>Creates a calendar event</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Course Category</div>
  <div>Creates a new site category.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add User to Segment</div>
  <div>Adds users to existing site user segments.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Group</div>
  <div>Creates a Group in your course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Site User Segment</div>
  <div>Creates a site user segment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete User</div>
  <div>Deletes a user account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enroll User Into Course</div>
  <div>Enrolls user into a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message</div>
  <div>Sends a Message to a specified user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Suspend User</div>
  <div>Suspends a user account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unenroll User From Course</div>
  <div>Unenrolls a user from a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Existing User</div>
  <div>Updates an existing user</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Grade</div>
  <div>Updates a grade within a course</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Activity Completion Status of User</div>
  <div>Search the activity completion status of a user in a given course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search User Segment</div>
  <div>Finds a user segment on your LMS</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Course</div>
  <div>Finds a course in your LMS</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Course Completion Status of User</div>
  <div>Search for course completion status of a given user</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search All Course Grades for User</div>
  <div>Searches for all site course grades for a user in the form of an overview report.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Course Grade Items for User</div>
  <div>Searches for a user\'s course grade items.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search User</div>
  <div>Searches for a user on your LMS.</div>
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
          <title>Pluto LMS</title>
          <meta name="description" content="Pluto LMS is the easiest way to create and manage online courses." />
        </>
      ),
    },
  };
}
