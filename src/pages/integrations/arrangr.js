import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Arrangr"
      description="Arrangr makes arranging meetings fast and easy. Whether meeting 1-on-1 or herding a group, meeting for coffee or scheduling a call, Arrangr provides the tools and flows to arrange it with ease and efficiency."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/arrangr.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Arrangr Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(240, 71, 78, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Arrangr makes arranging meetings fast and easy. Whether meeting 1-on-1 or herding a group, meeting for coffee or scheduling a call, Arrangr provides the tools and flows to arrange it with ease and efficiency.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Created an Event</div>
  <div>Triggers whenever you create a new group event on Arrangr.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New 1:1 Invitation Received</div>
  <div>Triggers when someone sends you a 1:1 meeting invitation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event RSVP</div>
  <div>Triggers when someone RSVPs (attending, not attending, or maybe) to an event you created on Arrangr.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Poll Response Received</div>
  <div>Triggers when someone submits their response to a poll you created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New 1:1 Meeting Scheduled</div>
  <div>Triggers when a 1:1 meeting is scheduled. Can occur when you confirm a time someone else sent to you, when someone else confirms a time you sent them, or when someone books a time from your scheduling page (if your page is set to instant-book).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sent 1:1 Invitation</div>
  <div>Triggers when you send a 1:1 meeting invitation to someone.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Arrangr</title>
          <meta name="description" content="Arrangr makes arranging meetings fast and easy. Whether meeting 1-on-1 or herding a group, meeting for coffee or scheduling a call, Arrangr provides the tools and flows to arrange it with ease and efficiency." />
        </>
      ),
    },
  };
}
