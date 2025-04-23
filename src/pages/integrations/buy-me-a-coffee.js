import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Buy Me a Coffee"
      description={`A free, fast, and beautiful way to fund your creativity. It only takes a minute to start your page and has all the features to build your creative business.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/buy-me-a-coffee.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Buy Me a Coffee Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 129, 63, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">A free, fast, and beautiful way to fund your creativity. It only takes a minute to start your page and has all the features to build your creative business.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Support</div>
  <div>Triggers when you have a new supporter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Extra</div>
  <div>Triggers when you create a new extra.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Extra Purchase</div>
  <div>Triggers when you have a new purchase on your extra.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member</div>
  <div>Triggers when you have a new monthly or yearly member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Post</div>
  <div>Triggers when you create a new post.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when you add a new product to shop.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase</div>
  <div>Triggers when there is a new purchase on your shop item.</div>
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
          <title>Buy Me a Coffee</title>
          <meta name="description" content={`A free, fast, and beautiful way to fund your creativity. It only takes a minute to start your page and has all the features to build your creative business.`} />
        </>
      ),
    },
  };
}
