import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Website Toolbox Forum"
      description="Website Toolbox is the easiest way to create a forum. No coding, software, or servers required."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/website-toolbox-forum.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Website Toolbox Forum Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(18, 169, 216, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Website Toolbox is the easiest way to create a forum. No coding, software, or servers required.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Conversation Created</div>
  <div>Triggers when a new conversation is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message Created</div>
  <div>Triggers when a new message is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Post</div>
  <div>Triggers when a new post is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Topic</div>
  <div>Triggers when a new topic is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Approved</div>
  <div>Triggers when a post is approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Deleted</div>
  <div>Triggers when a post is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Updated</div>
  <div>Triggers when a post is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Topic Deleted</div>
  <div>Triggers when a topic is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Topic Updated</div>
  <div>Triggers when a topic is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Approved</div>
  <div>Triggers when a user is approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Deleted</div>
  <div>Triggers when a user is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Email Verified</div>
  <div>Triggers when a user verifies their email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Payment Received</div>
  <div>Triggers when a payment has been received by a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Updated</div>
  <div>Triggers when a user is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add to User Group</div>
  <div>Add users to user groups</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Category</div>
  <div>Creates a Category</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Post</div>
  <div>Creates a new Post</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Topic</div>
  <div>Creates a Topic</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new User</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Category</div>
  <div>Deletes a Category</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Post</div>
  <div>Deletes a Post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Topic</div>
  <div>Deletes a Topic.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete User</div>
  <div>Deletes a User.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove From User Group</div>
  <div>Remove users from a user group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Post</div>
  <div>Updates a Post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Topic</div>
  <div>Updates a Topic.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Updates a User.</div>
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
          <title>Website Toolbox Forum</title>
          <meta name="description" content="Website Toolbox is the easiest way to create a forum. No coding, software, or servers required." />
        </>
      ),
    },
  };
}
