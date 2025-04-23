import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Collaborate Space"
      description={`COLLABORATE Space (by ClearOne) is a cloud video collaboration app that connects hundreds of users joining from any device, anytime, and anywhere for messaging, calling, and meetings.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/collaborate-space.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Collaborate Space Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(241, 102, 37, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">COLLABORATE Space (by ClearOne) is a cloud video collaboration app that connects hundreds of users joining from any device, anytime, and anywhere for messaging, calling, and meetings.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Meeting Event</div>
  <div>Triggers when a meeting event happens.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Meeting Available</div>
  <div>Triggers when a meeting has started and is available to connect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Meeting Finished</div>
  <div>Triggers when a meeting has finished.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Attachment</div>
  <div>Triggers when an attachment has been uploaded to a meeting and is available to download.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Recording</div>
  <div>Triggers when a recording of a meeting is available to download.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Meeting</div>
  <div>Creates a new meeting. User can set-up duration, start time, add attendees and multiple meeting options.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message to Channel</div>
  <div>Send and post a Message text into a specific Channel of the user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Channel</div>
  <div>Search for a user private and public channels.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Meeting</div>
  <div>Finds a meeting of the user, providing the name of the meeting.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Meeting</div>
  <div>Finds a meeting of the user, providing the name of the meeting.</div>
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
          <title>Collaborate Space</title>
          <meta name="description" content={`COLLABORATE Space (by ClearOne) is a cloud video collaboration app that connects hundreds of users joining from any device, anytime, and anywhere for messaging, calling, and meetings.`} />
        </>
      ),
    },
  };
}
