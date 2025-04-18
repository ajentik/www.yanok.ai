import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Alloy Navigator"
      description="Alloy Navigator is an IT Service Management and Asset Management solution."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/alloy-navigator.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Alloy Navigator Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 52, 104, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Alloy Navigator is an IT Service Management and Asset Management solution.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Change Request</div>
  <div>Triggers when a Change Request is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Change Request activity</div>
  <div>Triggers when a new Activity is added to any Change Request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Request status change</div>
  <div>Triggers when a status of a Change Request is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Incident</div>
  <div>Triggers when an Incident is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Incident activity</div>
  <div>Triggers when a new Activity is added to any Incident.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Incident status change</div>
  <div>Triggers when a status of an Incident is changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Incident</div>
  <div>Creates an incident.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Change Request</div>
  <div>Searches for Change Request record by ID or OID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Incident</div>
  <div>Searches for Incident record by ID or OID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Person</div>
  <div>Search Person by Email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Searches for Person record by ID or OID.</div>
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
          <title>Alloy Navigator</title>
          <meta name="description" content="Alloy Navigator is an IT Service Management and Asset Management solution." />
        </>
      ),
    },
  };
}
