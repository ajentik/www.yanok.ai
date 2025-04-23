import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AccountancyManager"
      description={`AccountancyManager is a practice management software designed by accountants and used by accountants, bookkeepers, and payroll businesses across the UK.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/accountancymanager.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AccountancyManager Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(37, 162, 63, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AccountancyManager is a practice management software designed by accountants and used by accountants, bookkeepers, and payroll businesses across the UK.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Client Created</div>
  <div>Triggers when a Client is created within AccountancyManager.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Deleted</div>
  <div>Triggers when a Client is deleted within AccountancyManager.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Marked as NLAC</div>
  <div>Triggers when a Client is marked as "No Longer a Client" within AccountancyManager.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Updated</div>
  <div>Triggers when a Client/Prospect is updated within AccountancyManager.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Create a new Client within AccountancyManager</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Disable Service</div>
  <div>Disable a service for a Client within AccountancyManager.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enable Service</div>
  <div>Enable a service for a Client within AccountancyManager.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">No Longer a Client</div>
  <div>Marks a Client as NLAC.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Prospect to Client</div>
  <div>Update a Prospect to a Client within AccountancyManager.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Client</div>
  <div>Update a client within AccountancyManager</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Search</div>
  <div>Find a client by company name</div>
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
          <title>AccountancyManager</title>
          <meta name="description" content={`AccountancyManager is a practice management software designed by accountants and used by accountants, bookkeepers, and payroll businesses across the UK.`} />
        </>
      ),
    },
  };
}
