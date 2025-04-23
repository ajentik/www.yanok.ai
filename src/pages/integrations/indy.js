import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Indy"
      description={`Indy is a productivity platform that helps you manage your freelance business through marketing, workflow, and payment tools.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/indy.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Indy Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(76, 54, 177, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Indy is a productivity platform that helps you manage your freelance business through marketing, workflow, and payment tools.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Client Created</div>
  <div>Triggers when a new client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contract Signed</div>
  <div>Triggers when a contract is signed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contract Viewed</div>
  <div>Triggers when a contract is viewed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Form Response</div>
  <div>Triggers when a new form response arrives.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deposit Paid</div>
  <div>Triggers when an invoice deposit is paid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Paid</div>
  <div>Triggers when an invoice is paid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Viewed</div>
  <div>Triggers when an invoice is viewed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Milestone Marked Done</div>
  <div>Triggers when a milestone is marked done.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Milestone Created</div>
  <div>Triggers when a milestone is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Created</div>
  <div>Triggers when a project has been created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Marked Done</div>
  <div>Triggers when a project is marked done.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Approved</div>
  <div>Triggers when a proposal is approved.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Viewed</div>
  <div>Triggers when a proposal is viewed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Marked Done</div>
  <div>Triggers when a task is marked done.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Task Created</div>
  <div>Triggers when a task is created.</div>
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
          <title>Indy</title>
          <meta name="description" content={`Indy is a productivity platform that helps you manage your freelance business through marketing, workflow, and payment tools.`} />
        </>
      ),
    },
  };
}
