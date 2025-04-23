import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Kobana (previously Boleto Simples)"
      description={`Kobana connects your company's or your users' internal systems through a unique API interface that automates billing, updates statements, makes payments at more than 30 Brazilian banks in a scalable and secure way.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/kobana.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Kobana (previously Boleto Simples) Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(211, 253, 84, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Kobana connects your company\'s or your users\' internal systems through a unique API interface that automates billing, updates statements, makes payments at more than 30 Brazilian banks in a scalable and secure way.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Pagamento De Boleto Criado (bank_billet_payment.created)</div>
  <div>Evento disparado quando um pagamento de boleto é criado.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pagamento De Boleto Excluído (bank_billet_payment.created)</div>
  <div>Evento disparado quando um pagamento de boleto é excluído.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pagamento De Boleto Atualizado (bank_billet_payment.updated)</div>
  <div>Evento disparado quando um pagamento de boleto é atualizado.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Boleto Cancelado (bank_billet.canceled)</div>
  <div>Evento disparado quando um boleto é cancelado.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Boleto Criado (bank_billet.created)</div>
  <div>Evento disparado quando um boleto é criado.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">PDF Do Boleto Gerado (bank_billet.generated)</div>
  <div>Evento disparado quando o PDF do boleto é gerado.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Boleto Vencido (bank_billet.overdue)</div>
  <div>Evento disparado quando um boleto fica vencido.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Boleto Pago (bank_billet.paid)</div>
  <div>Evento disparado quando um boleto é pago.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Boleto Registrado (bank_billet.registered)</div>
  <div>Evento disparado quando um boleto é registrado no banco.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Boleto Rejeitado (bank_billet.rejected)</div>
  <div>Evento disparado quando um boleto é rejeitado pelo banco.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Boleto Atualizado (bank_billet.updated)</div>
  <div>Evento disparado quando os dados de um boleto são atualizados.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assinatura Criada (customer_subscription.created)</div>
  <div>Evento disparado quando uma assinatura é criada.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assinatura Excluída (customer_subscription.deleted)</div>
  <div>Evento disparado quando uma assinatura é excluída.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assinatura Atualizada (customer_subscription.updated)</div>
  <div>Evento disparado quando uma assinatura é atualizada.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cliente Criado (customer.created)</div>
  <div>Evento disparado quando um cliente é criado.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cliente Excluído (customer.deleted)</div>
  <div>Evento disparado quando um cliente é excluído.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cliente Atualizado (customer.updated)</div>
  <div>Evento disparado quando os dados de um cliente são atualizados.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">CNAB Retorno Criado (discharge.created)</div>
  <div>Evento disparado quando um arquivo cnab de retorno é criado.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">CNAB Retorno Processado (discharge.processed)</div>
  <div>Evento disparado quando um arquivo cnab de retorno é processado.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Carnê Criado (installment.created)</div>
  <div>Evento disparado quando um carnê é criado.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Carnê Excluído (installment.deleted)</div>
  <div>Evento disparado quando um carnê é excluído.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">PDF Das Parcelas Do Carnê Gerados (installment.generated)</div>
  <div>Evento disparado quando os PDFs de todas as parcelas de um carnê foram gerados.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Parcelas Do Carnê Criadas (installment.processed)</div>
  <div>Evento disparado quando todas as parcelas de um carnê foram criadas.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">CNAB Remessa Criado (remittance.created)</div>
  <div>Evento disparado quando um arquivo cnab de remessa é criado.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">CNAB Remessa Baixado (remittance.downloaded)</div>
  <div>Evento disparado quando o download de um arquivo cnab de remessa é realizado.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">CNAB Remessa Processado (remittance.processed)</div>
  <div>Evento disparado quando um arquivo cnab de remessa é processado.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">CNAB Remessa Enviado (remittance.sent)</div>
  <div>Evento disparado quando um arquivo cnab de remessa é enviado para o banco (somente quando a carteira de cobrança está com a VAN ativada).</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Criar Boleto</div>
  <div>Cria um novo boleto (e registra caso a conta esteja configurada pra isso).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancelar Boleto</div>
  <div>Cancela um boleto existente.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Efetuar Pagamento De Boleto</div>
  <div>Efetua o pagamento de um boleto.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Criar Cliente</div>
  <div>Cria um novo cliente</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Criar Assinatura</div>
  <div>Cria uma nova assinatura.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enviar CNAB Retorno</div>
  <div>Enviar um novo arquivo CNAB de retorno</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Criar Carnê</div>
  <div>Cria um novo carnê.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Criar CNAB Remessa</div>
  <div>Criar um novo arquivo CNAB de Remessa</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Buscar Boletos</div>
  <div>Buscar boletos a partir de diversos campos.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Buscar Pagamentos De Boletos</div>
  <div>Buscar pagamentos de boletos a partir de diversos campos.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Buscar Clientes</div>
  <div>Buscar clientes a partir do ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Buscar Assinaturas</div>
  <div>Buscar assinaturas a partir de diversos campos.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Buscar CNAB De Retorno</div>
  <div>Buscar arquivo CNAB de retorno a partir de diversos campos.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Buscar Carnês</div>
  <div>Buscar carnês a partir de diversos campos.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Buscar CNAB De Remessa</div>
  <div>Buscar arquivo CNAB de remessa a partir de diversos campos.</div>
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
          <title>Kobana (previously Boleto Simples)</title>
          <meta name="description" content={`Kobana connects your company's or your users' internal systems through a unique API interface that automates billing, updates statements, makes payments at more than 30 Brazilian banks in a scalable and secure way.`} />
        </>
      ),
    },
  };
}
