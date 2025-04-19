import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Sub-Zap by Zapier"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sub-zap-by-zapier.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Sub-Zap by Zapier Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Build reusable Zap components and systems by building and calling "Sub-Zaps".</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Start a Sub-Zap</div>
  <div>Triggers when an outside Zap calls this Sub-Zap. Always used inside of a Sub-Zap. A later step in the Sub-Zap should be the "Return from a Sub-Zap" action.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Call a Sub-Zap</div>
  <div>Used outside of a Sub-Zap, this will activate a Sub-Zap, which should contain both the "Start a Sub-Zap" trigger and "Return from a Sub-Zap" action.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Return From a Sub-Zap</div>
  <div>Used inside of a Sub-Zap, this is the final step of a Sub-Zap and should be after the "Start a Sub-Zap" trigger.</div>
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
          <title>Sub-Zap by Zapier</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
