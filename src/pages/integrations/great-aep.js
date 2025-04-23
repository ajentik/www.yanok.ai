import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Great AEP"
      description={`Great AEP is automated scheduling for insurance agents.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/great-aep.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Great AEP Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(73, 101, 246, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Great AEP is automated scheduling for insurance agents.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Appointment</div>
  <div>Triggers when a new appointment is created in Great AEP.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to Specific Campaign</div>
  <div>Creates a Contact to Specific Campaign in Great AEP.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Archive Contact From Specific Campaign</div>
  <div>Archives a Contact from Specific Campaign in Great AEP.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Archive Contact From All Campaigns</div>
  <div>Archives a Contact from All Campaigns in Great AEP.</div>
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
          <title>Great AEP</title>
          <meta name="description" content={`Great AEP is automated scheduling for insurance agents.`} />
        </>
      ),
    },
  };
}
