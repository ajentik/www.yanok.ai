import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AppsForOps Timeline"
      description={`AppsForOps Timeline is a game changing Customer Success software platform. Customer Success - powered by being in the know. It provides next level visibility on customer activity spanning your organisation's people, processes and systems. It allows you to easily see the whole picture and act on what matters most.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/appsforops.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AppsForOps Timeline Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(55, 198, 245, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AppsForOps Timeline is a game changing Customer Success software platform. Customer Success - powered by being in the know. It provides next level visibility on customer activity spanning your organisation\'s people, processes and systems. It allows you to easily see the whole picture and act on what matters most.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Changed Company Metric</div>
  <div>Trigger when a company metric is changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create NPS Entry</div>
  <div>Creates a new NPS entry for the contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Timeline Entry</div>
  <div>Creates a new timeline entry to a timeline.</div>
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
          <title>AppsForOps Timeline</title>
          <meta name="description" content={`AppsForOps Timeline is a game changing Customer Success software platform. Customer Success - powered by being in the know. It provides next level visibility on customer activity spanning your organisation's people, processes and systems. It allows you to easily see the whole picture and act on what matters most.`} />
        </>
      ),
    },
  };
}
