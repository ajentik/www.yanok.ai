import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Clevero"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/clevero.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Clevero Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(26, 99, 248, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Clevero is a CRM that runs your daily operations in a simple to use platform. Capture data and automate process around for your Sales, Projects, Support, Timesheets, Invoicing and much much more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Records</div>
  <div>Triggers when a new record is created in the system.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Record Entry</div>
  <div>Triggers when a new record entry is created. Ie trigger when a contact, customer, job, timesheet, task is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Record Entry</div>
  <div>This action is used if you wish to create a new entry into a record. As Kalysys uses a unique dynamic database, this action can be used for creating any record for your system. For example you can create a contact, case, job, customer, organisation, timesheet, invoice all through this single Action.</div>
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
          <title>Clevero</title>
        </>
      ),
    },
  };
}
