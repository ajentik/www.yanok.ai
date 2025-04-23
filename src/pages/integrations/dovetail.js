import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Dovetail"
      description={`Dovetail lets you organize user research data, analyze it together, and share insights with your team. Understand your customers with Dovetail and build better things.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/dovetail.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Dovetail Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(81, 45, 168, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Dovetail lets you organize user research data, analyze it together, and share insights with your team. Understand your customers with Dovetail and build better things.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Insight</div>
  <div>Triggers when a new insight is published.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Project</div>
  <div>Triggers when a project is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Insight</div>
  <div>Creates a new insight in a Dovetail project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Creates a new note in a Dovetail project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person</div>
  <div>Creates a new person in Dovetail.</div>
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
          <title>Dovetail</title>
          <meta name="description" content={`Dovetail lets you organize user research data, analyze it together, and share insights with your team. Understand your customers with Dovetail and build better things.`} />
        </>
      ),
    },
  };
}
