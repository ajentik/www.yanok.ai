import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Kizen"
      description={`Kizen is a sales and marketing tool to collect, organize, and gain actionable insights on data.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/kizen.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Kizen Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(33, 150, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Kizen is a sales and marketing tool to collect, organize, and gain actionable insights on data.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact (V2)</div>
  <div>Triggers when a new contact is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Standard Custom Object Record (V2)</div>
  <div>Triggers when a new standard custom object record is created (v2)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Pipeline Record (V2)</div>
  <div>Triggers when a new record is created in a pipeline object.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Edit a Contact\'s Subscription List Preferences (V2)</div>
  <div>Adds a contact to a subscription list or opts out the contact to a subscription list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Standard Custom Object Record (V2)</div>
  <div>Creates a Custom Object Record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Pipeline Record (V2)</div>
  <div>Creates a Pipeline Record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Contact Record (V2)</div>
  <div>Creates a new contact record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Log Activity on a Contact (V2)</div>
  <div>Logs an Activity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Log Activity on a Custom Object (V2)</div>
  <div>Completes an Activity</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Schedule Activity for Custom Object (V2)</div>
  <div>Schedules an Activity for a Custom Object</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Schedule an Activity for a Contact (V2)</div>
  <div>Schedules an activity for a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start an Automation on a Contact (V2)</div>
  <div>Starts an Automation on a Contact Record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start an Automation on a Custom Object (V2)</div>
  <div>Starts an Automation on a Custom Object</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Contact (V2)</div>
  <div>Updates a Contact Record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Custom Object Record (V2)</div>
  <div>Updates an Object Record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Pipeline Record (V2)</div>
  <div>Updates a Pipeline Record</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact by Email (V2)</div>
  <div>Finds a Contact by searching by email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact by ID (V2)</div>
  <div>Finds a contact by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Custom Object Record by ID (V2)</div>
  <div>Finds a Custom Object by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Custom Object Record by Name (V2)</div>
  <div>Finds a Custom Object Record by Name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Pipeline Record by Name (V2)</div>
  <div>Finds a Pipeline Record by Name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Pipeline Object Record by ID (V2)</div>
  <div>Finds a Pipeline Object by ID</div>
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
          <title>Kizen</title>
          <meta name="description" content={`Kizen is a sales and marketing tool to collect, organize, and gain actionable insights on data.`} />
        </>
      ),
    },
  };
}
