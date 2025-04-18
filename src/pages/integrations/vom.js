import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="VOM"
      description="VôM is a homegrown accounting software platform. VôM aims to provide “Value of Money” to small businesses that are focused on easily managing their financials. Provides anyone that has no background in accounting with all accounting reports easily"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/vom.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        VOM Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(22, 213, 180, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">VôM is a homegrown accounting software platform. VôM aims to provide “Value of Money” to small businesses that are focused on easily managing their financials. Provides anyone that has no background in accounting with all accounting reports easily</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Add new customer to your company in VOM through zapier</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>Create new invoice</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Journal Entry</div>
  <div>Add new journal entry to the company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Create a Product</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product Quantity</div>
  <div>Update Product Quantity</div>
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
          <title>VOM</title>
          <meta name="description" content="VôM is a homegrown accounting software platform. VôM aims to provide “Value of Money” to small businesses that are focused on easily managing their financials. Provides anyone that has no background in accounting with all accounting reports easily" />
        </>
      ),
    },
  };
}
