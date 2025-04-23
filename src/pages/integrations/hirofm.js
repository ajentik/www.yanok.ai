import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Hiro.fm"
      description={`Hiro.fm lets you quickly create private audio products to share with your customers so they can consume your content on the go using their favorite podcast player.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/hirofm.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Hiro.fm Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(186, 94, 250, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Hiro.fm lets you quickly create private audio products to share with your customers so they can consume your content on the go using their favorite podcast player.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Product List Requested</div>
  <div>Triggers when the client requests a product list, so subscribers can be assigned to a specific product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sale</div>
  <div>Triggers when a new sale is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Block Customer</div>
  <div>Set a customer to "off"</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add New Listener to Products</div>
  <div>Import a listener\'s email and name, and subscribe them to an audio product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Episode to Podcast</div>
  <div>Upload the episode contents</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Searches for a customer</div>
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
          <title>Hiro.fm</title>
          <meta name="description" content={`Hiro.fm lets you quickly create private audio products to share with your customers so they can consume your content on the go using their favorite podcast player.`} />
        </>
      ),
    },
  };
}
