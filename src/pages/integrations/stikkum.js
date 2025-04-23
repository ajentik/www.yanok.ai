import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Stikkum"
      description={`Stikkum is a platform for the mortgage industry with retention alerts and automation that continuously monitors a mortgage broker’s client base.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/stikkum.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Stikkum Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(253, 142, 66, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Stikkum is a platform for the mortgage industry with retention alerts and automation that continuously monitors a mortgage broker’s client base.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Credit Monitoring Alerts</div>
  <div>Triggers when a new credit monitoring alert is generated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get iList Alerts</div>
  <div>Triggers when a new iList alert is generated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get iSight Alerts</div>
  <div>Triggers when a new iSight alert is generated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Save Leads</div>
  <div>You can save new leads information in your stikkum database</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Self Pull Leads</div>
  <div>prevents getting alerts for the specific Leads for the next 24 hours</div>
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
          <title>Stikkum</title>
          <meta name="description" content={`Stikkum is a platform for the mortgage industry with retention alerts and automation that continuously monitors a mortgage broker’s client base.`} />
        </>
      ),
    },
  };
}
