import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Tribal Habits LMS"
      description={`Tribal Habits is an all-in-one learning management system (LMS) - create interactive learning, manage online and blended training, dive into ready-made modules and report on all learning contributions`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/tribal-habits.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Tribal Habits LMS Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 117, 74, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Tribal Habits is an all-in-one learning management system (LMS) - create interactive learning, manage online and blended training, dive into ready-made modules and report on all learning contributions</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Completed Enrolment</div>
  <div>Triggers when a new topic, article or pathway enrolment is conquered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Enrolment</div>
  <div>Triggers when a new topic, article or pathway enrolment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Triggers when a user is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Topic/Article/Pathway Enrolment</div>
  <div>Creates or Updates a Topic, Article or Pathway Enrolment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Updates an existing user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create User</div>
  <div>Finds a user.</div>
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
          <title>Tribal Habits LMS</title>
          <meta name="description" content={`Tribal Habits is an all-in-one learning management system (LMS) - create interactive learning, manage online and blended training, dive into ready-made modules and report on all learning contributions`} />
        </>
      ),
    },
  };
}
