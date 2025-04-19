import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="QuoteMachine"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/quotemachine.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        QuoteMachine Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(237, 19, 90, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">QuoteMachine is online quotes and invoices that help you sell and get paid.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Created</div>
  <div>Triggers when an contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Deleted</div>
  <div>Triggers when an contact is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when an contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Created</div>
  <div>Triggers when an invoice is created (sent or mark as done).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Payment Transaction Updated</div>
  <div>Triggers when an invoice is updated (received and then captured or declined).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Created</div>
  <div>Triggers when an order is marked as done.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Payment Transaction Updated</div>
  <div>Triggers when an order deposit is updated (received and then captured or declined).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Won Quote</div>
  <div>Triggers when a quote is won.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Quote Payment Transaction Updated</div>
  <div>Triggers when a quote deposit is updated (received and then captured or declined).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Proposed Quote</div>
  <div>Triggers when a quote is proposed to a customer.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create an Organization</div>
  <div>Create an organization (contact)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Person</div>
  <div>Create a person (contact)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact</div>
  <div>Search for a contact.</div>
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
          <title>QuoteMachine</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
