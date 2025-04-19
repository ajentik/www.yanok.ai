import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Bright Sites"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/bright-sites.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Bright Sites Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(41, 52, 128, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Bright Sites is a SaaS eCommerce platform designed for promotional product Distributors and Suppliers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Order Created</div>
  <div>Triggers when a new order is placed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Updated</div>
  <div>Triggers when an existing order was updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Order</div>
  <div>Cancel order by Order Number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Order</div>
  <div>Update order by Order Number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Order</div>
  <div>Find Order by Order Number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User</div>
  <div>Find user by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Orders</div>
  <div>Search Orders.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Shipments</div>
  <div>Get shipments for given Order Number.</div>
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
          <title>Bright Sites</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
