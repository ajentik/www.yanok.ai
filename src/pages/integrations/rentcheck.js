import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="RentCheck"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/rentcheck.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        RentCheck Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(62, 79, 230, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">RentCheck is a property management tool that enables a transparent renting experience between Renters and Property Managers through easy to use and comprehensive property inspections.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Approved Inspection</div>
  <div>Triggers when an inspection is Approved</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Completed Inspection</div>
  <div>Triggers when an Inspection is completed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Created Inspection</div>
  <div>Triggers when a new inspection is available in your account. Does not include Scheduled inspections greater than 14 days out.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Maintenance Report Created</div>
  <div>Triggers when a new maintenance report is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unit Added</div>
  <div>Triggers when a new unit is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Inspection Submitted for Review</div>
  <div>Triggers when an inspection is submitted for review.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Inspection</div>
  <div>Create Inspection</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Property</div>
  <div>Creates a new property. A default room configuration is applied based on the property type (single-family or multi-family).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Resident</div>
  <div>Create resident</div>
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
          <title>RentCheck</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
