import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="The Customer Factor"
      description={`The Customer Factor is a software where users can register, store their contacts, their appointments, invoices, etc.,`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/the-customer-factor.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        The Customer Factor Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(90, 165, 60, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">The Customer Factor is a software where users can register, store their contacts, their appointments, invoices, etc.,</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Estimate Emailed</div>
  <div>Triggered when an estimate is emailed in The Customer Factor</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Completed</div>
  <div>Triggers when a job is marked as completed in The Customer Factor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer is added to The Customer Factor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Estimate</div>
  <div>Triggered when a new estimate is scheduled in The Customer Factor</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when new invoice is created in The Customer Factor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Job</div>
  <div>Triggered when a new job is scheduled in The Customer Factor</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when an invoice is paid in The Customer Factor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Prospect</div>
  <div>Triggers when you add a new prospect in The Customer Factor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Recurring Job</div>
  <div>Triggered when a new recurring job is scheduled in The Customer Factor</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recurring Job Canceled</div>
  <div>Triggered when a recurring job is canceled in The Customer Factor</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>This action will create a customer in The Customer Factor</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Estimate</div>
  <div>This action will create an estimate in The Customer Factor</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Job or Invoice</div>
  <div>This action will create a job with or without invoice in The Customer Factor</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payment</div>
  <div>This action will make the invoice as paid in The Customer Factor</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Prospect</div>
  <div>This action will create the prospect in The Customer Factor</div>
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
          <title>The Customer Factor</title>
          <meta name="description" content={`The Customer Factor is a software where users can register, store their contacts, their appointments, invoices, etc.,`} />
        </>
      ),
    },
  };
}
