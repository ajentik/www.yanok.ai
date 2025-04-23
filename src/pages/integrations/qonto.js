import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Qonto"
      description={`Qonto is bank built to make finances easier for businesses.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/qonto.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Qonto Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(107, 90, 237, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Qonto is bank built to make finances easier for businesses.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Bank Account Balance Change</div>
  <div>Triggers when the balance of a bank account changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Bank Account</div>
  <div>Triggers when a new bank account is detected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Transaction (Legacy)</div>
  <div>Triggers when a new transaction is detected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Transaction</div>
  <div>Triggers when a new transaction is detected.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Transaction</div>
  <div>Triggers when a transaction is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Updated Attachments</div>
  <div>Triggers when the attachments of a transaction gets updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Updated Labels</div>
  <div>Triggers when the labels of a transaction gets updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Updated VAT</div>
  <div>Triggers when the VAT of a transaction gets updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Transfer</div>
  <div>Triggers when a new transfer is detected.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create External Transfer</div>
  <div>Transfers to a given beneficiary Iban</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Internal Transfer</div>
  <div>Transfers between accounts of the same organization</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Attachment</div>
  <div>Adds a new attachment to a transaction</div>
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
          <title>Qonto</title>
          <meta name="description" content={`Qonto is bank built to make finances easier for businesses.`} />
        </>
      ),
    },
  };
}
