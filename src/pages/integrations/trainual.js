import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Trainual"
      description={`Trainual is a simple tool for building the how-to guide for your business.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/trainual.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Trainual Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(106, 40, 234, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Trainual is a simple tool for building the how-to guide for your business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Subject Completed</div>
  <div>Triggers when a user completes a subject.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Test Failed</div>
  <div>Triggers when a user fails a test.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Test Passed</div>
  <div>Triggers when a user passes a test.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Topic Completed</div>
  <div>Triggers when a user completes a topic.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">All Subjects Completed</div>
  <div>Triggers when a user completes all assigned subjects.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Archive User</div>
  <div>Archives user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign Roles</div>
  <div>Assigns roles to a selected user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign Subjects</div>
  <div>Assigns subjects to a selected user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invite New User</div>
  <div>Invites a new user to your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unarchive User</div>
  <div>Unarchives user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unassign Roles</div>
  <div>Unassigns roles from a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unassigns Subjects</div>
  <div>Unassign subjects from a user.</div>
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
          <title>Trainual</title>
          <meta name="description" content={`Trainual is a simple tool for building the how-to guide for your business.`} />
        </>
      ),
    },
  };
}
