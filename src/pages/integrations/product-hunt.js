import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Product Hunt"
      description={`Product Hunt surfaces the best new products, every day. Discover the latest mobile apps, websites, hardware projects, and tech creations that product enthusiasts are talking about.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/product-hunt.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Product Hunt Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(218, 85, 47, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Product Hunt surfaces the best new products, every day. Discover the latest mobile apps, websites, hardware projects, and tech creations that product enthusiasts are talking about.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Hot Product</div>
  <div>Triggers when a product hits 100+ upvotes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Notification</div>
  <div>Triggers when you have a new notification (ie. lightning bolt in top right corner on Product Hunt).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when any new product is posted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Upvote</div>
  <div>Triggers when you upvote a product. Specify someone else\'s Product Hunt username to trigger off their upvotes instead.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Product Hunt</title>
          <meta name="description" content={`Product Hunt surfaces the best new products, every day. Discover the latest mobile apps, websites, hardware projects, and tech creations that product enthusiasts are talking about.`} />
        </>
      ),
    },
  };
}
