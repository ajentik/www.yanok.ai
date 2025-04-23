import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="QuickDesk"
      description={`QuickDesk is a simplified CRM software optimised for sales teams and professionals. Convert leads and close prospects easier than ever.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/quickdesk.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        QuickDesk Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(79, 194, 191, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">QuickDesk is a simplified CRM software optimised for sales teams and professionals. Convert leads and close prospects easier than ever.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Lead Trigger</div>
  <div>Trigger when a new recipe is created, updated or deleted.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete Multiple Leads</div>
  <div>Delete Multiple Leads.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company Lead</div>
  <div>Creates a company lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person Lead</div>
  <div>Creates a person lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Lead</div>
  <div>Delete a Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company Lead</div>
  <div>Update a Company Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person Lead</div>
  <div>Update a Person Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Leads</div>
  <div>Get Leads with specific filters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Leads</div>
  <div>Search for a lead using QuickDesk search engine.</div>
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
          <title>QuickDesk</title>
          <meta name="description" content={`QuickDesk is a simplified CRM software optimised for sales teams and professionals. Convert leads and close prospects easier than ever.`} />
        </>
      ),
    },
  };
}
