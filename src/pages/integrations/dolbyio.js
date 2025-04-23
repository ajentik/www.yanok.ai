import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Dolby.io"
      description={`Dolby.io offers support for media workflows to analyze and enhance file-based media and improve the quality of audience experiences.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/dolbyio.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Dolby.io Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Dolby.io offers support for media workflows to analyze and enhance file-based media and improve the quality of audience experiences.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete Webhook</div>
  <div>Delete a previously registered webhook configuration.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Analyze Speech Status (BETA)</div>
  <div>For a given job_id, this method will check the job status. When status==Success you\'ll be able to retrieve your result from the output location you provided in the original POST.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Analyze Status (BETA)</div>
  <div>For a given job_id, this method will check the job status. When status==Success you\'ll be able to retrieve your result from the output location you provided in the original POST.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Diagnose Results (BETA)</div>
  <div>Check whether a given job_id has completed processing and retrieve the results.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Enhance Status</div>
  <div>For a given job_id, this method will check if the processing task has completed and return the enhanced results.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Transcode Status</div>
  <div>For a given job_id, this method will check if the transcoding task has completed and return transcoding results.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Media Jobs</div>
  <div>Returns a list of the jobs that have been submitted in the past 31 days.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Register Webhook</div>
  <div>Register a webhook that is triggered when a job completes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Webhook</div>
  <div>Retrieve the previously registered webhook configuration.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start Analyzing (BETA)</div>
  <div>Start analyzing to learn about your media.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start Analyzing Speech (BETA)</div>
  <div>Start analyzing to learn about speech in your media.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start Diagnosing (BETA)</div>
  <div>The Dolby.io Media Analyze Audio Diagnose API provides a quick diagnosis for discovering audio quality issues with your media.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start Enhancing</div>
  <div>Start enhancing to improve your media.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start Music Mastering</div>
  <div>Start mastering to improve your music.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start Transcoding</div>
  <div>Start transcoding to modify the size, bitrates, and formats for your media.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Webhook</div>
  <div>Update the previously registered webhook configuration.</div>
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
          <title>Dolby.io</title>
          <meta name="description" content={`Dolby.io offers support for media workflows to analyze and enhance file-based media and improve the quality of audience experiences.`} />
        </>
      ),
    },
  };
}
