import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Seller.Tools"
      description="A full suite of Amazon FBA tools leveraging data through sources such as Seller Central to capture visibility and automate Amazon success."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sellertools.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Seller.Tools Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(48, 154, 214, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">A full suite of Amazon FBA tools leveraging data through sources such as Seller Central to capture visibility and automate Amazon success.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Generate Fulfillment Order</div>
  <div>Ship items from the seller\'s inventory in Amazon\'s fulfillment network to a destination address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Coupon</div>
  <div>Get Coupon by its ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Coupon Code</div>
  <div>Get Coupon Code for Promotion and mark it as used</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get All Coupons</div>
  <div>Retrieve a list of coupons for promotion</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Order</div>
  <div>Get Order by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Product</div>
  <div>Get Product by ASIN</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Order</div>
  <div>Get the list of all orders</div>
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
          <title>Seller.Tools</title>
          <meta name="description" content="A full suite of Amazon FBA tools leveraging data through sources such as Seller Central to capture visibility and automate Amazon success." />
        </>
      ),
    },
  };
}
