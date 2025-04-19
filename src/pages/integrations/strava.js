import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Strava"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/strava.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Strava Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(252, 76, 2, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Strava is a fitness tracking application.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when you post a new activity. NOTE: This trigger only checks for new activities every 15 minutes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Club Activity</div>
  <div>Triggers when any member of your selected club posts or updates an activity. NOTE: This trigger only checks for new activities every 15 minutes.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Creates an activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Totals and Stats Report</div>
  <div>Creates report that includes recent (last 4 weeks), year to date and all time stats of your activities.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Activity</div>
  <div>Finds one of your activities based on the ID or Name. Useful for getting activity updates as well as kudos and segment information.</div>
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
          <title>Strava</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
