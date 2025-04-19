import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Shotstack"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/shotstack.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Shotstack Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(37, 211, 208, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Shotstack is a service that allows you to edit videos, images and audio at scale.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete Asset</div>
  <div>Delete hosted assets including videos, images, audio files, thumbnails and poster images.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Dynamic Template</div>
  <div>Create a video from a dynamic template.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create GIF</div>
  <div>Create a GIF from a video.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Advanced Overlay</div>
  <div>Dynamically place an image of video overlay on top of a video or image. This action allows you to build highly customised and personalised videos and images at scale.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Resize</div>
  <div>Resize your video or image by changing the resolution and aspect ratio.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Video Slideshow</div>
  <div>Create a video slideshow from a range of images.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Audio</div>
  <div>Add audio to a video.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Stitch Video</div>
  <div>Stitch a range of videos together.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Trim Video</div>
  <div>Trim a video between two different timestamps.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Basic Watermark</div>
  <div>Place a watermark on top of a video or image. You can use either an image or a video for your watermark.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Poll Render Status</div>
  <div>Poll for the status of a render.</div>
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
          <title>Shotstack</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
