import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="BTCPay Server"
      description="Start Accepting Bitcoin Payments With 0% Fees & No Third-party"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/btcpay-server.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        BTCPay Server Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(209, 217, 76, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Start Accepting Bitcoin Payments With 0% Fees & No Third-party</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Created</div>
  <div>Triggers when a new invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Expired</div>
  <div>Triggers when an invoice expires, meaning the customer did not pay in the time he or she was supposed to.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Invalid</div>
  <div>Triggers when an invoice becomes invalid.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Payment Settled</div>
  <div>Triggers when a (potentially partial) payment related to an invoice has enough confirmations on the blockchain according to your store\'s configuration, making the payment final.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Processing</div>
  <div>Triggers when an invoice is fully paid, but doesn\'t have the required amount of confirmations on the blockchain yet according to your store\'s settings.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Received</div>
  <div>Triggers when a full or partial payment was received. The payment is not settled yet, meaning it does not have enough confirmations on the blockchain yet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Settled</div>
  <div>Triggers when an invoice is fully paid and has enough confirmations on the blockchain according to your store\'s configuration, making the invoice settled.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>Creates an Invoice</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payment Request</div>
  <div>Creates a Payment Request</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create an On-Chain Transaction</div>
  <div>Create an on-chain transaction from a store wallet to another address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a User</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Convert an Asset (Experimental)</div>
  <div>Create a market order to convert one of your assets into another asset in your custodian account. Your custodian account must have trading support.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Withdraw From a Custodian Account to Store Wallet (Experimental)</div>
  <div>Withdraw Funds from a Custodian Account to your Store Wallet using a specific payment method like "BTC-OnChain".</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate Store\'s Lightning Wallet Address</div>
  <div>Generates a new address for a store\'s lightning wallet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Generate On-Chain Wallet Address</div>
  <div>Generates a new address for a store wallet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Asset Balance in Custodian Account (Experimental)</div>
  <div>Get the balance of an asset held in a custodian account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get the Deposit Address for a Custodian Account (Experimental)</div>
  <div>Get the Deposit Address to deposit funds in a Custodian Account using a specific payment method like "BTC-OnChain".</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Store Lightning Node URI</div>
  <div>Get the clearnet and tor URI of your store\'s lightning node.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Store On-Chain Wallet Balance</div>
  <div>Get the balance of your On-Chain Store wallet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Invoice Settled</div>
  <div>Marks an invoice as settled</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mark Invoice Invalid</div>
  <div>Marks an invoice as invalid</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Open Store Lightning Channel</div>
  <div>Open a Lightning Channel for the Store\'s Lightning Node.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pay a Lightning Invoice</div>
  <div>Pay a Lightning Invoice using your Store\'s Lightning Wallet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Invoice by Order ID</div>
  <div>Finds an Invoice for a given order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Store Details</div>
  <div>Finds a Store for a given ID and get the details.</div>
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
          <title>BTCPay Server</title>
          <meta name="description" content="Start Accepting Bitcoin Payments With 0% Fees & No Third-party" />
        </>
      ),
    },
  };
}
