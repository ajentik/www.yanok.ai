import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Appspotr"
      description="Appspotr lets you create smartphone apps visually without coding. It is a cheaper, faster and easier way of creating and maintaining native IOS and Android apps and PWAs."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/appspotr.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Appspotr Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 240, 170, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Appspotr lets you create smartphone apps visually without coding. It is a cheaper, faster and easier way of creating and maintaining native IOS and Android apps and PWAs.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Dataset Item in Dataset</div>
  <div>Triggers when an item is deleted in a Dataset.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Dataset in App</div>
  <div>Triggers when a new Dataset is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Dataset Item in Dataset</div>
  <div>Triggers when a new Dataset item is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Dataset Item in Dataset</div>
  <div>Triggers when a Dataset Item is updated in a Dataset.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Dataset Item</div>
  <div>Creates a Dataset Item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Dataset Item</div>
  <div>Deletes an item in a Dataset by Item ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Dataset Item</div>
  <div>Updates an item in a Dataset by Item ID</div>
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
          <title>Appspotr</title>
          <meta name="description" content="Appspotr lets you create smartphone apps visually without coding. It is a cheaper, faster and easier way of creating and maintaining native IOS and Android apps and PWAs." />
        </>
      ),
    },
  };
}
