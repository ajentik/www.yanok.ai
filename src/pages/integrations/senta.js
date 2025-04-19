import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Senta"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/senta.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Senta Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(11, 135, 209, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Senta is a cloud practice management software including marketing, workflow, email automation, secure documents and insights for accountants and bookkeepers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Client Added</div>
  <div>Triggers when a new client is added in Senta.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Updated in Senta</div>
  <div>Triggers when a client is updated in Senta.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Cancelled</div>
  <div>Triggers when a job is cancelled in Senta.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Completed</div>
  <div>Triggers when a job is completed in Senta.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Created</div>
  <div>Triggers when a job is created in Senta.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Becomes Overdue</div>
  <div>Triggers when a job becomes overdue in Senta.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Becomes Ready</div>
  <div>Triggers when a job becomes ready in Senta.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Job Updated</div>
  <div>Triggers when a job is updated in Senta.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time Record Created</div>
  <div>Triggers when a time record is created in Senta.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Time Record Updated</div>
  <div>Triggers when a time record is updated in Senta.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Accept Proposal</div>
  <div>Accept a proposal sent to a prospect</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Client</div>
  <div>Create a new client in Senta</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Note</div>
  <div>Create a new note for a client in Senta</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Client</div>
  <div>Update a client in Senta</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Client</div>
  <div>Find a client by name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Client</div>
  <div>Find a client by name</div>
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
          <title>Senta</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
