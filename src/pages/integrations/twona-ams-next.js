import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Twona AMS - NeXT"
      description={`Twona AMS is an intuitive Workflow, Design, Communication & Version Management Software that maximizes productivity for teams of any size. Centralize workflows, proof packaging, automate processes, request internal/external approvals, make your Artwork Management foolproof.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/twona-ams-next.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Twona AMS - NeXT Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(41, 65, 237, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Twona AMS is an intuitive Workflow, Design, Communication & Version Management Software that maximizes productivity for teams of any size. Centralize workflows, proof packaging, automate processes, request internal/external approvals, make your Artwork Management foolproof.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Version</div>
  <div>Triggers when a new version is uploaded into the system.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Request</div>
  <div>Triggers when a requests is created in Twona.</div>
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
          <title>Twona AMS - NeXT</title>
          <meta name="description" content={`Twona AMS is an intuitive Workflow, Design, Communication & Version Management Software that maximizes productivity for teams of any size. Centralize workflows, proof packaging, automate processes, request internal/external approvals, make your Artwork Management foolproof.`} />
        </>
      ),
    },
  };
}
