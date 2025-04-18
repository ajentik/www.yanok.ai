import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="StoreHippo"
      description="StoreHippo is the new age eCommerce platform that provides you everything that you need to sell your products or services online."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/storehippo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        StoreHippo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(127, 181, 60, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">StoreHippo is the new age eCommerce platform that provides you everything that you need to sell your products or services online.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Enquiry</div>
  <div>Triggers when there\'s a new user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order</div>
  <div>Triggers when there\'s a new order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when there\'s a new product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when there\'s a new user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Triggers when any update is done in user.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Enquiry</div>
  <div>Action to add a new Enquiry in store Hippo system.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Product</div>
  <div>Execute when new product gets added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add User</div>
  <div>Action to add a new User in store Hippo system.</div>
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
          <title>StoreHippo</title>
          <meta name="description" content="StoreHippo is the new age eCommerce platform that provides you everything that you need to sell your products or services online." />
        </>
      ),
    },
  };
}
