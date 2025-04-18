import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Funnelytics"
      description="Funnelytics is a visual customer journey analytics tool that lets you map your journey on a whiteboard and overlay data to see how it's actually performing."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/funnelytics.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Funnelytics Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 155, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Funnelytics is a visual customer journey analytics tool that lets you map your journey on a whiteboard and overlay data to see how it\'s actually performing.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Custom Action</div>
  <div>Track any kind of action that you want with the flexibility of the custom action</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Form Submission</div>
  <div>Track form submissions.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Action</div>
  <div>Track transaction actions, like purchases or refunds.</div>
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
          <title>Funnelytics</title>
          <meta name="description" content="Funnelytics is a visual customer journey analytics tool that lets you map your journey on a whiteboard and overlay data to see how it's actually performing." />
        </>
      ),
    },
  };
}
