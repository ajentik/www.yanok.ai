import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="sticky.io"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/stickyio.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        sticky.io Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(27, 62, 111, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Eliminate the need for numerous plugins with sticky.io. Our API-driven platform simplifies subscription billing and order management — turning one-time transactions into recurring revenue.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Created/Updated Order</div>
  <div>Triggers when an initial and/or rebill order is created and/or updated. Supports order status updates.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Created/Updated Prospect</div>
  <div>Triggers when a new prospect is created or updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Mark Order as Chargeback</div>
  <div>Marks an order as a chargeback.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Order as Fraud</div>
  <div>Marks an order as fraud.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Order as Returned</div>
  <div>Marks an order as returned</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Order as Shipped</div>
  <div>Ships An Order.</div>
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
          <title>sticky.io</title>
        </>
      ),
    },
  };
}
