import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Xperiencify"
      description={`Xperiencify is an online course platform that builds 8 psychological triggers into your course.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/xperiencify.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Xperiencify Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 219, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Xperiencify is an online course platform that builds 8 psychological triggers into your course.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Student Added to Course</div>
  <div>Triggers when a new student is added to the course</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag to Student</div>
  <div>Add tag to student</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Student to a Course</div>
  <div>Creates a Student in Course</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Student From a Specific Course</div>
  <div>Remove a student\'s access from a specific course</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Student From All Courses</div>
  <div>Remove Student From All Coach Courses</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag From Student</div>
  <div>Remove tag from student</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Suspend Student From Course</div>
  <div>Suspend Student From Course</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsuspend Student From Course</div>
  <div>Unsuspend Student From Course</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Student Custom Fields</div>
  <div>Updates a Custom Fields</div>
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
          <title>Xperiencify</title>
          <meta name="description" content={`Xperiencify is an online course platform that builds 8 psychological triggers into your course.`} />
        </>
      ),
    },
  };
}
