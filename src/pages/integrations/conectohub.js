import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ConectoHub"
      description="ConectoHub is OKR Integrated Agile Work Management OS to managing your tasks, projects and OKRs."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/conectohub.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ConectoHub Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 94, 22, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ConectoHub is OKR Integrated Agile Work Management OS to managing your tasks, projects and OKRs.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Key Results</div>
  <div>Triggers when get authorized key results for user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Projects</div>
  <div>Triggers when gets authorized projects for user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Tasks</div>
  <div>Triggers when gets tasks for authorized user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Task\'s Assignees</div>
  <div>Triggers when gets task assignees.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Task\'s Collaborators</div>
  <div>Triggers when gets selected task collaborators.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Task\'s Section</div>
  <div>Triggers when gets task\'s section.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Today Tasks</div>
  <div>Triggers when get today tasks list for auth user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Yesterday Tasks</div>
  <div>Triggers when gets yesterday tasks for auth user.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Checkin Key Result</div>
  <div>Makes check-in the particular Key Result</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates project for your client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Task</div>
  <div>Create task on project or my tasks</div>
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
          <title>ConectoHub</title>
          <meta name="description" content="ConectoHub is OKR Integrated Agile Work Management OS to managing your tasks, projects and OKRs." />
        </>
      ),
    },
  };
}
