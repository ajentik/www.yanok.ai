import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CosmoLex"
      description={`CosmoLex is law practice management software with built-in accounting, timekeeping, invoicing, document/email management, and matter workflows.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/cosmolex.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CosmoLex Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(20, 192, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">CosmoLex is law practice management software with built-in accounting, timekeeping, invoicing, document/email management, and matter workflows.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created in the firm.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new event is created in the firm.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is created in the firm.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice Payment</div>
  <div>Triggers when a new invoice payment is received by the firm.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Matter</div>
  <div>Triggers when a new matter is created in the firm.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when a new note is created in the firm.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Timecard</div>
  <div>Triggers when a new timecard is created in the firm.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when a new task is created in the firm.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Soft Cost</div>
  <div>Triggers when a new SoftCost is created in the firm.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Event</div>
  <div>Creates a new Event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Matter</div>
  <div>Creates a new matter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Creates a new note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Soft Cost</div>
  <div>Creates a new soft cost.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Timecard</div>
  <div>Creates a new timecard.</div>
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
          <title>CosmoLex</title>
          <meta name="description" content={`CosmoLex is law practice management software with built-in accounting, timekeeping, invoicing, document/email management, and matter workflows.`} />
        </>
      ),
    },
  };
}
