import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pxmo"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pxmo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pxmo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(17, 35, 51, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Pxmo is an app for creating compelling proposals.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Accepted</div>
  <div>Triggers when a proposal is accepted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Archived</div>
  <div>Triggers when a Proposal is archived.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Callback</div>
  <div>Triggers when a callback is requested on a Proposal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Created</div>
  <div>Triggers when a new Proposal is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Live</div>
  <div>Triggers when a Proposal goes live.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Payment Succeeded</div>
  <div>Triggers when an accepted proposal is paid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Restored</div>
  <div>Triggers when an archived Proposal is restored (unarchived).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposal Viewed</div>
  <div>Triggers when a Proposal is viewed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Proposal</div>
  <div>Creates a new Proposal</div>
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
          <title>Pxmo</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
