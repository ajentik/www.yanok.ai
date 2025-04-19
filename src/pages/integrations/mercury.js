import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Mercury Connect"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mercury.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Mercury Connect Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(223, 30, 37, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Mercury Connect is a CRM platform that lets you track people & opportunities, loan calculations, compare products, and manage compliance.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Opportunity</div>
  <div>Triggers when an opportunity is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Person</div>
  <div>Triggers when a person is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when an opportunity is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a person is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opportunity Status Updated</div>
  <div>Triggers when the opportunity status is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Opportunity</div>
  <div>Triggers when an opportunity is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Person</div>
  <div>Triggers when a person is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Person</div>
  <div>Creates a new person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Person</div>
  <div>Updates an existing person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity</div>
  <div>Creates a new opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attach a Person to an Opportunity</div>
  <div>Attaches an existing person to an opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update an Opportunity</div>
  <div>Updates an existing opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Person</div>
  <div>Search for a person based on various criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Opportunity</div>
  <div>Search for an opportunity based on various criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or create person</div>
  <div>Find or create person</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or create person</div>
  <div>Find or create person</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or create opportunity</div>
  <div>Find or create opportunity</div>
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
          <title>Mercury Connect</title>
        </>
      ),
    },
  };
}
