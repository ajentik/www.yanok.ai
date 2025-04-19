import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Monax"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/monax.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Monax Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 28, 67, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Smart, simple, secure digital contracting</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">An Agreement Event Has Occurred</div>
  <div>Triggers when an agreement obligation or notification has been initiated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">An Agreement Has Status</div>
  <div>Triggers when an agreement or agreement draft has a specific status.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Document to Agreement</div>
  <div>Upload a file as a new document for an agreement.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Terms to Agreement</div>
  <div>Add additional terms as structured fields to the agreement.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Complete Obligation on an Agreement</div>
  <div>Complete an obligation of an agreement.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create an Agreement From a Template</div>
  <div>Create a new agreement based on a pre-existing template.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Agreement</div>
  <div>Search for an in-progress, active, or completed agreement by name or ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Obligation</div>
  <div>Search for a an obligation by name.</div>
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
          <title>Monax</title>
        </>
      ),
    },
  };
}
