import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Caplena"
      description="Caplena helps you automatically analyse free-text, creating actionable results from unstructured customer feedback, tweets or app reviews."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/caplena.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Caplena Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(14, 93, 136, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Caplena helps you automatically analyse free-text, creating actionable results from unstructured customer feedback, tweets or app reviews.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Projects</div>
  <div>Triggers when a new project is added.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Create a Project with one or more questions.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Append Row to Project</div>
  <div>Add a new text element to every question of the project, and (optionally) make use of the computed auto-categorization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Project</div>
  <div>Identify the Project you want to work with.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Project</div>
  <div>Identify the Project you want to work with.</div>
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
          <title>Caplena</title>
          <meta name="description" content="Caplena helps you automatically analyse free-text, creating actionable results from unstructured customer feedback, tweets or app reviews." />
        </>
      ),
    },
  };
}
