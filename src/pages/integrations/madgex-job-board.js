import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Madgex Job Board"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/madgex-job-board.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Madgex Job Board Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(60, 60, 60, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">The most sophisticated job board software on the market, powering the world’s biggest brands & associations</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Job Published</div>
  <div>Triggers when a job goes from not live (eg. draft) to live.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recruiter Published</div>
  <div>Triggers when Recruiter record is published to active/live.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recruiter Status Changed</div>
  <div>Triggers when Recruiter status has changed (note: if status changes from non-active to active Recruiter Published trigger is fired).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recruiter Updated</div>
  <div>Triggers when Recruiter properties have been updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Created</div>
  <div>Triggers when a new user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Deleted</div>
  <div>Triggers when a user is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Updated</div>
  <div>Triggers when a user is modified.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Update User Marketing Preferences</div>
  <div>Updates the indicated User Marketing Preferences with the indicated values.</div>
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
          <title>Madgex Job Board</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
