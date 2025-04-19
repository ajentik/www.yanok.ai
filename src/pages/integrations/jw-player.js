import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="JW Player"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/jw-player.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        JW Player Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(236, 0, 65, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">JW Player helps you grow your business with its flexible platform of video services, powered by billions of signals from across our vast network.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Media Available</div>
  <div>Triggers when a conversion for a new media are completed or media becomes available.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Media Updated</div>
  <div>Triggers when a media is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Update Media</div>
  <div>Updates a media.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Media via URL</div>
  <div>Upload media to JW Player</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Media</div>
  <div>Finds a media.</div>
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
          <title>JW Player</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
