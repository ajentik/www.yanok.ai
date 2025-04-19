import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Contalink"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/contalink.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Contalink Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(120, 175, 30, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Contalink is an accounting and administrative system in the cloud to make the work of the accountant more efficient through the extensive use of technology and automation techniques.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Products</div>
  <div>Triggers when new products are available on Contalink.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Storange</div>
  <div>Triggers when the storage was recently updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Products</div>
  <div>Triggers when a product was recently updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Register clients in Contalink</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sales Order</div>
  <div>Create a sales order from contalink with its respective lines and auto-completion. It is important to ensure that the clients and products are already created in contalink, otherwise, Zapier will return an error of not their existence.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Client</div>
  <div>Update the clients from the contalink client catalog</div>
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
          <title>Contalink</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
