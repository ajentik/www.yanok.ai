import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Workboard"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/workboard.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Workboard Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(81, 187, 214, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Workboard is the team performance app managers choose for themselves: goals, priorities, actions, reports and feedback aligned in one easy app.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Action Item</div>
  <div>Triggers when you select an action item on Workboard and push it to your Zap.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment in Action Item</div>
  <div>Triggers when a new comment is added in action item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment in Goal</div>
  <div>Triggers when a new comment is added in a goal</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Goal</div>
  <div>Triggers when you select a goal on Workboard and push it to your Zap.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Meeting</div>
  <div>Triggers when you create a team meeting or 1on1 meeting on Workboard.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Workstream</div>
  <div>Triggers when you select a workstream on Workboard and push it to your Zap.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Team</div>
  <div>Creates a new team</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Workstream</div>
  <div>Creates a new Workstream</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Action Item</div>
  <div>Create an action item in Workboard</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Goal Metric</div>
  <div>Update a metrics assigned to a goal in Workboard</div>
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
          <title>Workboard</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
