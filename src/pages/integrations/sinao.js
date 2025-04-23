import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Sinao"
      description={`Integration of Sinao Version 2 (Accounting Software)`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sinao.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Sinao Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 59, 81, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Integration of Sinao Version 2 (Accounting Software)</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create/Edit - Product/Service</div>
  <div>Create/Edit a product/service.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete - Product/Service</div>
  <div>Delete a product/service with Sinao product/service ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Edit - Organization</div>
  <div>Create/Edit an organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete - Organization</div>
  <div>Delete an organization with Sinao organization ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Edit - Client</div>
  <div>Create/Edit a client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete - Client</div>
  <div>Delete a client with Sinao client ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Edit - Invoice</div>
  <div>Create/Edit an invoice with an amount in TTC/HT.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete - Invoice</div>
  <div>Delete an invoice with Sinao invoice ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find - Product/Service</div>
  <div>Find a product/service with Woocommerce product/service ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find - Organization</div>
  <div>Find an organization with Sinao organization ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find - Client</div>
  <div>Find a client with Woocommerce client ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find - Invoice</div>
  <div>Find an invoice with Sinao invoice ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">All - Recurring Invoices</div>
  <div>Return all recurring invoices</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find/Create - product</div>
  <div>Find a product/service with Woocommerce product/service ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find/Create - Organization</div>
  <div>Find an organization with Sinao organization ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find/Create - Client</div>
  <div>Find a client with Woocommerce client ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find/Create - Invoice</div>
  <div>Find an invoice with Sinao invoice ID.</div>
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
          <title>Sinao</title>
          <meta name="description" content={`Integration of Sinao Version 2 (Accounting Software)`} />
        </>
      ),
    },
  };
}
