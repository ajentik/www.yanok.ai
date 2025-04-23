import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Pipedrive"
      description={`Pipedrive is sales pipeline and CRM software for deal makers. Get super-organized. Close deals in less time. iOS and Android apps let you take your pipeline with you anywhere.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/pipedrive.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Pipedrive Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(65, 65, 67, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Pipedrive is sales pipeline and CRM software for deal makers. Get super-organized. Close deals in less time. iOS and Android apps let you take your pipeline with you anywhere.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when a new activity is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Activity Matching Filter</div>
  <div>Triggers when an activity matches a Pipedrive filter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a new deal is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Matching Filter</div>
  <div>Triggers when a deal matches a Pipedrive filter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a Lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when a new note is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Organization</div>
  <div>Triggers when a new organization is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Organization Matching Filter</div>
  <div>Triggers when an organization matches a Pipedrive filter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new person is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Matching Filter</div>
  <div>Triggers when a person matches a Pipedrive filter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Deal Stage</div>
  <div>Triggers when a deal\'s stage is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Deal</div>
  <div>Triggers when an existing deal is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Organization</div>
  <div>Triggers when an existing organization is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Person</div>
  <div>Triggers when an existing person is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Product to Deal</div>
  <div>Adds a product to a deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Creates a new activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a new deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Attach File</div>
  <div>Uploads a file and attaches it to a deal, person, organization, activity, product or note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Follower</div>
  <div>Adds a follower to a deal, organization, person or product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Creates a new lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Creates a new note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Organization</div>
  <div>Creates a new organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person</div>
  <div>Creates a new person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a new product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Activity</div>
  <div>Updates an existing activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal</div>
  <div>Updates an existing deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Updates an existing lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Organization</div>
  <div>Updates an existing organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person</div>
  <div>Updates an existing person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Activity</div>
  <div>Finds an activity by subject.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Deal</div>
  <div>Finds a deal by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Lead</div>
  <div>Finds a lead by title or field value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Organization</div>
  <div>Finds an organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Finds a person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product</div>
  <div>Finds a product by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product(s)</div>
  <div>Finds a product or products by name, ID, or product code (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds a user by name, email or ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Activity</div>
  <div>Finds an activity by subject, or creates one if none is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Deal</div>
  <div>Finds a deal by name, or creates one if none is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Lead</div>
  <div>Finds a lead by name, or creates one if none is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Organization</div>
  <div>Finds an organization by name, or creates one if none is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Person</div>
  <div>Finds a person by name, or creates one if none is found.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Product</div>
  <div>Finds a product by name, or creates one if none are found.</div>
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
          <title>Pipedrive</title>
          <meta name="description" content={`Pipedrive is sales pipeline and CRM software for deal makers. Get super-organized. Close deals in less time. iOS and Android apps let you take your pipeline with you anywhere.`} />
        </>
      ),
    },
  };
}
