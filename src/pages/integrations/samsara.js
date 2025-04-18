import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Samsara"
      description="Samsara is a cloud-connected sensor data platform for connected operations."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/samsara.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Samsara Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 38, 62, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Samsara is a cloud-connected sensor data platform for connected operations.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Document Submitted</div>
  <div>Triggers when a new document is submitted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Route Added</div>
  <div>Triggers when a new route is added to Samsara</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Route Job Completion</div>
  <div>Triggers when a job is newly completed in a Samsara route.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Address</div>
  <div>Adds an to an Organization</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Adds a single contact to the organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Route</div>
  <div>Creates a Route to an existing address. Must add a "Create Address" action prior to creating a route, if using address that isn\'t already in address book.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Finds a Contact in the organization</div>
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
          <title>Samsara</title>
          <meta name="description" content="Samsara is a cloud-connected sensor data platform for connected operations." />
        </>
      ),
    },
  };
}
