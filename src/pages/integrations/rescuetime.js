import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="RescueTime"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/rescuetime.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        RescueTime Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(196, 22, 5, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">RescueTime helps you understand how you spend your time on the computer by automatically keeping a log of the time you spend on different applications and websites. Having an accurate idea of how you time is spent makes it easy to stay productive and balanced.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Alert</div>
  <div>Triggers when one of your RescueTime alerts goes off.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Highlight Event</div>
  <div>Triggers when a new daily highlight event is posted</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Daily Summary Report</div>
  <div>Triggers when a new daily summary is available</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New FocusTime Session End</div>
  <div>Triggers when a FocusTime session finishes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New FocusTime Session Start</div>
  <div>Triggers when a new FocusTime session is started</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Weekly Summary Report</div>
  <div>Triggers when a new weekly summary is available</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Log a Highlight Event</div>
  <div>Creates a new highlight or action log entry. Highlight events show up as a list of accomplishments in your reports. Action events are similar, but they can be grouped and categorized as well.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start or Stop a FocusTime Session</div>
  <div>Starts or stops a FocusTime session.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Log Offline Time</div>
  <div>Adds offline time to your RescueTime account for the specified amount of minutes.</div>
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
          <title>RescueTime</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
