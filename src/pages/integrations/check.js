import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Check"
      description={`Check is an open source web platform for collaborative fact-checking and annotation.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/check.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Check Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(46, 119, 247, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Check is an open source web platform for collaborative fact-checking and annotation.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Folder</div>
  <div>Triggers when a new folder is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Published Report</div>
  <div>Triggers when a report is published in any workspace this API key has access to through the shared database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tag</div>
  <div>Triggers when a new tag is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags</div>
  <div>Add tag(s) to a Check item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Change Status</div>
  <div>Set an item\'s status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Claim</div>
  <div>Creates a claim in a Check workspace.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Imported Report</div>
  <div>Creates an imported report in a Check workspace, just like its Fetch Bot does.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Link</div>
  <div>Creates a link in a Check workspace</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Publish Text Report</div>
  <div>Creates and publishes a text report for a Check item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Analysis</div>
  <div>Set analysis (title and content) for an item.</div>
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
          <title>Check</title>
          <meta name="description" content={`Check is an open source web platform for collaborative fact-checking and annotation.`} />
        </>
      ),
    },
  };
}
