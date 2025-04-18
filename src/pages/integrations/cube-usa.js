import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="cube-usa"
      description="Cube is comprehensive business management software for the building automation controls (BAC) industry. Developed by controls contractors for controls contractors, Cube reduces paperwork and costs while streamlining efficiency and boosting revenue."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/cube-usa.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        cube-usa Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(128, 189, 1, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Cube is comprehensive business management software for the building automation controls (BAC) industry. Developed by controls contractors for controls contractors, Cube reduces paperwork and costs while streamlining efficiency and boosting revenue.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Cube Edge Customer</div>
  <div>Trigger when customers were inserted or updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Cube Edge Project</div>
  <div>Trigger when projects were inserted or updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Cube TImesheet</div>
  <div>Trigger when timesheets were inserted or updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Cube Edge Vendor</div>
  <div>Trigger when vendors were inserted or updated</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Update Cube Edge Synchronization Status</div>
  <div>Update Cube Edge Synchronization Status</div>
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
          <title>cube-usa</title>
          <meta name="description" content="Cube is comprehensive business management software for the building automation controls (BAC) industry. Developed by controls contractors for controls contractors, Cube reduces paperwork and costs while streamlining efficiency and boosting revenue." />
        </>
      ),
    },
  };
}
