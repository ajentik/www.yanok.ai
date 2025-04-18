import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="iDenfy"
      description="iDenfy helps you automate identity verification enforced with manual oversight. Defeat fraud while processing customers' data quickly and securely."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/idenfy.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        iDenfy Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(68, 93, 235, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">iDenfy helps you automate identity verification enforced with manual oversight. Defeat fraud while processing customers\' data quickly and securely.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Identity Verification</div>
  <div>Triggers when new identity verification is completed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">AML Search</div>
  <div>Search sanctions and politically exposed persons</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Identity Verification</div>
  <div>Verify the customer\'s identity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Identification Status</div>
  <div>Get overall idetification status by unique identification identifier ("scanRef").</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Identification Data</div>
  <div>Get identification data by unique identification identifier ("scanRef")</div>
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
          <title>iDenfy</title>
          <meta name="description" content="iDenfy helps you automate identity verification enforced with manual oversight. Defeat fraud while processing customers' data quickly and securely." />
        </>
      ),
    },
  };
}
