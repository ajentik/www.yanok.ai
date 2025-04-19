import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="idexo"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/idexo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        idexo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(86, 86, 229, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">idexo lets you create NFTs from any web2 application</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Capped NFT Collection on Avalanche</div>
  <div>Creates a capped NFT collection on Avalanche</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Capped NFT Collection on BNBChain</div>
  <div>Create a NFT collection to mint NFTs into</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Capped NFT Collection on Dogechain</div>
  <div>Creates a capped NFT collection on Dogechain</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Capped NFT Collection on Fantom</div>
  <div>Creates a capped NFT collection on Fantom</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Capped NFT Collection on Polygon</div>
  <div>Creates a capped NFT collection on Polygon</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Capped Soulbound Token Collection on Avalanche</div>
  <div>Creates a capped Soulbound Token collection smart contract on Avalanche</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create an NFT Using a Special ID on Polygon</div>
  <div>Creates an NFT Referencing a Special ID Added in a Premint</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mint an NFT on BNBChain</div>
  <div>Mints an NFT on a NFT Collection Smart Contract</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mint an NFT on Dogechain</div>
  <div>Mints an NFT on Dogechain</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mints an NFT on Fantom</div>
  <div>Mints an NFT on Fantom</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mint an NFT on Polygon</div>
  <div>Mints an NFT on Polygon</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Mint an SBT on Avalanche</div>
  <div>Mints an SBT (Soulbound Token) on Avalanche</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create NFT With Image Plus Metadata With One Call</div>
  <div>In one transaction call this uploads an image (provided as a base64 string), uploads a metadata file that includes the link to that image, and mints an NFT using the created metadata link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Premint NFT for Polygon</div>
  <div>Creates a metadata file link, including image, name, description and optional attributes for use in minting an NFT.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload JSON File to Arweave</div>
  <div>This uploads your JSON file to Arweave permanent decentralized storage.</div>
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
          <title>idexo</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
