import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Noloco"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/noloco.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Noloco Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(236, 72, 153, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Noloco is a no-code client portal builder, you can create the perfect experience for your clients and your team built around your existing workflows.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Record Created</div>
  <div>Triggers when a new record is created in your app.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Record Updated</div>
  <div>Triggers when an existing record is updated in your app.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Record</div>
  <div>Creates a new record in a collection.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Record</div>
  <div>Updates a existing record in a collection.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Record</div>
  <div>Search for an existing record by unique fields.</div>
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
          <title>Noloco</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
