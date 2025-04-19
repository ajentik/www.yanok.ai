import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AssessTEAM"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/assessteam.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AssessTEAM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AssessTEAM is a cloud-based performance management & productivity analysis software. We deliver traditional annual reviews, 360-degree feedback, real-time reviews, continuous feedback, project performance evaluation and team profitability analysis.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Person</div>
  <div>This action is used to add a new person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Timesheet</div>
  <div>This action is used to add a new timesheet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Person</div>
  <div>This action is used to delete an existing person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Evaluations Report</div>
  <div>This action is used to get evaluations report based on your selected criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Performance Indicators Report</div>
  <div>This action is used to get performance indicators report based on your selected criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Persons Report</div>
  <div>This action is used to get persons report based on your selected criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Result Areas Report</div>
  <div>This action is used to get result areas report based on your selected criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Teams Report</div>
  <div>This action is used to get teams report based on your selected criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person</div>
  <div>This action is used to update an existing person.</div>
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
          <title>AssessTEAM</title>
        </>
      ),
    },
  };
}
