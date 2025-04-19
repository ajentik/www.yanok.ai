import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Citima"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/citima.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Citima Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(15, 94, 242, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Citima is a new, indispensable customer relation manager (crm) for real estate advisors.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Folder Completed</div>
  <div>Triggers when there is a folder 100% completed by a prospect.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Rent Lead Eligible</div>
  <div>Triggers when there is a new rent lead eligible.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Buyer Seller</div>
  <div>Triggers when there is a new buyer and seller lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inquiry</div>
  <div>Triggers when there is a new inquiry for the agency.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Transaction Lead</div>
  <div>Triggers when there is a new transaction lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Rent Lead</div>
  <div>Triggers when there is a new rent lead contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Project Updated</div>
  <div>Triggers when there is a transaction project updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Rent Project Updated</div>
  <div>Triggers when there is a rent project updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Property Created</div>
  <div>Triggers when there is a new property created (manually or programmatically).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Property Status Updated</div>
  <div>Triggers when there is an update of the status of a property (available or not).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Property Updated</div>
  <div>Triggers when there is an update for a property (manually or programmatically).</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Transaction Lead</div>
  <div>Creates a transaction lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Rent Lead</div>
  <div>Creates a rent lead.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Property Inquiries</div>
  <div>Get the inquiries list for a given property (by its internal ref or citima id).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Property Statistics</div>
  <div>get statistics of a given property by its internal ref of citima id.</div>
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
          <title>Citima</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
