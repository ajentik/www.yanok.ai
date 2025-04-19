import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Skubana"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/skubana.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Skubana Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 90, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Skubana is a cloud based, all-in-one operations software to handle and automate order management, inventory, analytics, POs, & accounting.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Order in a Chosen Status</div>
  <div>Triggers when a new order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Order in a Chosen Status</div>
  <div>Triggers when an order is updated or created and has the desired status.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Shipped</div>
  <div>Triggers when an order is shipped. Individual order items are also included.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sales Channel</div>
  <div>Triggers when a new sales channel is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Shipped Order With Date</div>
  <div>Triggers when an order is shipped with a created date time.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Order</div>
  <div>Creates a new order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Order as Shipped</div>
  <div>Marks an order as shipped.</div>
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
          <title>Skubana</title>
        </>
      ),
    },
  };
}
