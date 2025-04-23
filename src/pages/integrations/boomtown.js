import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="BoomTown"
      description={`BoomTown is a software platform designed to help real estate professionals generate leads, manage contacts, and run their business better.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/boomtown.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        BoomTown Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(251, 132, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">BoomTown is a software platform designed to help real estate professionals generate leads, manage contacts, and run their business better.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Call Logged</div>
  <div>Triggers when a call is logged for one of your assigned leads.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Category Changed</div>
  <div>Triggers when a category is changed for one of your assigned leads.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Received</div>
  <div>Triggers when you receive a email from one of your assigned leads.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lead Asked Question</div>
  <div>Triggers when a lead submits a web inquiry or question on your BoomTown site.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added</div>
  <div>Triggers when a tag is added to an assigned lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Removed</div>
  <div>Triggers when a tag is removed from an assigned lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Text Received</div>
  <div>Triggers when you receive a text message from one of your assigned leads.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">To-Do Created</div>
  <div>Triggers when a To-Do is created for an assigned lead.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Lead</div>
  <div>Creates a new lead or updates an existing lead.</div>
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
          <title>BoomTown</title>
          <meta name="description" content={`BoomTown is a software platform designed to help real estate professionals generate leads, manage contacts, and run their business better.`} />
        </>
      ),
    },
  };
}
