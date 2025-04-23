import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Laposta"
      description={`Send easy professional newsletters with Laposta.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/laposta.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Laposta Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(247, 11, 16, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Send easy professional newsletters with Laposta.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">A New Relation Has Been Added</div>
  <div>Triggers when een new relation has been added to the list in your Laposta account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">A Relation Has Been Removed</div>
  <div>Triggers when a relation of your Laposta list has been removed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">A Relation Has Been Edited</div>
  <div>Triggers when a relation of your Laposta list has been edited.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete Relation</div>
  <div>Delete an existing relation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add or Edit a Relation</div>
  <div>Edit an existing relation, or add a new relation, in your Laposta list.</div>
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
          <title>Laposta</title>
          <meta name="description" content={`Send easy professional newsletters with Laposta.`} />
        </>
      ),
    },
  };
}
