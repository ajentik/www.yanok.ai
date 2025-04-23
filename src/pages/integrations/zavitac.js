import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zavitac"
      description={`Zavitac is an easy-to-use yet amazingly capable CRM platform that engages your whole team to win deals faster.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zavitac.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zavitac Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(55, 126, 235, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Zavitac is an easy-to-use yet amazingly capable CRM platform that engages your whole team to win deals faster.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when a new activity is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a new deal is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Organization</div>
  <div>Triggers when a new organization is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new person/contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Activity</div>
  <div>Triggers when an Activity was updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Deal</div>
  <div>Triggers when a deal was updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Deal Status</div>
  <div>Triggers when a deal status has been updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Deal Stage</div>
  <div>Triggers when a deal stage has been updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Organization</div>
  <div>Triggers when an organization has been updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Person</div>
  <div>Triggers when a person/contact has been updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Activity</div>
  <div>Creates a new Activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Deal</div>
  <div>Creates a new deal</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Organization</div>
  <div>Creates a new organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Person</div>
  <div>Creates a new person (contact).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Creates a Product</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update an Activity</div>
  <div>Takes an activity ID as input, and updates the fields to the given inputs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Deal</div>
  <div>Takes a deal ID as input, and updates the fields to the given inputs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update an Organization</div>
  <div>Takes a contact organization ID as input, and updates the fields to the given inputs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Person</div>
  <div>Takes a Contact People ID as input, and updates the fields to the given inputs.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Activities</div>
  <div>Finds activities based on a filter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Deals</div>
  <div>Finds deals based on a filter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Organizations</div>
  <div>Searches an Organization</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for People</div>
  <div>Finds people based on a filter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for Products</div>
  <div>Finds products based on a filter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Deal</div>
  <div>Finds deals based on a filter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Organization</div>
  <div>Searches an Organization</div>
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
          <title>Zavitac</title>
          <meta name="description" content={`Zavitac is an easy-to-use yet amazingly capable CRM platform that engages your whole team to win deals faster.`} />
        </>
      ),
    },
  };
}
