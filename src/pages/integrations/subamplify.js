import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Subamplify"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/subamplify.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Subamplify Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(238, 238, 238, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Subamplify is a subscription model driven ecommerce solution for businesses looking to sell their products online.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Completed Shop Order</div>
  <div>Triggers when a completed shop order is created in your Subamplify store.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Failed Shop Order</div>
  <div>Triggers when a failed shop order is created in your Subamplify store.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Gift Subscription</div>
  <div>Triggers when a new gift subscription is created in your Subamplify store.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Past Due Subscription</div>
  <div>Triggers when a new past due subscription is created in your Subamplify store.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Recurring Subscription</div>
  <div>Triggers when a new recurring subscription is created in your Subamplify store.</div>
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
          <title>Subamplify</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
