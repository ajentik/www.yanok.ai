import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Netex learningCloud"
      description={`Netex learningCloud is a learning platform designed for the modern workforce.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/netex-learningcloud.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Netex learningCloud Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(86, 167, 215, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Netex learningCloud is a learning platform designed for the modern workforce.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">User Completed Sprint</div>
  <div>Triggers when a user completes a sprint.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Enrolled in a Sprint</div>
  <div>Trigger when user is enrolled in a sprint.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Reaches Sixty-Six Percent</div>
  <div>Triggers when a user reaches sixty-six percent of sprint (2/3).</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add User to Group</div>
  <div>Adds users to the selected group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Group</div>
  <div>Creates a new group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enroll Student</div>
  <div>Enrolls student in a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Group</div>
  <div>Updates an existing group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Password</div>
  <div>Updates an user password.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Updates an existing user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Welcome Mail</div>
  <div>Send a welcome email to a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds a user by username or id.</div>
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
          <title>Netex learningCloud</title>
          <meta name="description" content={`Netex learningCloud is a learning platform designed for the modern workforce.`} />
        </>
      ),
    },
  };
}
