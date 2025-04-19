import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Airteach"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/airteach.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Airteach Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(1, 123, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Airteach allows you to create, host and sell online courses without any technical knowledge, on your own training academy.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when a comment is published.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Completed Training (100%)</div>
  <div>Triggers when a user completes a Training on your academy.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lesson Subscription</div>
  <div>Triggers when a new user signs up to a Lesson.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lesson Payment</div>
  <div>Triggers when a user pays for a Lesson.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Completed Lesson (100%)</div>
  <div>Triggers when a user completes a Lesson on your academy.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lesson Access Request</div>
  <div>Triggers when a user requests an access to a Lesson on your academy.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user signs up for your academy.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag to User</div>
  <div>Adds a tag to a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag From User</div>
  <div>Removes a tag on a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enroll User in Lesson</div>
  <div>Enrolls a user in a lesson. If the user doesn\'t have an account, one will be created and they will then be enrolled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unenroll User From Lesson</div>
  <div>Unenrolls a user from a lesson.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete User</div>
  <div>Deletes a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Training Poll Result Set</div>
  <div>Finds a training poll result set by training registration id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a User</div>
  <div>Finds a user by email.</div>
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
          <title>Airteach</title>
        </>
      ),
    },
  };
}
