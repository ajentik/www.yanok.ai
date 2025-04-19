import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Kontent.ai"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/kontentai.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Kontent.ai Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(61, 204, 168, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Kontent.ai is a Content-as-a-Service platform that gives you all the headless CMS benefits while empowering marketers at the same time.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Taxonomy Group Changed</div>
  <div>Triggers when a taxonomy group is created, deleted, updated, or restored.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Variant Published Status Changed</div>
  <div>Triggers when a language variant is published or unpublished.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Variant Created, Deleted or Restored</div>
  <div>Triggers when a language variant is created, deleted, or restored.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Variant Workflow Step Changed</div>
  <div>Triggers when a language variant workflow step changes.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Change Language Variant Workflow Step</div>
  <div>Changes a language variant\'s workflow.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Content Item</div>
  <div>Creates a content item and language variant using Kontent Management API. The created item is not published, but only in the Draft workflow step.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Language Variant</div>
  <div>Deletes an existing language variant using Kontent Management API.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Language Variant</div>
  <div>Updates a language variant using Kontent Management API.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Asset</div>
  <div>Finds an asset based on its ID or external ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Content Item</div>
  <div>Finds a content item matching the provided parameters. If more items match, it returns the first found item.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Language</div>
  <div>Finds a language based on its ID, code name, or external ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Workflow Step</div>
  <div>Finds a workflow step based on its name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or create content item</div>
  <div>Finds a content item matching the provided parameters. If more items match, it returns the first found item.</div>
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
          <title>Kontent.ai</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
