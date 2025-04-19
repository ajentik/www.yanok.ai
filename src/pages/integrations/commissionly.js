import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Commissionly"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/commissionly.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Commissionly Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 96, 145, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Commissionly is the cloud based sales commission software focused solely on the small to medium business sector.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Company/Account</div>
  <div>Triggers when a new company added in Commissionly.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Opportunity</div>
  <div>Triggers when a new opportunity is created in Commissionly.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person/Contact</div>
  <div>Triggers when a new person (people) added in Commissionly.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a new product is created in Commissionly.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Activity</div>
  <div>Used to create or update an activity in Commissionly. Remote Module and Remote ID fields must be in use for UPDATE to work and Remote Module should be Activities.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Company/Account</div>
  <div>Used to create or update a company or account in Commissionly. Remote Module and Remote ID fields must be in use for UPDATE to work and Remote Module should be be Companies.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Person/Contact</div>
  <div>Used to create or update a person or contact in Commissionly. Remote Module and Remote ID fields must be in use for UPDATE to work and Remote Module should be be People.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Event</div>
  <div>Used to create or update an event in Commissionly. Remote Module and Remote ID fields must be in use for UPDATE to work and Remote Module should be be Events.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Opportunity</div>
  <div>Used to create or update an opportunity in Commissionly. Remote Module and Remote ID fields must be in use for UPDATE to work and Remote Module should be be Opportunities.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Product</div>
  <div>Used to create or update a product in Commissionly. Remote Module and Remote ID fields must be in use for UPDATE to work and Remote Module should be be Products.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Update Lookup Table Data</div>
  <div>Used to create or update a lookup table data in Commissionly. ID field must be in use for UPDATE to work.</div>
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
          <title>Commissionly</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
