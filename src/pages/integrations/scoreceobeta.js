import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ScoreCEO"
      description="ScoreCEO is a Credit Repair Business CRM SAAS that helps Credit Repair companies start, run, and grow their business."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/scoreceobeta.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ScoreCEO Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(39, 192, 215, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ScoreCEO is a Credit Repair Business CRM SAAS that helps Credit Repair companies start, run, and grow their business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Added Affiliate</div>
  <div>Triggers when Added New Affiliate in your portal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Added Consumer</div>
  <div>Triggers when Added Consumer into your portal using add existing consumer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Added Consumer Invoice</div>
  <div>Triggers when Added Consumer Invoice by System or by CRO.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Added Lead</div>
  <div>Triggers when Added New Lead into your portal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Affiliate</div>
  <div>Triggers when Updated an Affiliate in your portal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Consumer</div>
  <div>Triggers when Update Consumer when a customer is changed in portal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Lead</div>
  <div>Triggers when a lead is updated in our system.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Lead Status</div>
  <div>Triggers when a lead/Consumer status changes in your Portal.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Affiliate</div>
  <div>Add Affiliate agent into your portal</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Consumer</div>
  <div>Adds a new consumer in your portal with Paid status and plan</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add New Lead</div>
  <div>Will add new customer in system from outer source</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Affiliate</div>
  <div>Update Affiliate already in the portal , Office Name is a must input here</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Consumer</div>
  <div>Update Consumer for the new consumer being added in the Portal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Lead</div>
  <div>Update the fields in lead in your Portal</div>
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
          <title>ScoreCEO</title>
          <meta name="description" content="ScoreCEO is a Credit Repair Business CRM SAAS that helps Credit Repair companies start, run, and grow their business." />
        </>
      ),
    },
  };
}
