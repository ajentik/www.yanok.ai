import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Valispace"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/valispace.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Valispace Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(238, 175, 48, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Valispace is a platform for engineering collaboration. Ensuring a single source-of-truth for engineering design, Valispace helps engineers build complex systems more efficiently in a browser-based platform designed for the engineers of today and tomorrow.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Compliance Changed</div>
  <div>Triggers when compliance for a requirement is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Milestone Completed</div>
  <div>Triggers when a project milestone is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Component</div>
  <div>Triggers when a new component is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Requirement</div>
  <div>Triggers when a new requirement is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Violated Requirement</div>
  <div>Triggers when a requirement is violated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Completed</div>
  <div>Triggers when a task is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Created</div>
  <div>Triggers when a task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Status Changed</div>
  <div>Triggers when a task status is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Vali Deleted</div>
  <div>Triggers when a Vali is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Verification Method Changed</div>
  <div>Triggers when a verification method is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Verification Status Changed</div>
  <div>Triggers when status of verification is changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Component</div>
  <div>Creates a new component</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Update Task from trigger</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Vali</div>
  <div>Updates a Vali with a new Formula/Value</div>
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
          <title>Valispace</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
