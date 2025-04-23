import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ChatPay"
      description={`ChatPay is a platform for sharing knowledge and creating digital communities.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/chatpay-ca141500.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ChatPay Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(22, 195, 123, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ChatPay is a platform for sharing knowledge and creating digital communities.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Canceled Sale</div>
  <div>Triggers when a client makes a payment and it is refunded. (Evento enviado quando uma venda é cancelada).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Canceled Subscription</div>
  <div>Triggers when a user fails to complete payment or cancels their subscription with ChatPay (Evento enviado quando uma subscription é cancelada).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sale</div>
  <div>Triggers when a client makes a new purchase (Evento enviado toda vez que uma venda é concluída com sucesso).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when the ChatPay platform sees a user for the first time in your environment (Evento enviado quando um usuário faz uma compra pela primeira vez).</div>
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
          <title>ChatPay</title>
          <meta name="description" content={`ChatPay is a platform for sharing knowledge and creating digital communities.`} />
        </>
      ),
    },
  };
}
