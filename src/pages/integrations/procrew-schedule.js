import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pro Crew Schedule"
      description="Pro Crew Schedule is an all-in-one construction scheduling software."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/procrew-schedule.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pro Crew Schedule Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(1, 74, 119, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Pro Crew Schedule is an all-in-one construction scheduling software.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Schedules</div>
  <div>Triggers when a new schedule is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Status Update</div>
  <div>Triggers when a task status has been updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Crew Time Tracker</div>
  <div>Triggers when a new time is created. It will get the last 7 days of time logged by crews by default if Start and End Date is not set.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Crew</div>
  <div>Creates a Crew. Fields are Name and Color.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Schedule</div>
  <div>Creates a Schedule</div>
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
          <title>Pro Crew Schedule</title>
          <meta name="description" content="Pro Crew Schedule is an all-in-one construction scheduling software." />
        </>
      ),
    },
  };
}
