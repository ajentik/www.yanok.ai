import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="DeltaNet CRM"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/deltanet-crm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        DeltaNet CRM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(2, 35, 107, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">DeltaNET CRM App is CRM and leads management tool for real estate agents.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Request</div>
  <div>Triggers when a new request in DeltaNet is created</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Customer</div>
  <div>Create a new customer in DeltaNet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note</div>
  <div>Add note to the specified customer (only if it is on customer list).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe Customer</div>
  <div>Subscribe customer to company blog</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add To-Do</div>
  <div>Add to-do action to selected customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add to Group</div>
  <div>Add customer to group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Calendar Event</div>
  <div>Create a calendar event in agent calendar</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Event</div>
  <div>Delete a calendar event by event_id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete From Group</div>
  <div>Customer will be removed from group with selected id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Create a Lead request for customer with selected email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Customer</div>
  <div>Customer will be removed from your or your company subscribers list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Showing Request</div>
  <div>Create a Showing Request</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Customer</div>
  <div>Finds a customer with existing email address</div>
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
          <title>DeltaNet CRM</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
