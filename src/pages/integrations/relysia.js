import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Relysia"
      description={`Relysia is a Blockchain as a Service offer to write immutable data to chain, create smart contracts on the fly and send them to hundrets of recipients at once.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/relysia.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Relysia Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(215, 71, 14, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Relysia is a Blockchain as a Service offer to write immutable data to chain, create smart contracts on the fly and send them to hundrets of recipients at once.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Address</div>
  <div>Receive a single address and the paymail alias to receive Coins or Token.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">All Addresses</div>
  <div>Get a list of all wallet addresses that are currently available in your wallet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Balance</div>
  <div>Returns both coin and token balances.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Wallet</div>
  <div>Create a HD wallet of choice in your user account. You can select between standard, secure, escrow and shared wallets (see docs.relysia.com).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Drop</div>
  <div>The drop endpoints allows users to transfer coins (BSV or Token) from a PrivateKey.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">History</div>
  <div>The transaction history endpoint returns all past transactions, both BSV and Tokens.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Issue</div>
  <div>Mint a token with given specifications (can be both token or NFT). More on docs.relysia.com.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Matrics</div>
  <div>UTXOs are the base unit of transactions in the Bitcoin network. The metrics endpoint first updates the last UTXO state, and then shows a detailled output of each UTXO in the wallet.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mnemonic</div>
  <div>The mnemonic phrase secures your wallet keys. Each mnemonic acts as seed of a HDPrivatekey that itself contains hundrets of PrivateKeys.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Offer</div>
  <div>This endpoint allows user to create a swap offer. The amount is the value in satoshis wanted in exchange for the token.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post</div>
  <div>The /post endpoint broadcasts a note to the blockchain (in B:// protocol format).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reset Password</div>
  <div>Reset your password and send a confirmation to the registered mail.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send</div>
  <div>Sends BSV, token or NFT.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Swap</div>
  <div>This endpoint allows users to accept swap offers by passing respective hex value values.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload</div>
  <div>The /upload endpoint broadcasts a media file (supplied as URL) to the blockchain (in B:// protocol format).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Profile</div>
  <div>Call the /User endpoint to receive all account specific information.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Wallets</div>
  <div>The endpoint provides the user with a list of all active wallets on their account. Depending on your service requirements, you might have one or multiple wallets.</div>
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
          <title>Relysia</title>
          <meta name="description" content={`Relysia is a Blockchain as a Service offer to write immutable data to chain, create smart contracts on the fly and send them to hundrets of recipients at once.`} />
        </>
      ),
    },
  };
}
