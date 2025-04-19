import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="LearnDash"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/learndash.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        LearnDash Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 162, 232, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">LearnDash is a learning management system plugin built for WordPress.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Course Completed</div>
  <div>Triggers when a course is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enrolled Into a Course</div>
  <div>Triggers when a user is enrolled into a new course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enrolled Into a Group</div>
  <div>Triggers when a user is enrolled into a LearnDash group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Essay Submitted</div>
  <div>Triggers when a new essay is submitted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Group Completed</div>
  <div>Triggers when a user completes all courses in a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lesson Completed</div>
  <div>Triggers when a lesson is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Quiz Taken</div>
  <div>Triggers when a quiz is taken by student.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Topic Completed</div>
  <div>Triggers when a topic is completed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add to Group</div>
  <div>Add user to group(s).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enroll Into Course</div>
  <div>Enroll user into a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove From Course</div>
  <div>Remove the student access from LearnDash course(s).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove From Group</div>
  <div>Remove From Group</div>
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
          <title>LearnDash</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
