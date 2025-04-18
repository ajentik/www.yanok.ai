import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SproutVideo"
      description="SproutVideo is a video hosting platform with powerful video marketing, privacy, and analytical tools that take the guesswork out of sharing videos online."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sproutvideo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SproutVideo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SproutVideo is a video hosting platform with powerful video marketing, privacy, and analytical tools that take the guesswork out of sharing videos online.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Call to Action Clicked</div>
  <div>Triggers when a CTA in your video has been clicked by a viewer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Collected</div>
  <div>Triggers when an email address has been collected from a viewer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Video Deployed</div>
  <div>Triggers when a new video has been deployed within your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Video Watched</div>
  <div>Triggers when a video has been watched</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Access Grant</div>
  <div>Create a new access grant within your sproutvideo account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Folder</div>
  <div>Create a new folder within your SproutVideo account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Viewer Login</div>
  <div>Create a new viewer login within your SproutVideo account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Access Grant</div>
  <div>Updates the settings for an existing access grant in your SproutVideo account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Video</div>
  <div>Uploads a video to your SproutVideo account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Access Grant</div>
  <div>Find a specific access grant from your SproutVideo account based on the Login and Video.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Engagement Session</div>
  <div>Get a specific engagement session from your SproutVideo account based on the engagement session ID returned from the Email Collected or Video Watched triggers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Login</div>
  <div>Get a specific login from your SproutVideo account based on the login\'s email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Total Percentage Watched</div>
  <div>Get the total percent watched for a video by a specific viewer after combining all of their viewing sessions.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Video</div>
  <div>Get a specific video from your SproutVideo account based on the video\'s ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Access Grant</div>
  <div>Find a specific access grant from your SproutVideo account based on the Login and Video.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Viewer Login</div>
  <div>Get a specific login from your SproutVideo account based on the login\'s email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Video</div>
  <div>Get a specific video from your SproutVideo account based on the video\'s ID.</div>
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
          <title>SproutVideo</title>
          <meta name="description" content="SproutVideo is a video hosting platform with powerful video marketing, privacy, and analytical tools that take the guesswork out of sharing videos online." />
        </>
      ),
    },
  };
}
