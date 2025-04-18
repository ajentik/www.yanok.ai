import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Waybook"
      description="Build a playbook for your business. All your training, onboarding, process documentation and best practices in one place."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/waybook.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Waybook Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(51, 204, 204, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Build a playbook for your business. All your training, onboarding, process documentation and best practices in one place.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Document Published</div>
  <div>Triggers when a document is published.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Team Invite Accepted</div>
  <div>Triggers when a new team member joins a team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Team Invite Created</div>
  <div>Triggers when a new team member is invited.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document Completed</div>
  <div>Triggers when a team member completes a document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Step Completed</div>
  <div>Triggers when a team member completes a step.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Test Step Submission</div>
  <div>Triggers when a test submission is made.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subject Completed</div>
  <div>Triggers when a team member completes a subject.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Subject</div>
  <div>Create a new subject in this Waybook.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Team Invite</div>
  <div>Send an invite to this Waybook.</div>
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
          <title>Waybook</title>
          <meta name="description" content="Build a playbook for your business. All your training, onboarding, process documentation and best practices in one place." />
        </>
      ),
    },
  };
}
