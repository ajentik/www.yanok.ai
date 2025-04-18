import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="OnTask"
      description="Create easy-to-use forms to collect data, documents, and signatures. Build a process flow to personalize, route and track your form progress."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ontask.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        OnTask Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(132, 188, 111, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Create easy-to-use forms to collect data, documents, and signatures. Build a process flow to personalize, route and track your form progress.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Workflow Instance Started</div>
  <div>Collect data from a started workflow instance and trigger another action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">When a Zapier Event Is Reached in the Workflow</div>
  <div>Collect data when a workflow instance reaches a Zapier Event and trigger another action.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Start a Workflow Instance</div>
  <div>Sends data to start an OnTask Workflow Template</div>
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
          <title>OnTask</title>
          <meta name="description" content="Create easy-to-use forms to collect data, documents, and signatures. Build a process flow to personalize, route and track your form progress." />
        </>
      ),
    },
  };
}
