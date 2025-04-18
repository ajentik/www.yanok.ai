import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="iAppConnector for iMIS"
      description="iAppConnector creates a seamless connection between iMIS and other applications. Utilize the iMIS database contact and event manager tools with thousands of applications."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/iappconnector-for-imis.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        iAppConnector for iMIS Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(240, 124, 40, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">iAppConnector creates a seamless connection between iMIS and other applications. Utilize the iMIS database contact and event manager tools with thousands of applications.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Iqa</div>
  <div>Triggers when there are new results in the IQA.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Record Added</div>
  <div>Triggers when a new contact is added in iMIS.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact Record</div>
  <div>Triggers when a contact record is updated in iMIS. Use the track fields parameter to have the trigger fire when the field changes in iMIS.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add/Update Contact</div>
  <div>Create or change a contact record in iMIS</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Relationship</div>
  <div>Creates a Relationship, Committee Role, or Organization Role.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add/Update Addresses</div>
  <div>Adds or Updates an address in iMIS</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add/Update Panel Source</div>
  <div>Updates a panel source defined in RiSE &gt; Panel Designer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Creates a new activity in the contact record.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add/Update Company</div>
  <div>Create a Company record in iMIS</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Finds a company in iMIS.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search/Add Contact Record</div>
  <div>Search for a contact using email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search IQA Results</div>
  <div>Pulls up results from iMIS using an IQA. The results can then be used by Zapier and other apps in the Zap.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Company Record</div>
  <div>Finds a company in iMIS.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact Record</div>
  <div>Search for a contact using email address.</div>
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
          <title>iAppConnector for iMIS</title>
          <meta name="description" content="iAppConnector creates a seamless connection between iMIS and other applications. Utilize the iMIS database contact and event manager tools with thousands of applications." />
        </>
      ),
    },
  };
}
