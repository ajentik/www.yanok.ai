import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Livespace"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/livespace.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Livespace Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(139, 193, 61, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Livespace is a sales CRM to help organise your teams,ensuring everyone knows the next step to winning their deals.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new person is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a new deal is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change in Deal Stage</div>
  <div>Triggers when deal stage is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change in Deal Status</div>
  <div>Triggers when deal status is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is added.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Company Note</div>
  <div>Adds a note to existing company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a new deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Deal Cost</div>
  <div>Adds a cost to existing deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Deal Note</div>
  <div>Adds a note to existing deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Deal Product</div>
  <div>Adds a product to existing deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person</div>
  <div>Creates a new person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Person Note</div>
  <div>Adds a note to existing person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Company</div>
  <div>Allows you to edit existing company info.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Deal</div>
  <div>Allows you to edit existing deal info.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Person</div>
  <div>Allows you to edit existing person info.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Company</div>
  <div>Search for company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Deal</div>
  <div>Search for deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Person</div>
  <div>Search for person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Company</div>
  <div>Search or Create Company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Deal</div>
  <div>Search or Create Deal</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search or Create Person</div>
  <div>Search or Create Person</div>
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
          <title>Livespace</title>
        </>
      ),
    },
  };
}
