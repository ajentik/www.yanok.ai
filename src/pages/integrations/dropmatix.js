import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Dropmatix"
      description={`Dropmatix is an e-commerce ERP solution and automates sales, inventory, online stores and sales platforms.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/dropmatix.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Dropmatix Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(253, 101, 3, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Dropmatix is an e-commerce ERP solution and automates sales, inventory, online stores and sales platforms.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Product on DRM</div>
  <div>Trigger\'s When a New Product on DRMCreated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">All Tag</div>
  <div>Triggers when All Tag show.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Droptienda Chat</div>
  <div>Triggers when a new Droptienda message is sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Error Notification</div>
  <div>Triggers when a error notification is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Manual Notification</div>
  <div>Triggers when a manual notification is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Channel</div>
  <div>Trigger\'s When a new Channel is Created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Import</div>
  <div>Triggers when a new import is done.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers When A new lead is added</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when a new order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subuser</div>
  <div>Triggers when a new subuser is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Publish Product on Channel</div>
  <div>Triggers when product published on channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Status Update (Cancel)</div>
  <div>Triggers when a status update cancel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Status Update (Inkasso)</div>
  <div>Triggers when a status inkasso is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Status Update (Shipped)</div>
  <div>Triggers when a status update shipped.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Triggers when a contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product Feed</div>
  <div>Triggers when a product feed is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Product Create</div>
  <div>products can be added via this</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a Customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Create a new order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Accounting Document to Archive</div>
  <div>Adds Accounting document to archive</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Update</div>
  <div>Updates a customer</div>
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
          <title>Dropmatix</title>
          <meta name="description" content={`Dropmatix is an e-commerce ERP solution and automates sales, inventory, online stores and sales platforms.`} />
        </>
      ),
    },
  };
}
