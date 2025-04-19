import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Sperant"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sperant.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Sperant Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 71, 185, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Sperant is a complete software that covers the lead lifecycle: lead creation, sale, and post-sale. / Somos un Software completo que va desde la captación de un Lead hasta la post-venta.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Client Created / Cliente Creado</div>
  <div>Triggers when a client is manually created in Sperant / Se activa cuando un cliente es creado manualmente en Sperant.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Client Digital / Cliente Digital</div>
  <div>Triggered when a customer is created in Sperant automatically by the digital integrations. / Se activa cuando un cliente llega de manera digital a Sperant.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client / Crear Cliente</div>
  <div>Create a client in Sperant with the submitted values / Creará un cliente en el sistema Sperant con los datos enviados.</div>
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
          <title>Sperant</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
