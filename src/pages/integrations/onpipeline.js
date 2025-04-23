import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Onpipeline"
      description={`Onpipeline is a cloud based Sales CRM for small and medium businesses.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/onpipeline.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Onpipeline Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(32, 32, 32, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Onpipeline is a cloud based Sales CRM for small and medium businesses.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Deal Is Won</div>
  <div>Triggers when a deal is updated as won</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a new deal is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new calendar event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Organization</div>
  <div>Triggers when a new organization is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person</div>
  <div>Triggers when a new contact person is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Organization</div>
  <div>Triggers when organizations are updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Deal</div>
  <div>Triggers when deals are updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Event</div>
  <div>Triggers when calendar events are updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Person</div>
  <div>Triggers when persons are updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Organization</div>
  <div>Add a new Organization</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Person</div>
  <div>Add a new Person</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Deal</div>
  <div>Creates a new deal</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Lead (Leads In)</div>
  <div>Creates a new Lead in the CRM (Leads IN)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal</div>
  <div>Updates existing Deals</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Organization</div>
  <div>Updates an organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person</div>
  <div>Updates a person record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Organization</div>
  <div>Finds an Organization in Onpipeline.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Finds a Person in Onpipeline</div>
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
          <title>Onpipeline</title>
          <meta name="description" content={`Onpipeline is a cloud based Sales CRM for small and medium businesses.`} />
        </>
      ),
    },
  };
}
