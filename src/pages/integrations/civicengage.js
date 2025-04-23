import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CivicEngage"
      description={`CivicEngage is a local-government website design and hosting platform. This platform is used by 2,500+ clients and 55,000+ local government users. CivicEngage is one product in the larger CivicPlus integrated technology platform for local government.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/civicengage.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CivicEngage Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(11, 84, 134, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">CivicEngage is a local-government website design and hosting platform. This platform is used by 2,500+ clients and 55,000+ local government users. CivicEngage is one product in the larger CivicPlus integrated technology platform for local government.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Alert Center Item</div>
  <div>Triggers when an Alert Center item is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Calendar Event</div>
  <div>Triggers when a calendar event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New News Flash Item</div>
  <div>Triggers when a News Flash Item is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Calendar Event</div>
  <div>Creates a new Calendar Event.</div>
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
          <title>CivicEngage</title>
          <meta name="description" content={`CivicEngage is a local-government website design and hosting platform. This platform is used by 2,500+ clients and 55,000+ local government users. CivicEngage is one product in the larger CivicPlus integrated technology platform for local government.`} />
        </>
      ),
    },
  };
}
