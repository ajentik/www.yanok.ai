import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CRM in Cloud"
      description="CRM in Cloud offers contact management, marketing automation, quote generation, analytics, telephony integration, sales force management with a modern and easy to use interface."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/crm-in-cloud.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CRM in Cloud Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 255, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">CRM in Cloud offers contact management, marketing automation, quote generation, analytics, telephony integration, sales force management with a modern and easy to use interface.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Activity</div>
  <div>Triggers when a given action is performed on Activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Anagraphics Emails in List</div>
  <div>Triggers when a change is detected into the email of Anagraphics contained into the given list ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Catalog</div>
  <div>Triggers when a given action is performed on Catalog.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Company</div>
  <div>Triggers when a given action is performed on Company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Contact</div>
  <div>Triggers when a given action is performed on Contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Lead</div>
  <div>Triggers when a given action is performed on Lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Opportunity</div>
  <div>Triggers when a given action is performed on Opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Quote</div>
  <div>Triggers when a given action is performed on Quote.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Activity</div>
  <div>Creates a new Activity, or update an exising one specifying its ID field value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Catalog</div>
  <div>Creates a new Catalog, or update an exising one specifying its ID field value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Company</div>
  <div>Creates a new Company, or update an exising one specifying its ID field value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Contact</div>
  <div>Creates a new Contact, or update an exising one specifying its ID field value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Lead</div>
  <div>Creates a new Lead, or update an exising one specifying its ID field value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Opportunity</div>
  <div>Creates a new Opportunity, or update an exising one specifying its ID field value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Quote</div>
  <div>Creates a new Quote, or update an exising one specifying its ID field value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Activity</div>
  <div>Search a Activity given a set of criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Anagraphic Emails in List</div>
  <div>Search an email item Anagraphic given a set of criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Catalog</div>
  <div>Search a Catalog given a set of criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Search a Company given a set of criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Search a Contact given a set of criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead</div>
  <div>Search a Lead given a set of criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Opportunity</div>
  <div>Search a Opportunity given a set of criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Quote</div>
  <div>Search a Quote given a set of criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Activity</div>
  <div>Search a Activity given a set of criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Catalog</div>
  <div>Search a Catalog given a set of criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Company</div>
  <div>Search a Company given a set of criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Search a Contact given a set of criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Lead</div>
  <div>Search a Lead given a set of criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Opportunity</div>
  <div>Search a Opportunity given a set of criteria.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Quote</div>
  <div>Search a Quote given a set of criteria.</div>
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
          <title>CRM in Cloud</title>
          <meta name="description" content="CRM in Cloud offers contact management, marketing automation, quote generation, analytics, telephony integration, sales force management with a modern and easy to use interface." />
        </>
      ),
    },
  };
}
