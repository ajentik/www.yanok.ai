import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="webCRM"
      description="webCRM helps your sales team with the daily workflow and overview."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/webcrm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        webCRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(22, 181, 130, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">webCRM helps your sales team with the daily workflow and overview.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Activity</div>
  <div>Triggers when an activity is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delivery</div>
  <div>Triggers when a delivery is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Document</div>
  <div>Triggers when a document is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Meeting</div>
  <div>Triggers when a meeting is created, updated, or cancelled. Notify meeting - can trigger before the meeting starts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opportunity</div>
  <div>Triggers when an opportunity is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Organisation</div>
  <div>Triggers when an organisation is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person (B2C)</div>
  <div>Triggers when a person is created or updated in B2C version.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person</div>
  <div>Triggers when a person is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Product</div>
  <div>Triggers when a product is created or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Support Case</div>
  <div>Triggers when a support case is created or updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Activity</div>
  <div>Creates or updates an activity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Delivery</div>
  <div>Creates or updates a delivery.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Document</div>
  <div>Creates or updates a document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Meeting</div>
  <div>Creates a meeting.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Opportunity</div>
  <div>Creates or updates an opportunity.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Organisation</div>
  <div>Creates or updates an organisation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Person (B2C)</div>
  <div>Creates or updates a person (B2C).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Person</div>
  <div>Creates or updates a person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Product</div>
  <div>Creates or updates a product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update Support Case</div>
  <div>Creates or updates a support case.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Delivery</div>
  <div>Finds a delivery.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Document</div>
  <div>Finds a document.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Organisation</div>
  <div>Finds an organisation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person (B2C)</div>
  <div>Finds a person (B2C).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Finds a person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds a user.</div>
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
          <title>webCRM</title>
          <meta name="description" content="webCRM helps your sales team with the daily workflow and overview." />
        </>
      ),
    },
  };
}
