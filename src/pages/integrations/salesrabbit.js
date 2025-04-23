import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SalesRabbit"
      description={`SalesRabbit is a sales enablement app that helps sales teams assign areas, track progress, and constantly get better at their craft.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/salesrabbit.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SalesRabbit Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(254, 0, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SalesRabbit is a sales enablement app that helps sales teams assign areas, track progress, and constantly get better at their craft.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New/Updated Lead</div>
  <div>Triggers when when a lead is created and/or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Form Submitted</div>
  <div>Send form data to Zapier when form is submitted in SalesRabbit.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Display Form Result</div>
  <div>Displays the result of a submitted form and gives the option to update the lead associated with that form.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Updates a lead.</div>
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
          <title>SalesRabbit</title>
          <meta name="description" content={`SalesRabbit is a sales enablement app that helps sales teams assign areas, track progress, and constantly get better at their craft.`} />
        </>
      ),
    },
  };
}
