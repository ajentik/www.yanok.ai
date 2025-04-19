import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Dastra"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/dastra.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Dastra Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(8, 72, 135, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Dastra is a simple and guided data protection solution to make your entire organization accountable for risks around personal data. Simplify tasks and make sure they meet compliance standards.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Data Subject Request</div>
  <div>Triggers when a new data subject request is created in Dastra.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new Task is created in Dastra.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Data Subject Request</div>
  <div>Triggers when a data subject request is updated in Dastra.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Attach an Actor to a Data Processing</div>
  <div>Attach an existing actor from your workspace to an exisiting Data Processing</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create an Actor</div>
  <div>Creates a new actor in Dastra</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Data Subject Request</div>
  <div>Creates a data subject request in Dastra</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Task</div>
  <div>Create a new Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Actor</div>
  <div>Search actors in a given workspace</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Data Processing</div>
  <div>Finds a Data Processing</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Actor</div>
  <div>Search actors in a given workspace</div>
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
          <title>Dastra</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
