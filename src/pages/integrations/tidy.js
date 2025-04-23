import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="TIDY"
      description={`TIDY lets you book and manage cleaning and maintenance for homes, offices, or rental properties.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/tidy.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        TIDY Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(68, 183, 167, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">TIDY lets you book and manage cleaning and maintenance for homes, offices, or rental properties.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Address</div>
  <div>Triggers when a new address is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Job</div>
  <div>Triggers when a new Job is added or when a job is updated to a new status (if you use the status filter).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New To-Do List</div>
  <div>Triggers when there is an new To-Do List created in TIDY.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Pro</div>
  <div>Adds a pro to your priority list for all addresses in your account. Useful if you want to sync Pro information from another application into TIDY.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Job</div>
  <div>Cancels an existing job in your TIDY account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Address</div>
  <div>Adds an address to a TIDY account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Job</div>
  <div>Adds a job to an address in your TIDY account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Job</div>
  <div>Updates to-do lists or other details for an existing job in your TIDY account.</div>
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
          <title>TIDY</title>
          <meta name="description" content={`TIDY lets you book and manage cleaning and maintenance for homes, offices, or rental properties.`} />
        </>
      ),
    },
  };
}
