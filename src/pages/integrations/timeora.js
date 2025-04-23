import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TimeORA"
      description={`TimeORA is a clock in, clock out application that allows employees to digitally track their employees working hours without the need for paper timesheets.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/timeora.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TimeORA Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(142, 170, 217, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">TimeORA is a clock in, clock out application that allows employees to digitally track their employees working hours without the need for paper timesheets.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">User Completes a Shift</div>
  <div>Triggers when a user completes a shift.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Starts or Stops a Work or Break Timer</div>
  <div>Triggers when a user starts or stops a work or break timer.</div>
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
          <title>TimeORA</title>
          <meta name="description" content={`TimeORA is a clock in, clock out application that allows employees to digitally track their employees working hours without the need for paper timesheets.`} />
        </>
      ),
    },
  };
}
