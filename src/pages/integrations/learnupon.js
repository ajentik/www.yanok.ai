import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="LearnUpon"
      description={`LearnUpon is an enterprise learning management system (LMS) that fuels business’s employee, partner, and customer success through training.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/learnupon.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        LearnUpon Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(53, 109, 241, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">LearnUpon is an enterprise learning management system (LMS) that fuels business’s employee, partner, and customer success through training.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Enrollment Completion Trigger</div>
  <div>Triggers when a learner completes a course in LearnUpon.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Enrollment</div>
  <div>Creates a new Enrollment, by adding a user onto a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Group</div>
  <div>Creates a new group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Group Membership</div>
  <div>Creates a new Group Membership, by adding a user into a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Portal Invite</div>
  <div>You can use this action to invite users to your portal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Group Search</div>
  <div>Search Groups in your Portal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Search</div>
  <div>Search Users in your Portal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Group</div>
  <div>Searches for a group before creating them</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create User</div>
  <div>Searches for a user before creating them</div>
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
          <title>LearnUpon</title>
          <meta name="description" content={`LearnUpon is an enterprise learning management system (LMS) that fuels business’s employee, partner, and customer success through training.`} />
        </>
      ),
    },
  };
}
