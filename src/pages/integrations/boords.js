import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Boords"
      description="Boords is a collaborative storyboarding app which helps you create storyboards, scripts, and animatics - then gather feedback - all in one place."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/boords.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Boords Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 221, 96, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Boords is a collaborative storyboarding app which helps you create storyboards, scripts, and animatics - then gather feedback - all in one place.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Animatic</div>
  <div>Triggers when a storyboard is rendered as an MP4.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Download Images</div>
  <div>Triggers when storyboard images are downloaded as a ZIP file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment on Project</div>
  <div>Triggers when a project gets a new comment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment on Storyboard</div>
  <div>Triggers when a storyboard gets a new comment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Storyboard</div>
  <div>Triggers when a storyboard is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Frame</div>
  <div>Creates a new frame.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Storyboard</div>
  <div>Creates a new storyboard.</div>
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
          <title>Boords</title>
          <meta name="description" content="Boords is a collaborative storyboarding app which helps you create storyboards, scripts, and animatics - then gather feedback - all in one place." />
        </>
      ),
    },
  };
}
