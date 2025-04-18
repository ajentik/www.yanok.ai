import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Dispatcher"
      description="Dispatcher is a resource management software for construction."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/dispatcher.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Dispatcher Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(231, 0, 76, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Dispatcher is a resource management software for construction.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Asset</div>
  <div>Triggers when a new asset is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Category</div>
  <div>Triggers when a new category is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Certification Folder</div>
  <div>Triggers when a new certification folder is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Certification Type</div>
  <div>Triggers when a new certification type is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Group</div>
  <div>Triggers when a new group is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Internal Personnel</div>
  <div>Triggers when a new internal personnel is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Role</div>
  <div>Triggers when a new role is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Site</div>
  <div>Triggers when a new site is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Supplier</div>
  <div>Triggers when a supplier is added to your scope.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unavailability Type</div>
  <div>Triggers when a new unavailability type is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Asset</div>
  <div>Creates a new asset.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Certificate</div>
  <div>Creates a new certificate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Certification Folder</div>
  <div>Creates a new certification folder.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Certification Type</div>
  <div>Creates a new certification type.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a site contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Site</div>
  <div>Creates a new site.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Unavailability</div>
  <div>Creates a new unavailability.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Asset</div>
  <div>Updates an existing asset.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Site</div>
  <div>Updates an existing site.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Unavailability</div>
  <div>Updates an existing unavailability.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Asset</div>
  <div>Finds an asset thanks to a customer unique reference.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Site</div>
  <div>Finds a site thanks to a customer unique reference.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Asset</div>
  <div>Finds an asset thanks to a customer unique reference.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or create site</div>
  <div>Finds a site thanks to a customer unique reference.</div>
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
          <title>Dispatcher</title>
          <meta name="description" content="Dispatcher is a resource management software for construction." />
        </>
      ),
    },
  };
}
