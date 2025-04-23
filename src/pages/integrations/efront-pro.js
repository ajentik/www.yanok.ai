import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="eFront Pro"
      description={`A powerful, yet simple LMS to cover your training & skills development needs.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/efront-pro.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        eFront Pro Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(130, 144, 186, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">A powerful, yet simple LMS to cover your training & skills development needs.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Branch</div>
  <div>Triggers when a new branch is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Category</div>
  <div>Triggers when a new category is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Certificate Issued</div>
  <div>Triggers when a new certificate is issued.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Course</div>
  <div>Triggers when a new course is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Group</div>
  <div>Triggers when a new group is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add User to Branch</div>
  <div>Add a user to a branch.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add User to Course</div>
  <div>Add a user to a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add User to Group</div>
  <div>Add a user to a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Branch</div>
  <div>Create a new branch.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Course</div>
  <div>Create a new course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Create a new user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User\'s Status in a Course</div>
  <div>Update the user\'s status in a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
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
          <title>eFront Pro</title>
          <meta name="description" content={`A powerful, yet simple LMS to cover your training & skills development needs.`} />
        </>
      ),
    },
  };
}
