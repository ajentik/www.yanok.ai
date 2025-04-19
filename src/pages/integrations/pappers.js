import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pappers"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pappers.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pappers Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 255, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Toute l\'information des entreprises Gratuite, intelligente, complète</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Find a Company Based on Siren or Siret</div>
  <div>Retrieve the informations available of a company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Executives Based on Criteria</div>
  <div>All parameters are optional and are used to filter the search. The different executives will be returned in a results table.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Documents Based on Criteria</div>
  <div>All parameters are optional and are used to filter the search. The different documents will be returned in a results table.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Companies Based on Criteria</div>
  <div>All parameters are optional and are used to filter the search. The different companies will be returned in a results table.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find BODACC Publications Based on Criteria</div>
  <div>All parameters are optional and are used to filter the search. The different bodacc publications will be returned in a results table.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Suggestions / Autocomplete</div>
  <div>Find companies that match the start of a text search (autocomplete type).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Download a Document</div>
  <div>Download a document based on a token You must provide the document token. The document will be sent to you in a PDF format.</div>
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
          <title>Pappers</title>
        </>
      ),
    },
  };
}
