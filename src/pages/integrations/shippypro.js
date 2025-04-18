import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ShippyPro"
      description="ShippyPro is the One-Stop Shipping Solution that allows you to create Shipping Labels, Track Packages and Manage Returns."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/shippypro.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ShippyPro Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 14, 150, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ShippyPro is the One-Stop Shipping Solution that allows you to create Shipping Labels, Track Packages and Manage Returns.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Label Generated</div>
  <div>Triggers when a new shipping label is generated in ShippyPro. Get the shipping label and the tracking number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order Imported</div>
  <div>Triggers when a new order is imported into ShippyPro from a connected Sales Channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Return Received</div>
  <div>Triggers when a new return is created from your ShippyPro Return Portal. Powered by ShippyPro Easy Return technology.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tracking Update</div>
  <div>Triggers whenever a tracking status is changed. Get tracking updates for your shipments in transit and delivered.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get Shipping Rates</div>
  <div>Calculate Shipping Rates and estimate shipping costs for an order.</div>
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
          <title>ShippyPro</title>
          <meta name="description" content="ShippyPro is the One-Stop Shipping Solution that allows you to create Shipping Labels, Track Packages and Manage Returns." />
        </>
      ),
    },
  };
}
