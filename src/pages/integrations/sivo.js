import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Sivo"
      description={`Sivo provides debt-as-a-service. Our API allows companies to access debt funding and lend money to their users at scale.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sivo.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Sivo Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(112, 80, 163, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Sivo provides debt-as-a-service. Our API allows companies to access debt funding and lend money to their users at scale.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Changed Loan Application</div>
  <div>Triggers when a loan application is created or updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Business Borrower</div>
  <div>Creates or updates a business borrower.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Consumer Borrower</div>
  <div>Creates or updates a consumer borrower.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a contact for a bank account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Draw Debt Line</div>
  <div>Draws money from a debt line</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Ledger Entries by Debt Line Id</div>
  <div>Get all ledger entries associated with debt line</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upsert Loan Application</div>
  <div>Creates or updates a loan application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upsert Originator Asset</div>
  <div>Creates or updates an originator asset (with line item support).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pay Debt Line</div>
  <div>Pays down a debt line</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Loan</div>
  <div>Creates or updates a loan.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Report</div>
  <div>Creates or updates a report.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Money</div>
  <div>Sends money to a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Loan Application</div>
  <div>Gets a loan application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Loan Application</div>
  <div>Gets a loan application.</div>
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
          <title>Sivo</title>
          <meta name="description" content={`Sivo provides debt-as-a-service. Our API allows companies to access debt funding and lend money to their users at scale.`} />
        </>
      ),
    },
  };
}
