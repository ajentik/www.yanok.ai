import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AlterEstate"
      description={`AlterEstate is a software for Real Estate Agencies to help them connect and build strong relationships with their clients.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/alterestate.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AlterEstate Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(16, 48, 72, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AlterEstate is a software for Real Estate Agencies to help them connect and build strong relationships with their clients.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Form Entry</div>
  <div>Triggers when any visitor completes the form.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead on Round Robin</div>
  <div>A new lead is a assigned through a Round Robin.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Creates a Contact and a Deal inside your company.</div>
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
          <title>AlterEstate</title>
          <meta name="description" content={`AlterEstate is a software for Real Estate Agencies to help them connect and build strong relationships with their clients.`} />
        </>
      ),
    },
  };
}
