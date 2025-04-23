import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Refersion"
      description={`Refersion is a tracking platform helping merchants start, manage, and grow affiliate networks. This integration is for merchant accounts.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/refersion.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Refersion Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(91, 196, 94, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Refersion is a tracking platform helping merchants start, manage, and grow affiliate networks. This integration is for merchant accounts.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Affiliate</div>
  <div>Triggers when a new Affiliate is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Conversion Cancellation</div>
  <div>Send conversion cancellation information.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Affiliate</div>
  <div>Creates a new affiliate and returns the affiliate ID and their referral link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Affiliate</div>
  <div>Get Affiliate By Affiliate Code.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Order to Refersion</div>
  <div>Adds orders into Refersion for attribution processing. Refersion will create a conversion if the order was successfully tracked back to an affiliate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Affiliate</div>
  <div>Find affiliate based on email address or ID.</div>
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
          <title>Refersion</title>
          <meta name="description" content={`Refersion is a tracking platform helping merchants start, manage, and grow affiliate networks. This integration is for merchant accounts.`} />
        </>
      ),
    },
  };
}
