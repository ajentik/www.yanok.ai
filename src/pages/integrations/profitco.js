import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Profit.co"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/profitco.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Profit.co Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(33, 150, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Profit is a comprehensive software solution to define Objectives & Key Results (OKRs) at every level of your organisation. Connect all of your apps with Profit.co. Profit integrates your OKRs with your favourite apps to update your tasks without any manual entry.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Objective</div>
  <div>Triggers when a new objective is created in profit.co.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Employee</div>
  <div>This creates an employee with Profit.co</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create KeyResult</div>
  <div>This action create a keyresult with Profit.co</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Objective</div>
  <div>This action creates an Objective in Profit.co</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>This action creates a task in Profit.co</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>This action updates a task in Profit.co</div>
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
          <title>Profit.co</title>
        </>
      ),
    },
  };
}
