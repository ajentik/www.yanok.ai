import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Bannerbear"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/bannerbear.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Bannerbear Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 215, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Bannerbear is a service that automatically generates variations of graphic templates.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Template</div>
  <div>Triggers when there\'s a new template.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Animated Gif</div>
  <div>Triggers when a new animated gif has 100% rendered</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Image</div>
  <div>Triggers when a new image has been generated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Movie</div>
  <div>Triggers when a new movie has 100% rendered</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Video</div>
  <div>Triggers when a new video has 100% rendered</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Video Pending Approval</div>
  <div>Triggers when a Create Video request has been paused for your approval</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Video Template</div>
  <div>Triggers when a new Video Template is created</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Approve a Video</div>
  <div>Approve a video to proceed with rendering</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Animated Gif</div>
  <div>Creates an Animated Gif</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Collection</div>
  <div>Generates multiple Images based on a Template Set</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Image</div>
  <div>Generates a new Image</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Movie</div>
  <div>Joins multiple clips / images into a movie with transitions</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Screenshot</div>
  <div>Take a screenshot of a website</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Video</div>
  <div>Creates a Video</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit a Video</div>
  <div>Update a video auto-transcription</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Join PDF Files</div>
  <div>Join multiple PDF files into a single PDF</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Animated Gif</div>
  <div>Finds an Animated Gif</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Image</div>
  <div>Finds an Image.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Video</div>
  <div>Find a Video or check status of a Video</div>
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
          <title>Bannerbear</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
