import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="PEP Cloud"
      description={`PEP Cloud is a sales, estimating, and business management tool for everyone, but especially painting contractors.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pep-cloud.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        PEP Cloud Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(198, 14, 40, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">PEP Cloud is a sales, estimating, and business management tool for everyone, but especially painting contractors.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Client Created</div>
  <div>Triggers when a new client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">eBid Created</div>
  <div>Triggers when an eBid is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">eBid Lost</div>
  <div>Triggers when an eBid is lost.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">eBid Won</div>
  <div>Triggers when an eBid is won.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Client</div>
  <div>Creates a new client or updates an existing client first based on email and then based on first and last name.</div>
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
          <title>PEP Cloud</title>
          <meta name="description" content={`PEP Cloud is a sales, estimating, and business management tool for everyone, but especially painting contractors.`} />
        </>
      ),
    },
  };
}
