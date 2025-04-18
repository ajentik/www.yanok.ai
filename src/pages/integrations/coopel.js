import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Coopel"
      description="Coopel is a robotic process automation (RPA) tool that allows anyone to easily automate processes. The tool can be used on either the cloud or locally."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/coopel.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Coopel Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(95, 203, 226, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Coopel is a robotic process automation (RPA) tool that allows anyone to easily automate processes. The tool can be used on either the cloud or locally.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Scenario Running Complete</div>
  <div>Triggers when scenario running is complete. This applies to scenarios linked through the Coopel scenario setting page beforehand.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Run Scenario</div>
  <div>Runs selected scenario.</div>
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
          <title>Coopel</title>
          <meta name="description" content="Coopel is a robotic process automation (RPA) tool that allows anyone to easily automate processes. The tool can be used on either the cloud or locally." />
        </>
      ),
    },
  };
}
