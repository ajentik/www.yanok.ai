import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="GoCanvas"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/gocanvas.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        GoCanvas Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(24, 85, 115, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">GoCanvas provides a simple, drag and drop tool for creating your own mobile forms (called GoCanvas Apps) that can be filled out by your employees on their mobile devices. Customize your own mobile inspections, work orders, time cards, invoices, waivers and much more. Instantly transmit your data to customers and colleagues to keep your business moving at the speed of digital.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Submission</div>
  <div>Triggers when a new submission is uploaded to GoCanvas for the specified app. You should have a submission to get the dynamic fields.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete Dispatch</div>
  <div>Deletes an existing Dispatch. You must know the "Description" of the Dispatch you want to delete.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Dispatch</div>
  <div>Creates a GoCanvas Dispatch. Make sure Dispatch is enabled for your GoCanvas App.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Sync Reference Data With Google Sheets</div>
  <div>Sync the selected Reference Data file with Google Sheets</div>
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
          <title>GoCanvas</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
