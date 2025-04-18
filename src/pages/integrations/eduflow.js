import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Eduflow"
      description="Learning experiences made easy, social and interactive"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/eduflow.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Eduflow Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 108, 250, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Learning experiences made easy, social and interactive</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Participant</div>
  <div>Triggers when a new participant is added to course</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Activity Status</div>
  <div>Triggers when activity status is updated for a student</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Participant to Course</div>
  <div>Adds participant to course on Eduflow. Configure participant type, Student or Teacher, and whether invitation emails should be sent out. Existing emails in the course will be ignored as well as invalid emails.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag to Learner</div>
  <div>Assigns course tag to learner.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Activity as Complete</div>
  <div>Marks activity as complete for student based on email. Works exclusively with Content, Video, Zoom and Embed activities. The activity has to be open for the student.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Participant From Course</div>
  <div>Removes a participant from course. Course and institution owner will be ignored, as well as invalid emails that don\'t belong to the course.</div>
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
          <title>Eduflow</title>
          <meta name="description" content="Learning experiences made easy, social and interactive" />
        </>
      ),
    },
  };
}
