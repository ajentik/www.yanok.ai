import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="MaintainX"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/maintainx.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        MaintainX Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(24, 135, 252, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">MaintainX helps you track your reactive maintenance, preventive maintenance, and control the daily operations of your business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Category on Work Order</div>
  <div>Triggers when a new category is added to a work order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Work Order</div>
  <div>Triggers when a new work order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Work Order Status Change</div>
  <div>Triggers when a work order status is changed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Existing Categories to a Work Order</div>
  <div>Adds Existing Categories to a Work Order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Message</div>
  <div>Creates a new Message in a Conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Work Order Comment</div>
  <div>Creates a new Comment on a Work Order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Work Order</div>
  <div>Creates a new Work Order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Work Request</div>
  <div>Creates a new Work Request.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find an Entity</div>
  <div>Find an Entity by a specified field.</div>
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
          <title>MaintainX</title>
        </>
      ),
    },
  };
}
