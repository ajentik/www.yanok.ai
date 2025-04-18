import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Direct Debit"
      description="Direct Debit is a debt order collection software system in South Africa."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/direct-debit.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Direct Debit Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(23, 54, 109, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Direct Debit is a debt order collection software system in South Africa.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a Batch of EFT Debits</div>
  <div>Creates a new batch of EFT debits, this batch can be submitted immediately or later.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Batch of EFT Debits From a CSV File</div>
  <div>Creates a new batch of EFT debits, this batch can be submitted immediately or later.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Validate an Account</div>
  <div>Validate a bank account with check digit verification.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Validate a Batch of Accounts</div>
  <div>Use check digit verification to validate a batch of bank accounts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Validate a Branch Code</div>
  <div>Validates the given branch code and gives the branch details if it is valid.</div>
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
          <title>Direct Debit</title>
          <meta name="description" content="Direct Debit is a debt order collection software system in South Africa." />
        </>
      ),
    },
  };
}
