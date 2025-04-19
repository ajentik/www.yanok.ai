import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TrainerCentral"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/trainercentral.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TrainerCentral Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(250, 82, 42, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">TrainerCentral is an all-in-one training platform to build a successful business by inspiring your learners from across the globe.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Live Workshop - Learner Joined</div>
  <div>Triggers for all learners who had joined the live workshop once the session has ended.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Form Submitted</div>
  <div>Triggers when a learner submits the selected form.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Course Completed</div>
  <div>Triggers when any learner completes 100% of a course in the academy.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Course Enrolled</div>
  <div>Triggers when a learner enrolls for a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ticket Purchased</div>
  <div>Triggers when a learner pays for any ticket in the academy.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Live Workshop - Learner Registered</div>
  <div>Triggers when a learner registers for a live workshop in an academy</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sign-Up to Academy</div>
  <div>Triggers when a new learner signs up for the academy.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Live Workshop Created</div>
  <div>Triggers when a live workshop is created in the academy.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Invite Learner to a Course</div>
  <div>Send an email inviting a learner to join a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Register a Learner to a Live Workshop</div>
  <div>Registers a learner automatically to a created session(which has atleast one free ticket).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invite Learner to an Academy</div>
  <div>Send an email inviting the learner to join the academy.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Live Workshop</div>
  <div>Creates a new remote session which you can use to conduct live workshops.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invite Learner to a Live Workshop</div>
  <div>Sends an email inviting a learner to register for a session.</div>
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
          <title>TrainerCentral</title>
        </>
      ),
    },
  };
}
