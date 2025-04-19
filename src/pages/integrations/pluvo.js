import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pluvo"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pluvo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pluvo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(31, 37, 50, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Pluvo is an all-in-one learning platform that lets you create beautiful online courses that leave an unforgettable impression. For every budget and every learning challenge.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Module Group Unlocked</div>
  <div>Triggers when a module group in a learning journey is unlocked</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Module Group File Uploaded</div>
  <div>Triggers when a file is uploaded in a learning journey</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Group</div>
  <div>Triggers when a group is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Group</div>
  <div>Triggers when a group is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Group</div>
  <div>Triggers when a group is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create E-Learning</div>
  <div>Triggers when e-learning is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete E-Learning</div>
  <div>Triggers when e-learning is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update E-Learning</div>
  <div>Triggers when e-learning is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Triggers when a user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete User</div>
  <div>Triggers when a user is deleted.</div>
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
  <div class="font-semibold">Add User to Group</div>
  <div>Add user to a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove User From Group</div>
  <div>Remove user from a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Group</div>
  <div>Update the data of a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add User to E-Learning</div>
  <div>Add user to e-learning.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove User From E-Learning</div>
  <div>Remove user from e-learning.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update E-Learning</div>
  <div>Update the data of an e-learning.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Update the data of a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Group</div>
  <div>Select a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Progress</div>
  <div>Get Progress Data</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create E-Learning</div>
  <div>Select e-learning.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create User</div>
  <div>Select a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or create group</div>
  <div>Search or create a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or create e-learning</div>
  <div>Search or create e-learning.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or create user</div>
  <div>Search or create a user.</div>
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
          <title>Pluvo</title>
        </>
      ),
    },
  };
}
