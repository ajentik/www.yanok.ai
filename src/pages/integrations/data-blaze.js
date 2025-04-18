import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Data Blaze"
      description="Data Blaze is a spreadsheet app that can be used in any website by using snippets and templates from the companion application Text Blaze."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/data-blaze.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Data Blaze Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(224, 79, 64, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Data Blaze is a spreadsheet app that can be used in any website by using snippets and templates from the companion application Text Blaze.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Row Created</div>
  <div>Triggers when new row is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Row Created or Updated</div>
  <div>Triggers when a new row is created or an existing one is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Row Updated</div>
  <div>Triggers when an existing row is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete Row</div>
  <div>Deletes an existing row.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Row</div>
  <div>Creates a new row.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Row</div>
  <div>Updates an existing row.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Single Row</div>
  <div>Finds a single row in a given table.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Rows</div>
  <div>Finds a page of rows in a given table.</div>
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
          <title>Data Blaze</title>
          <meta name="description" content="Data Blaze is a spreadsheet app that can be used in any website by using snippets and templates from the companion application Text Blaze." />
        </>
      ),
    },
  };
}
