import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Monetizze"
      description={`Monetizze is a payment method with affiliate platform. There you can be a productor or affiliate, and sell info products or physical products.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/monetizze.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Monetizze Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(24, 46, 107, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Monetizze is a payment method with affiliate platform. There you can be a productor or affiliate, and sell info products or physical products.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Abandono Checkout</div>
  <div>Será ativado quando ocorrer um abandono de checkout</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assinatura Ativa</div>
  <div>Será ativado quando uma assinatura for realizada</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assinatura Cancelada</div>
  <div>Será ativado quando uma assinatura for cancelada</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assinatura Inadimplente</div>
  <div>Será ativado quando uma assinatura for inadimplente</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Boleto Impresso</div>
  <div>Será ativado quando ocorrer um boleto for impresso</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Afiliação Cancelada</div>
  <div>Será ativado quando um afiliado cancelar a afiliação</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Novo Afiliado</div>
  <div>Será ativado quando houver novo afiliado</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Venda</div>
  <div>Será ativado assim que um produto for comprado.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Venda Cancelada</div>
  <div>Será ativado assim que uma venda for cancelada</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Venda Devolvida</div>
  <div>Será ativado assim que um produto for devolvido</div>
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
          <title>Monetizze</title>
          <meta name="description" content={`Monetizze is a payment method with affiliate platform. There you can be a productor or affiliate, and sell info products or physical products.`} />
        </>
      ),
    },
  };
}
