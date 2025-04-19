import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Heights Platform"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/heights-platform.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Heights Platform Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(33, 178, 93, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Heights Platform is online course building software that helps you host and build the most powerful online school to sell your courses and digital products.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Course Completed by Student</div>
  <div>Triggers when a student completes a course in the program.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Answer</div>
  <div>Triggers when a student submits an answer to an assignment type lesson.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a student order is successfully marked as paid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project Post</div>
  <div>Triggers when a student submits a new project post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Student</div>
  <div>Triggers when a new student signs up for your program.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Student Completed</div>
  <div>Triggers when a student completes all of the courses in your program. This trigger happens at the same time that we award the student their 100% complete badge.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Enroll Student</div>
  <div>Creates a student &amp; enrolls in your program. If student exists for the email provided, they are updated &amp; enrolled. Student will be sent an email with login info. Optionally grant a course or bundle.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Grant Role</div>
  <div>Grants a specific role to your student, to allow them to see courses included in the role.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Revoke Bundle</div>
  <div>Revoke a student\'s access to a particular bundle while still allowing them to access the rest of your program.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Revoke Course</div>
  <div>Revoke a student\'s access to a particular course while still allowing them to access the rest of your program.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Revoke Role</div>
  <div>Revokes a student\'s role when provided with the student\'s current role.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unenroll Student</div>
  <div>Un-enrolls an existing student in your program. If your program enrollment is set to paid, this will prevent the student from accessing your program without paying again.</div>
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
          <title>Heights Platform</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
