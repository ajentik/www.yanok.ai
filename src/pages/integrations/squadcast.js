import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SquadCast"
      description={`SquadCast is the cloud recording studio where you can connect and record audio and video to create content audiences love.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/squadcast.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SquadCast Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(64, 184, 186, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SquadCast is the cloud recording studio where you can connect and record audio and video to create content audiences love.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Recording Session</div>
  <div>Triggers when a recording session is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Audio Master</div>
  <div>Triggers when a new audio mastering is created by Dolby.io.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Audio Mix Available</div>
  <div>Triggers when a new audio mix is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Audio Recording Available</div>
  <div>Triggers when a new audio recording is rendered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Recording Session Scheduled</div>
  <div>Triggers when a new Recording Session is scheduled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Video Recording Available</div>
  <div>Triggers when a new video recording is rendered.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Participant Joined a Session</div>
  <div>Triggers when a participant joins a session.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Participant Left a Session</div>
  <div>Triggers when a participant leaves a session.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recording Session Ended</div>
  <div>Triggers when a Recording Session Ends.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recording Session Started</div>
  <div>Triggers when a recording session starts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recording Started</div>
  <div>Triggers when a recording is started.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recording Stopped</div>
  <div>Triggers when a recording has stopped.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Recording Session</div>
  <div>Triggers when a recording session is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Recording Session</div>
  <div>Creates a Recording Session</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find All Recordings in a Session</div>
  <div>Find All Recordings from a Specific Session</div>
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
          <title>SquadCast</title>
          <meta name="description" content={`SquadCast is the cloud recording studio where you can connect and record audio and video to create content audiences love.`} />
        </>
      ),
    },
  };
}
