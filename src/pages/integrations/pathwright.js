import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pathwright"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pathwright.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pathwright Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(238, 33, 46, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Design step-by-step learning paths for anyone. With Pathwright you can create learning paths that guide students, employees, or anyone in the world to a new level of skill.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Learning Activity</div>
  <div>Triggers when a student performs a learning activity in your school. Examples include participating in discussions and completing steps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Cohort</div>
  <div>Triggers whenever a new cohort is created in a resource in your Pathwright school, whether that be by a staff member, or a learner creating their own member-created cohort.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Student Course Completion</div>
  <div>Triggers when a student completes a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New School Member</div>
  <div>Triggers when a new member joins your school.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Registration</div>
  <div>Triggers when a new registration happens in your Pathwright school.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Student Subscription</div>
  <div>Triggers when a student subscribes to your school.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">School Membership Updated</div>
  <div>Triggers when a member of your school updates their membership.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Step Review Status Change</div>
  <div>Triggers when a step\'s review status may have changed. This could be either the result of a step being automatically assigned a score, or from a teacher manually reviewing a submission. Additionally, other lifecycle events that affect the score or review status of a student\'s step will trigger this to be sent, such as skips or resets performed either by or on behalf of a student.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Student Unsubscription</div>
  <div>Triggers when a user\'s subscription is canceled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Email Updated</div>
  <div>Triggers when a user changes the email address on their account.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Registration Invitation</div>
  <div>Creates a registration invitation to a Pathwright offering and optionally automatically creates a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Step Completion</div>
  <div>Updates a step completion for a learner. Allows the step to be reset, skipped, or completed.</div>
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
          <title>Pathwright</title>
        </>
      ),
    },
  };
}
