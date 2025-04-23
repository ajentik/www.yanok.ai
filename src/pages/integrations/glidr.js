import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Glidr"
      description={`GLIDR helps you make data-driven decisions on what to build, from roadmap through discovery, launch and iteration.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/glidr.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Glidr Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(94, 106, 244, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">GLIDR helps you make data-driven decisions on what to build, from roadmap through discovery, launch and iteration.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Tag Added</div>
  <div>Triggers when a new tag is attached to an Idea or Evidence. The Evidence or Idea will be sent to this trigger when a new tag is added</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Evidence Created</div>
  <div>Triggers when a new piece of evidence has been created. This can be an interview or an evidenceOther card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Idea Created</div>
  <div>Triggers when a new Idea card is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Idea Validated</div>
  <div>Triggers when an idea is set to validated</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Evidence</div>
  <div>Create evidence to validate or invalidate your ideas and hypotheses</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Idea</div>
  <div>Creates an Idea card or hypothesis that will be added to the business or product canvas</div>
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
          <title>Glidr</title>
          <meta name="description" content={`GLIDR helps you make data-driven decisions on what to build, from roadmap through discovery, launch and iteration.`} />
        </>
      ),
    },
  };
}
