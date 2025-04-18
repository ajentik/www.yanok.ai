import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PersistIQ"
      description="PersistIQ is software for effective outbound sales that combines communication and workflow into one easy to use system."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/persistiq.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PersistIQ Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(2, 151, 178, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">PersistIQ is software for effective outbound sales that combines communication and workflow into one easy to use system.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Prospect</div>
  <div>Triggers when a new prospects is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Prospect</div>
  <div>Triggers when a prospect is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Do Not Contact Domain</div>
  <div>Adds a new Do Not Contact domain.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Prospect to Campaign</div>
  <div>Adds a prospect to a campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Prospect</div>
  <div>Creates or updates a prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Prospect</div>
  <div>Creates a new prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Prospect Status</div>
  <div>Updates prospect status.</div>
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
          <title>PersistIQ</title>
          <meta name="description" content="PersistIQ is software for effective outbound sales that combines communication and workflow into one easy to use system." />
        </>
      ),
    },
  };
}
