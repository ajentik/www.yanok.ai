import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="iLert"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/ilert.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        iLert Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(28, 139, 227, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">iLert is an incident and on-call management platform for DevOps teams. iLert helps you to respond to incidents faster by adding on-call schedules, SMS, and voice alerts to your existing monitoring tools.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Incident</div>
  <div>Triggers when new incidents are created, or when existing incidents change state.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Accept Incident</div>
  <div>Accepts an incident in iLert</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Incident</div>
  <div>Creates an incident in iLert.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Resolve Incident</div>
  <div>Resolves an incident in iLert</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User on Call</div>
  <div>Find the user on call for a specific schedule.</div>
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
          <title>iLert</title>
        </>
      ),
    },
  };
}
