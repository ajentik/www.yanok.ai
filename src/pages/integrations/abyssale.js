import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Abyssale"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/abyssale.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Abyssale Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(26, 71, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Abyssale is a banner maker platform that helps you to automatically generate on-brand images at scale.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Images</div>
  <div>[Deprecated] Prefer "New File" trigger for a better experience</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File</div>
  <div>Triggers when a single file generation is completed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New File Batch</div>
  <div>Triggers when a batch generation of files is completed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Export</div>
  <div>Triggers when an export of one or multiple images has been completed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Template Status Updated</div>
  <div>Triggers when a template\'s status has been updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Generate Open Graph Link</div>
  <div>Embed your images as Open Graph into unique redirect shortlinks. Great for hyper-personalized Linkedin or Facebook messages</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Export Images</div>
  <div>Export one or multiple previously generated images in .zip format</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate Single Image</div>
  <div>Auto-Generate a single image from a template designed in Abyssale</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate GIF</div>
  <div>Auto-generate a GIF from an animated template designed in Abyssale</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate HTML5 Animation</div>
  <div>Auto-generate an HTML5 animation from an animate template designed in Abyssale</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate Multi-Format Images</div>
  <div>Generate multiple formats of an image at once from a template designed in Abyssale</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate Overlay on Video</div>
  <div>Auto-generate a video with an overlay from a template designed in Abyssale</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate Video</div>
  <div>Auto-generate a video from an animated template designed in Abyssale</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Image</div>
  <div>Fetch details about a previously generated image</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Format</div>
  <div>Fetch details about a format added to a template you designed in Abyssale</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Template</div>
  <div>Fetch details about a template you designed in Abyssale</div>
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
          <title>Abyssale</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
