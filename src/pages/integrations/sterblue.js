import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Sterblue"
      description="Sterblue builds software for automatic inspection of industrial assets, using drones and artificial intelligence."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sterblue.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Sterblue Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(2, 174, 242, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Sterblue builds software for automatic inspection of industrial assets, using drones and artificial intelligence.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Anomaly Evolution</div>
  <div>Triggers when a new anomaly is detected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Image Evolution</div>
  <div>Triggers when a new image is uploaded.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mission Evolution</div>
  <div>Triggers when a new mission is created, executed, uploaded or validated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assign User to Mission</div>
  <div>Assign a User to a Mission with a given role</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Structures of Mission</div>
  <div>Find Structures of Mission</div>
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
          <title>Sterblue</title>
          <meta name="description" content="Sterblue builds software for automatic inspection of industrial assets, using drones and artificial intelligence." />
        </>
      ),
    },
  };
}
