import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Workiz"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/workiz.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Workiz Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(59, 75, 82, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Workiz makes it easier than ever for service business owners to run their business, save time, make their team more efficient and their business more profitable.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Job Is Done</div>
  <div>Triggers when a job is completed and status has changed to Done</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Status Change</div>
  <div>Triggers when a job status is changed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Status Change</div>
  <div>Triggers when a lead status is changed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Job</div>
  <div>Triggers when a new job is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Job</div>
  <div>Schedules a new job in your Workiz account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Schedules a new lead in your Workiz account.</div>
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
          <title>Workiz</title>
        </>
      ),
    },
  };
}
